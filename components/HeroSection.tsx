'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Star, Shield, Truck, Award, ChevronRight, Zap, Globe, CheckCircle2, ArrowRight, Play, BarChart3, Users, Activity } from 'lucide-react';
import Link from 'next/link';
import { ContainerScroll } from './ui/container-scroll-animation';

// Types for component props
interface HeroProps {
    trustBadge?: {
        text: string;
        icons?: React.ReactNode[];
    };
    headline: {
        line1: string;
        line2: string;
    };
    subtitle: string;
    buttons?: {
        primary?: {
            text: string;
            onClick?: () => void;
        };
        secondary?: {
            text: string;
            onClick?: () => void;
        };
    };
    className?: string;
}

const defaultShaderSource = `#version 300 es
/*********
* made by Matthias Hurrle (@atzedent)
*/
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)
float rnd(vec2 p) {
  p=fract(p*vec2(12.9898,78.233));
  p+=dot(p,p+34.56);
  return fract(p.x*p.y);
}
float noise(in vec2 p) {
  vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
  float
  a=rnd(i),
  b=rnd(i+vec2(1,0)),
  c=rnd(i+vec2(0,1)),
  d=rnd(i+1.);
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
}
float fbm(vec2 p) {
  float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
  for (int i=0; i<5; i++) {
    t+=a*noise(p);
    p*=2.*m;
    a*=.5;
  }
  return t;
}
float clouds(vec2 p) {
	float d=1., t=.0;
	for (float i=.0; i<3.; i++) {
		float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
		t=mix(t,d,a);
		d=a;
		p*=2./(i+1.);
	}
	return t;
}
void main(void) {
	vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
	vec3 col=vec3(0);
	float bg=clouds(vec2(st.x+T*.5,-st.y));
	uv*=1.-.3*(sin(T*.2)*.5+.5);
	for (float i=1.; i<12.; i++) {
		uv+=.1*cos(i*vec2(.1+.01*i, .8)+i*i+T*.5+.1*uv.x);
		vec2 p=uv;
		float d=length(p);
		col+=.00125/d*(cos(sin(i)*vec3(1,2,3))+1.);
		float b=noise(i+p+bg*1.731);
		col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
		col=mix(col,vec3(bg*.25,bg*.137,bg*.05),d);
	}
	O=vec4(col,1);
}`;

// Reusable Shader Background Hook
const useShaderBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number>(0);
    const rendererRef = useRef<any>(null);
    const pointersRef = useRef<any>(null);

    // WebGL Renderer class
    class WebGLRenderer {
        private canvas: HTMLCanvasElement;
        private gl: WebGL2RenderingContext;
        private program: WebGLProgram | null = null;
        private vs: WebGLShader | null = null;
        private fs: WebGLShader | null = null;
        private buffer: WebGLBuffer | null = null;
        private scale: number;
        private shaderSource: string;
        private mouseMove = [0, 0];
        private mouseCoords = [0, 0];
        private pointerCoords = [0, 0];
        private nbrOfPointers = 0;

        private vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

        private vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

        constructor(canvas: HTMLCanvasElement, scale: number) {
            this.canvas = canvas;
            this.scale = scale;
            this.gl = canvas.getContext('webgl2')!;
            this.gl.viewport(0, 0, canvas.width * scale, canvas.height * scale);
            this.shaderSource = defaultShaderSource;
        }

        updateShader(source: string) {
            this.reset();
            this.shaderSource = source;
            this.setup();
            this.init();
        }

        updateMove(deltas: number[]) {
            this.mouseMove = deltas;
        }

        updateMouse(coords: number[]) {
            this.mouseCoords = coords;
        }

        updatePointerCoords(coords: number[]) {
            this.pointerCoords = coords;
        }

        updatePointerCount(nbr: number) {
            this.nbrOfPointers = nbr;
        }

        updateScale(scale: number) {
            this.scale = scale;
            this.gl.viewport(0, 0, this.canvas.width * scale, this.canvas.height * scale);
        }

        compile(shader: WebGLShader, source: string) {
            const gl = this.gl;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);

            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                const error = gl.getShaderInfoLog(shader);
                console.error('Shader compilation error:', error);
            }
        }

        test(source: string) {
            let result = null;
            const gl = this.gl;
            const shader = gl.createShader(gl.FRAGMENT_SHADER)!;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);

            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                result = gl.getShaderInfoLog(shader);
            }
            gl.deleteShader(shader);
            return result;
        }

        reset() {
            const gl = this.gl;
            if (this.program && !gl.getProgramParameter(this.program, gl.DELETE_STATUS)) {
                if (this.vs) {
                    gl.detachShader(this.program, this.vs);
                    gl.deleteShader(this.vs);
                }
                if (this.fs) {
                    gl.detachShader(this.program, this.fs);
                    gl.deleteShader(this.fs);
                }
                gl.deleteProgram(this.program);
            }
        }

        setup() {
            const gl = this.gl;
            this.vs = gl.createShader(gl.VERTEX_SHADER)!;
            this.fs = gl.createShader(gl.FRAGMENT_SHADER)!;
            this.compile(this.vs, this.vertexSrc);
            this.compile(this.fs, this.shaderSource);
            this.program = gl.createProgram()!;
            gl.attachShader(this.program, this.vs);
            gl.attachShader(this.program, this.fs);
            gl.linkProgram(this.program);

            if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
                console.error(gl.getProgramInfoLog(this.program));
            }
        }

        init() {
            const gl = this.gl;
            const program = this.program!;

            this.buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

            const position = gl.getAttribLocation(program, 'position');
            gl.enableVertexAttribArray(position);
            gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

            (program as any).resolution = gl.getUniformLocation(program, 'resolution');
            (program as any).time = gl.getUniformLocation(program, 'time');
            (program as any).move = gl.getUniformLocation(program, 'move');
            (program as any).touch = gl.getUniformLocation(program, 'touch');
            (program as any).pointerCount = gl.getUniformLocation(program, 'pointerCount');
            (program as any).pointers = gl.getUniformLocation(program, 'pointers');
        }

        render(now = 0) {
            const gl = this.gl;
            const program = this.program;

            if (!program || gl.getProgramParameter(program, gl.DELETE_STATUS)) return;

            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.useProgram(program);
            gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);

            gl.uniform2f((program as any).resolution, this.canvas.width, this.canvas.height);
            gl.uniform1f((program as any).time, now * 1e-3);
            gl.uniform2f((program as any).move, this.mouseMove[0], this.mouseMove[1]);
            gl.uniform2f((program as any).touch, this.mouseCoords[0], this.mouseCoords[1]);
            gl.uniform1i((program as any).pointerCount, this.nbrOfPointers);
            gl.uniform2fv((program as any).pointers, this.pointerCoords);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }
    }

    // Pointer Handler class
    class PointerHandler {
        private scale: number;
        private active = false;
        private pointers = new Map<number, number[]>();
        private lastCoords = [0, 0];
        private moves = [0, 0];

        constructor(element: HTMLCanvasElement, scale: number) {
            this.scale = scale;

            const map = (element: HTMLCanvasElement, scale: number, x: number, y: number) =>
                [x * scale, element.height - y * scale];

            element.addEventListener('pointerdown', (e) => {
                this.active = true;
                this.pointers.set(e.pointerId, map(element, this.getScale(), e.clientX, e.clientY));
            });

            element.addEventListener('pointerup', (e) => {
                if (this.count === 1) {
                    this.lastCoords = this.first;
                }
                this.pointers.delete(e.pointerId);
                this.active = this.pointers.size > 0;
            });

            element.addEventListener('pointerleave', (e) => {
                if (this.count === 1) {
                    this.lastCoords = this.first;
                }
                this.pointers.delete(e.pointerId);
                this.active = this.pointers.size > 0;
            });

            element.addEventListener('pointermove', (e) => {
                if (!this.active) return;
                this.lastCoords = [e.clientX, e.clientY];
                this.pointers.set(e.pointerId, map(element, this.getScale(), e.clientX, e.clientY));
                this.moves = [this.moves[0] + e.movementX, this.moves[1] + e.movementY];
            });
        }

        getScale() {
            return this.scale;
        }

        updateScale(scale: number) {
            this.scale = scale;
        }

        get count() {
            return this.pointers.size;
        }

        get move() {
            return this.moves;
        }

        get coords() {
            return this.pointers.size > 0
                ? Array.from(this.pointers.values()).flat()
                : [0, 0];
        }

        get first() {
            return this.pointers.values().next().value || this.lastCoords;
        }
    }

    const resize = () => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const dpr = Math.max(1, 0.5 * window.devicePixelRatio);

        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;

        if (rendererRef.current) {
            rendererRef.current.updateScale(dpr);
        }
    };

    const loop = (now: number) => {
        if (!rendererRef.current || !pointersRef.current) return;

        rendererRef.current.updateMouse(pointersRef.current.first);
        rendererRef.current.updatePointerCount(pointersRef.current.count);
        rendererRef.current.updatePointerCoords(pointersRef.current.coords);
        rendererRef.current.updateMove(pointersRef.current.move);
        rendererRef.current.render(now);
        animationFrameRef.current = requestAnimationFrame(loop);
    };

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const dpr = Math.max(1, 0.5 * window.devicePixelRatio);

        rendererRef.current = new WebGLRenderer(canvas, dpr);
        pointersRef.current = new PointerHandler(canvas, dpr);

        rendererRef.current.setup();
        rendererRef.current.init();

        resize();

        if (rendererRef.current.test(defaultShaderSource) === null) {
            rendererRef.current.updateShader(defaultShaderSource);
        }

        loop(0);

        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (rendererRef.current) {
                rendererRef.current.reset();
            }
        };
    }, []);

    return canvasRef;
};

// Stats Data
const stats = [
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '50K+', label: 'Products', icon: Zap },
    { value: '100+', label: 'Countries', icon: Globe },
    { value: '99.9%', label: 'Client Satisfaction', icon: CheckCircle2 },
];

// Premium Hero Component
const HeroSection: React.FC<HeroProps> = ({
    trustBadge,
    headline,
    subtitle,
    buttons,
    className = ""
}) => {
    const canvasRef = useShaderBackground();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black mb-6 sm:mb-10 ${className}`}>
            {/* Custom Animations */}
            <style jsx>{`
                /* Custom Skew Button Styles */
                .btn-skew {
                    --color: #C4960C;
                    --color-hover: #1a1a1a;
                    padding: 1em 2.5em;
                    background-color: transparent;
                    border-radius: 8px;
                    border: 2px solid var(--color);
                    transition: .5s;
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                    z-index: 1;
                    font-weight: 600;
                    font-size: 16px;
                    font-family: inherit;
                    text-transform: uppercase;
                    color: var(--color);
                    letter-spacing: 0.05em;
                }
                .btn-skew::after, .btn-skew::before {
                    content: '';
                    display: block;
                    height: 100%;
                    width: 100%;
                    transform: skew(90deg) translate(-50%, -50%);
                    position: absolute;
                    inset: 50%;
                    left: 25%;
                    z-index: -1;
                    transition: .5s ease-out;
                    background-color: var(--color);
                }
                .btn-skew::before {
                    top: -50%;
                    left: -25%;
                    transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
                }
                .btn-skew:hover::before {
                    transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
                }
                .btn-skew:hover::after {
                    transform: skew(45deg) translate(-50%, -50%);
                }
                .btn-skew:hover {
                    color: var(--color-hover);
                }
                .btn-skew:active {
                    filter: brightness(.9);
                    transform: scale(.98);
                }

                /* Secondary Button - Teal variant */
                .btn-skew-secondary {
                    --color: #0D9488;
                    --color-hover: #ffffff;
                }
            `}</style>

            {/* Shader Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-cover touch-none"
                style={{ background: 'black' }}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

            {/* Main Content with Container Scroll Animation */}
            <div className="relative z-10">
                <ContainerScroll
                    titleComponent={
                        <div className="flex flex-col items-center justify-center">
                            {/* Trust Badge */}
                            {trustBadge && (
                                <div className="inline-flex mb-6 sm:mb-8 animate-fade-in-up">
                                    <div className="relative group cursor-pointer">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-amber-400 to-brand-gold rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
                                        <div className="relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
                                            <div className="flex gap-0.5">
                                                {[1, 2, 3].map((i) => (
                                                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-brand-gold fill-brand-gold" />
                                                ))}
                                            </div>
                                            <span className="text-white font-semibold tracking-wide text-xs sm:text-sm">
                                                {trustBadge.text}
                                            </span>
                                            <ChevronRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                                <span className="bg-gradient-to-r from-brand-gold via-amber-300 to-brand-gold bg-clip-text text-transparent italic font-serif block mb-2">
                                    {headline.line1}
                                </span>
                                <span className="bg-gradient-to-r from-brand-teal-light via-teal-300 to-brand-teal-light bg-clip-text text-transparent">
                                    {headline.line2}
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                                {subtitle}
                            </p>

                            {/* Buttons */}
                            {buttons && (
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12">
                                    {buttons.primary && (
                                        <Link href="/products">
                                            <button
                                                onClick={buttons.primary.onClick}
                                                className="btn-skew flex items-center justify-center gap-3"
                                            >
                                                <span>{buttons.primary.text}</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </Link>
                                    )}

                                    {buttons.secondary && (
                                        <Link href="/bom">
                                            <button
                                                onClick={buttons.secondary.onClick}
                                                className="btn-skew btn-skew-secondary flex items-center justify-center gap-3"
                                            >
                                                <Zap className="w-5 h-5" />
                                                <span>{buttons.secondary.text}</span>
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    }
                >
                    {/* Dashboard Mockup Card */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black p-6 flex flex-col gap-6">
                        {/* Header Bar */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="text-gray-400 text-sm font-mono">seretech-dashboard.exe</div>
                        </div>

                        {/* Dashboard Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-brand-gold/50 transition-colors group flex flex-col items-center justify-center text-center">
                                    <div className="p-3 bg-brand-gold/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                                        <stat.icon className="w-8 h-8 text-brand-gold" />
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}

                            {/* Chart Placeholder */}
                            <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-white/5 rounded-xl p-6 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex items-end gap-2 h-32 w-full px-8 pb-4">
                                    {[40, 70, 45, 90, 65, 85, 50, 75, 60, 95, 80, 55].map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 bg-brand-gold/30 hover:bg-brand-gold transition-colors rounded-t-sm"
                                            style={{ height: `${h}%` }}
                                        />
                                    ))}
                                </div>
                                <div className="absolute top-4 left-6 text-white font-medium flex items-center gap-2">
                                    <BarChart3 className="w-4 h-4 text-brand-gold" />
                                    Monthly Growth
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerScroll>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent" />
        </div>
    );
};

export default HeroSection;
