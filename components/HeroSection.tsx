'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Star, Shield, Truck, Award, ChevronRight, Zap, Globe, CheckCircle2, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

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
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(-5deg); }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes pulse-ring {
                    0% { transform: scale(0.8); opacity: 1; }
                    100% { transform: scale(2); opacity: 0; }
                }
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slide-down {
                    from { opacity: 0; transform: translateY(-30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes scale-in {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes glow-pulse {
                    0%, 100% { box-shadow: 0 0 30px rgba(196, 150, 12, 0.3), 0 0 60px rgba(196, 150, 12, 0.1); }
                    50% { box-shadow: 0 0 50px rgba(196, 150, 12, 0.5), 0 0 100px rgba(196, 150, 12, 0.2); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; animation-delay: 1s; }
                .animate-shimmer { animation: shimmer 3s infinite; }
                .animate-pulse-ring { animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite; }
                .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
                .animate-slide-down { animation: slide-down 0.8s ease-out forwards; }
                .animate-scale-in { animation: scale-in 0.6s ease-out forwards; }
                .animate-glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
                .delay-100 { animation-delay: 100ms; }
                .delay-200 { animation-delay: 200ms; }
                .delay-300 { animation-delay: 300ms; }
                .delay-400 { animation-delay: 400ms; }
                .delay-500 { animation-delay: 500ms; }
                .delay-600 { animation-delay: 600ms; }
                .delay-700 { animation-delay: 700ms; }

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

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating Orbs */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl animate-float" />
                <div className="absolute top-40 right-20 w-40 h-40 bg-brand-teal/10 rounded-full blur-3xl animate-float-delayed" />
                <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-float" />

                {/* Corner Decorations */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-gold/5 to-transparent" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-brand-teal/5 to-transparent" />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

            {/* Main Content */}
            <div className="relative z-10 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex flex-col">

                {/* Hero Content */}
                <div className="flex-grow flex items-center justify-center px-4 sm:px-8 py-12 sm:py-16">
                    <div className="max-w-6xl mx-auto w-full">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                            {/* Left Content */}
                            <div className="text-center lg:text-left">
                                {/* Trust Badge */}
                                {trustBadge && (
                                    <div className={`inline-flex mb-6 sm:mb-8 ${isLoaded ? 'animate-slide-down' : 'opacity-0'}`}>
                                        <div className="relative group cursor-pointer">
                                            {/* Glow Effect */}
                                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-amber-400 to-brand-gold rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity animate-glow-pulse" />

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

                                {/* Headlines */}
                                <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
                                    <h1 className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ${isLoaded ? 'animate-slide-up delay-100' : 'opacity-0'}`}>
                                        <span className="bg-gradient-to-r from-brand-gold via-amber-300 to-brand-gold bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                                            {headline.line1}
                                        </span>
                                    </h1>
                                    <h2 className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ${isLoaded ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
                                        <span className="bg-gradient-to-r from-brand-teal-light via-teal-300 to-brand-teal-light bg-clip-text text-transparent">
                                            {headline.line2}
                                        </span>
                                    </h2>
                                </div>

                                {/* Subtitle */}
                                <p className={`text-sm sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 ${isLoaded ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
                                    {subtitle}
                                </p>

                                {/* CTA Buttons */}
                                {buttons && (
                                    <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start ${isLoaded ? 'animate-slide-up delay-400' : 'opacity-0'}`}>
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

                            {/* Right Content - Stats Card */}
                            <div className={`hidden lg:block ${isLoaded ? 'animate-scale-in delay-400' : 'opacity-0'}`}>
                                <div className="relative">
                                    {/* Card Glow */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold/20 via-brand-teal/20 to-brand-gold/20 rounded-3xl blur-2xl" />

                                    {/* Stats Card */}
                                    <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                                        <div className="grid grid-cols-2 gap-6">
                                            {stats.map((stat, index) => (
                                                <div
                                                    key={index}
                                                    className="group text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-gold/30 transition-all duration-300 cursor-pointer"
                                                >
                                                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 mb-4 group-hover:scale-110 transition-transform">
                                                        <stat.icon className="w-6 h-6 text-brand-gold" />
                                                    </div>
                                                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1">
                                                        {stat.value}
                                                    </div>
                                                    <div className="text-sm text-gray-400 font-medium">
                                                        {stat.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA in Card */}
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                            <Link
                                                href="/about"
                                                className="flex items-center justify-center gap-2 text-brand-gold hover:text-white font-semibold transition-colors group"
                                            >
                                                <Play className="w-5 h-5 p-0.5 bg-brand-gold/20 rounded-full group-hover:bg-brand-gold group-hover:text-black transition-all" />
                                                <span>Learn More About Us</span>
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Bar - Mobile */}
                <div className={`lg:hidden px-4 pb-6 ${isLoaded ? 'animate-slide-up delay-600' : 'opacity-0'}`}>
                    <div className="grid grid-cols-4 gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-lg sm:text-xl font-bold text-brand-gold">{stat.value}</div>
                                <div className="text-[10px] sm:text-xs text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent" />
        </div>
    );
};

export default HeroSection;
