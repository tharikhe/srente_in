import { useState, useEffect } from 'react'
import { SplineScene } from './components/SplineScene'
import { Preloader } from './components/Preloader'



const ChipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>
  </svg>
);

const CogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="M20 12h2"/><path d="M2 12h2"/>
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

const CircuitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h.01"/><path d="M10 12h.01"/><path d="M14 12h.01"/><path d="M18 12h.01"/><path d="M6 2v4"/><path d="M18 2v4"/><path d="M6 18v4"/><path d="M18 18v4"/>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>
  </svg>
);

const FactoryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>
  </svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>
  </svg>
);

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);

const RecycleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3"/><path d="M8.293 13.596 7.196 9.5 3.1 10.598"/><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"/><path d="m13.378 9.633 4.096 1.098 1.097-4.096"/>
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

/* ─── Data ─── */
const services = [
  {
    icon: <ChipIcon />,
    title: 'Optimize for Manufacturing (DFM)',
    desc: 'Build it right the first time. We review PCB layouts early to eliminate design flaws, reduce copper waste, and prevent assembly line stoppages.',
  },
  {
    icon: <CogIcon />,
    title: 'Hardware Engineering',
    desc: 'From concept validation to high-fidelity prototype, our engineers manage testing, thermal analysis, and compliance checks.',
  },
  {
    icon: <CircuitIcon />,
    title: 'Custom Electronics Design',
    desc: 'Need a specialized board or multi-layered PCB? We design, lay out, and prototype custom circuitry with absolute precision.',
  },
  {
    icon: <CodeIcon />,
    title: 'Embedded Software & Firmware',
    desc: 'We program the brain of your hardware, developing secure, low-latency firmware and drivers for IoT microcontrollers.',
  },
];

const businessSectors = [
  {
    icon: <FactoryIcon />,
    title: 'End-to-End OEM Assembly',
    desc: 'We manage the entire assembly line, handling plastic molding, SMT placement, cable wire harnessing, and testing.',
  },
  {
    icon: <TruckIcon />,
    title: 'Supply Chain Resiliency',
    desc: 'Avoid shortages. We coordinate component sourcing, vet alternative vendors, and lock in raw material pricing.',
  },
  {
    icon: <TargetIcon />,
    title: 'Transparent Bill-of-Materials',
    desc: 'Control costs with absolute transparency. You see every supplier quote, with zero hidden markups.',
  },
  {
    icon: <RecycleIcon />,
    title: 'Product Lifecycle Management',
    desc: 'We support your hardware through its entire lifecycle, managing updates, safety certifications, and compliance audits.',
  },
  {
    icon: <ShieldIcon />,
    title: 'IP Protection Guaranteed',
    desc: 'Your innovations remain secure. We protect your schematics and firmware under strict, enforceable NDA agreements.',
  },
  {
    icon: <LockIcon />,
    title: 'Rigorous Quality Assurance',
    desc: 'Every unit goes through functional testing, AOI (Automated Optical Inspection), and manual inspection before shipping.',
  },
];

const testimonials = [
  {
    name: 'Sandeep Nerli',
    role: 'Electronics Business Owner',
    quote: "Serente is our number one vendor. Happy with every repair, every time.",
  },
  {
    name: 'Sharath Kumar',
    role: 'Product Manager',
    quote: 'I stopped working with four other suppliers. Serente delivers on time and actually communicates. That matters.',
  },
  {
    name: 'Jeetendra K',
    role: 'OEM Partner',
    quote: 'They handle our production professionally. Our end customers are always satisfied — that says everything.',
  },
];

const blogPosts = [
  {
    tag: 'Engineering',
    title: 'Designing for Manufacturability (DFM): 5 PCB Layout Mistakes That Delay Production',
    desc: 'Learn the critical layout flaws that stall automated assembly lines and how to optimize your board designs before sending them to the factory floor.',
    image: '/blog/pcb-dfm.png',
    date: 'July 15, 2026',
    readTime: '6 min read',
    link: '#blog-dfm'
  },
  {
    tag: 'Supply Chain',
    title: 'Securing Component Supply Chains in 2026: A Guide for Hardware OEMs',
    desc: 'Mitigate chip shortage risks and control lead times with strategic multi-source BOM design, local sourcing in India, and transparent vendor audits.',
    image: '/blog/supply-chain.png',
    date: 'June 28, 2026',
    readTime: '8 min read',
    link: '#blog-supply-chain'
  },
  {
    tag: 'Embedded Systems',
    title: 'Firmware Optimization: Minimizing Power Consumption in IoT Edge Devices',
    desc: 'Maximize battery life through smart sleep states, efficient sensor polling routines, and low-level driver optimization in embedded C/C++.',
    image: '/blog/iot-firmware.png',
    date: 'May 12, 2026',
    readTime: '7 min read',
    link: '#blog-firmware'
  }
];

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Business Sectors', href: '#sectors' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
];

/* ─── Section Title Component ─── */
function SectionTitle({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="text-center mb-14 sm:mb-20">
      <p className={`text-[12px] font-semibold uppercase tracking-[0.2em] mb-3 ${light ? 'text-[#FFEA00]' : 'text-[#FFEA00]'}`}>
        {eyebrow}
      </p>
      <h2 className={`text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] font-semibold tracking-tight leading-tight ${light ? 'text-gray-900' : 'text-white'}`}>
        {title}
      </h2>
      <div className="section-divider mx-auto mt-5" />
    </div>
  );
}

/* ─── Main App ─── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowWhatsApp(window.scrollY > window.innerHeight * 0.8);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-black relative">
      <Preloader />
      {/* Full Screen Navigation Menu Overlay */}
      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="menu-overlay-link transition-all duration-300"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          1. HERO SECTION — Spline 3D
         ═══════════════════════════════════════════════════ */}
      <section id="home" className="relative min-h-[100dvh] overflow-hidden bg-black">
        {/* Fixed Navbar with Hamburger */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between pt-4 sm:pt-6 px-4 sm:px-12 md:px-20 lg:px-28 pointer-events-none">
          <div
            className="flex items-center justify-center rounded-full w-10 h-10 sm:w-11 sm:h-11 shrink-0 backdrop-blur-md overflow-hidden bg-white/10 pointer-events-auto"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <img src="/logo.png" alt="Serente Logo" className="w-7 h-7 object-contain" />
          </div>

          <div className="pointer-events-auto">
            <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="icon">
                {menuOpen ? (
                  <svg viewBox="0 0 24 24" width={20} height={20} stroke="#FFEA00" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg viewBox="0 0 175 80" width={32} height={16}>
                    <rect width={120} height={14} fill="#FFEA00" rx={7} />
                    <rect y={32} width={120} height={14} fill="#FFEA00" rx={7} />
                    <rect y={64} width={120} height={14} fill="#FFEA00" rx={7} />
                  </svg>
                )}
              </span>
              <span className="text">{menuOpen ? "CLOSE" : "MENU"}</span>
            </button>
          </div>
        </nav>

        {/* Spline 3D — hidden on mobile, positioned right on desktop */}
        <div className="absolute inset-0 left-0 md:left-[30%] w-full md:w-[70%] h-full">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </div>

        {/* Gradient overlays — stronger on mobile for readability */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-black/70 to-black/30 md:from-black/80 md:via-black/40 md:to-transparent" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/40 md:from-black/60 md:to-black/30" />

        {/* Left content */}
        <div className="relative z-10 flex items-end md:items-center min-h-[100dvh] px-5 sm:px-14 md:px-20 lg:px-28 pb-24 md:pb-0 pointer-events-none">
          <div className="max-w-xl space-y-5 sm:space-y-6 pointer-events-auto">

            <h1 className="text-[1.85rem] sm:text-[3.25rem] lg:text-[3.75rem] leading-[1.1] sm:leading-[1.05] font-semibold text-white tracking-tight">
              From schematic to scale.<br />
              <span className="bg-gradient-to-r from-white via-[#FFEA00] to-white bg-clip-text text-transparent">Engineered to last.</span>
            </h1>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-gray-400 max-w-md">
              Serente is a full-stack electronics manufacturing partner. We simplify your supply chain, optimize designs for manufacturing (DFM), and build with zero-tolerance quality — all from Bengaluru, India's hardware capital.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3">
              <a href="#about" className="inline-flex items-center justify-center gap-2 text-[13px] sm:text-[14px] font-semibold text-black bg-[#FFEA00] rounded-full px-7 py-3 hover:bg-white transition-all duration-200 group shadow-lg shadow-[#FFEA00]/10">
                Explore our process <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 text-[13px] sm:text-[14px] font-medium text-gray-300 border border-gray-800 rounded-full px-7 py-3 hover:border-white hover:text-white transition-all duration-200">
                Get a quote
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-[#FFEA00] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. VIDEO HERO SECTION — Background Video
         ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] sm:min-h-screen overflow-hidden bg-white">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
        />

        <div className="relative z-10 flex flex-col min-h-screen">
          <div className="flex-1 flex items-end pb-8 sm:pb-16 lg:pb-20 px-5 sm:px-12 md:px-20 lg:px-28">
            <div className="max-w-md">
              <div className="mb-3">
                <a href="#about" className="inline-flex items-center gap-1.5 text-[11px] font-semibold bg-black text-[#FFEA00] px-3.5 py-1.5 rounded-full transition-all hover:bg-gray-900 group">
                  Shark Tank India Featured Partner
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </a>
              </div>
              <h2 className="text-[1.35rem] sm:text-[2rem] leading-[1.2] font-semibold text-gray-900 tracking-tight mb-3">
                Built to perform on the national stage.
              </h2>
              <p className="text-[14px] text-gray-600 font-medium mb-4">
                We manufacture the advanced hardware that powers India's fastest-growing startups and Shark Tank innovations. From rapid prototyping to high-yield production, we treat every board like it's presenting to the world.
              </p>
              <div className="mb-3">
                <a href="#contact" className="inline-flex items-center gap-2 text-[13px] font-semibold text-white bg-black rounded-full px-6 py-3 hover:bg-[#FFEA00] hover:text-black border border-transparent hover:border-black transition-all duration-200 group shadow-md">
                  Consult our engineers <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. ABOUT SECTION
         ═══════════════════════════════════════════════════ */}
      <section id="about" className="relative py-16 sm:py-24 md:py-32 bg-black overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFEA00]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/3 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image placeholder with gradient border */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-gray-900">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center relative">
                  {/* Abstract circuit pattern as visual */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-[20%] left-[10%] w-32 h-px bg-[#FFEA00]" />
                    <div className="absolute top-[20%] left-[10%] w-px h-24 bg-[#FFEA00]" />
                    <div className="absolute top-[45%] right-[15%] w-40 h-px bg-white" />
                    <div className="absolute top-[45%] right-[15%] w-px h-32 bg-white" />
                    <div className="absolute bottom-[25%] left-[30%] w-28 h-px bg-[#FFEA00]" />
                    <div className="absolute top-[60%] left-[50%] w-px h-20 bg-white" />
                  </div>
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FFEA00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm font-medium">Electronics & Innovation</p>
                  </div>
                </div>
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 bg-[#FFEA00] rounded-xl px-4 py-3 sm:px-5 sm:py-4 shadow-lg">
                <p className="text-2xl font-extrabold text-black">2017</p>
                <p className="text-[11px] text-black/75 font-semibold uppercase tracking-wider">Founded</p>
              </div>
            </div>

            {/* Right - Text */}
            <div className="space-y-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#FFEA00]">Who We Are</p>
              <h2 className="text-[1.75rem] sm:text-[2.25rem] font-semibold text-white tracking-tight leading-tight">
                Your manufacturing partner,<br /><span className="gradient-text">not just a vendor.</span>
              </h2>
              <div className="section-divider" />
              <p className="text-[15px] leading-relaxed text-gray-400">
                Serente Electronics handles the full production chain — design, sourcing, assembly, and delivery. One partner, zero gaps.
              </p>
              <p className="text-[15px] leading-relaxed text-gray-400">
                Founded in 2017 in Bengaluru, we've built a reputation on one thing: delivering exactly what was promised, when it was promised.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 text-[#FFEA00] flex items-center justify-center border border-white/10">
                    <ShieldIcon />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Quality guaranteed</p>
                    <p className="text-[11px] text-gray-500">Tested at every stage</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 text-[#FFEA00] flex items-center justify-center border border-white/10">
                    <TargetIcon />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Delivered on time</p>
                    <p className="text-[11px] text-gray-500">No excuses, no delays</p>
                  </div>
                </div>
              </div>
              <a href="#services" className="inline-flex items-center gap-2 text-[13px] font-semibold text-black bg-[#FFEA00] rounded-full px-7 py-3 hover:bg-white transition-all duration-200 group mt-2">
                View our services <span className="transition-transform duration-200 group-hover:translate-x-1"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. SERVICES SECTION
         ═══════════════════════════════════════════════════ */}
      <section id="services" className="relative py-16 sm:py-24 md:py-32 bg-black">
        {/* Background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFEA00]/2 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
          <SectionTitle eyebrow="What we do" title="Services built for electronics teams" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {services.map((svc, i) => (
              <div key={i} className="card-glow group rounded-2xl p-7 sm:p-8 border border-gray-900 bg-gradient-to-br from-gray-950 to-gray-900">
                <div className="service-icon w-14 h-14 rounded-xl bg-white/5 border border-white/10 text-[#FFEA00] flex items-center justify-center mb-5">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{svc.title}</h3>
                <p className="text-[14px] leading-relaxed text-gray-400">{svc.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#FFEA00] mt-5 hover:text-white transition-colors group/link">
                  Talk to our team
                  <span className="transition-transform duration-200 group-hover/link:translate-x-0.5"><ArrowRightIcon /></span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. BUSINESS SECTORS SECTION
         ═══════════════════════════════════════════════════ */}
      <section id="sectors" className="relative py-16 sm:py-24 md:py-32 bg-black">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
          <SectionTitle eyebrow="Who we work with" title="We're the partner behind your product" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessSectors.map((item, i) => (
              <div key={i} className="card-glow group rounded-2xl p-7 border border-gray-900 bg-gray-950/40 hover:bg-gray-950/60 transition-all">
                <div className="service-icon w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#FFEA00] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-[13px] leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. STATS / COUNTER SECTION
         ═══════════════════════════════════════════════════ */}
      <section className="relative py-14 sm:py-20 md:py-24 overflow-hidden">
        {/* Bold yellow background */}
        <div className="absolute inset-0 bg-[#FFEA00]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
            {[
              { num: '7+', label: 'Years in business' },
              { num: '200+', label: 'Projects shipped' },
              { num: '50+', label: 'Clients served' },
              { num: '99%', label: 'On-time delivery' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-black">{stat.num}</p>
                <p className="text-[12px] sm:text-[13px] text-black/75 font-semibold uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          7. TESTIMONIALS SECTION
         ═══════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-black">
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
          <SectionTitle eyebrow="Client reviews" title="What partners say about us" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card rounded-2xl p-7 sm:p-8 border border-gray-900 bg-gray-950">
                {/* Quote mark */}
                <svg className="w-8 h-8 text-[#FFEA00]/15 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391C0 7.905 3.748 4.039 9 3l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <p className="text-[14px] leading-relaxed text-gray-400 mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  {/* Avatar circle */}
                  <div className="w-10 h-10 rounded-full bg-[#FFEA00] flex items-center justify-center text-black text-sm font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-[12px] text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8. BLOG / INSIGHTS SECTION
         ═══════════════════════════════════════════════════ */}
      <section id="blog" className="relative py-16 sm:py-24 md:py-32 bg-black">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
          <SectionTitle eyebrow="Insights & Engineering" title="Hardware Knowledge Base" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <article key={i} className="flex flex-col rounded-2xl overflow-hidden border border-gray-900 bg-gray-950/40 hover:bg-gray-950/80 transition-all duration-300 group">
                <div className="aspect-[16/9] w-full overflow-hidden relative bg-gray-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#FFEA00] text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {post.tag}
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-700" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-semibold text-white leading-snug mb-3 group-hover:text-[#FFEA00] transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-gray-400 mb-4">
                      {post.desc}
                    </p>
                  </div>
                  <a
                    href={post.link}
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#FFEA00] hover:text-white transition-colors duration-200 group/link mt-2"
                  >
                    Read Article
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          9. CONTACT SECTION
         ═══════════════════════════════════════════════════ */}
      <section id="contact" className="relative py-16 sm:py-24 md:py-32 bg-black">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FFEA00]/3 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
          <SectionTitle eyebrow="Let's talk" title="Ready to build something?" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="text-[15px] leading-relaxed text-gray-400">
                Tell us about your project. We'll respond within one business day with a clear plan and honest pricing.
              </p>

              <div className="space-y-5">
                <a href="tel:+918660744258" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#FFEA00] flex items-center justify-center group-hover:bg-[#FFEA00] group-hover:text-black transition-colors">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-[12px] text-gray-500 font-medium uppercase tracking-wider">Phone</p>
                    <p className="text-[15px] text-white font-medium">+91 86607 44258</p>
                  </div>
                </a>
                <a href="mailto:hello@serenteelectronics.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#FFEA00] flex items-center justify-center group-hover:bg-[#FFEA00] group-hover:text-black transition-colors">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="text-[12px] text-gray-500 font-medium uppercase tracking-wider">Email</p>
                    <p className="text-[15px] text-white font-medium">hello@serenteelectronics.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#FFEA00] flex items-center justify-center shrink-0">
                    <MapPinIcon />
                  </div>
                  <div>
                    <p className="text-[12px] text-gray-500 font-medium uppercase tracking-wider">Head Office</p>
                    <p className="text-[15px] text-white font-medium leading-relaxed">
                      #1865, 3rd Floor, 1st Stage, 5th Block Extension,<br />
                      HBR Layout, Bengaluru - 560043<br />
                      Karnataka, INDIA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl p-7 sm:p-8 border border-gray-900 bg-gray-950">
              <h3 className="text-lg font-semibold text-white mb-6">Tell us about your project</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your name" className="form-input" />
                  <input type="tel" placeholder="Phone number" className="form-input" />
                </div>
                <input type="email" placeholder="Work email" className="form-input" />
                <textarea placeholder="Describe your project or requirement" rows={5} className="form-input resize-none" />
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 text-[14px] font-semibold text-black bg-[#FFEA00] rounded-xl px-7 py-3.5 hover:bg-white hover:text-black transition-all duration-200 group cursor-pointer">
                  Send enquiry
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5"><ArrowRightIcon /></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          10. FOOTER
         ═══════════════════════════════════════════════════ */}
      <footer className="relative pt-16 pb-8 bg-black">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden border border-white/10">
                  <img src="/logo.png" alt="Serente Logo" className="w-7 h-7 object-contain" />
                </div>
                <span className="text-[15px] font-semibold text-white">Serente Electronics</span>
              </div>
              <p className="text-[13px] leading-relaxed text-gray-500">
                End-to-end electronics manufacturing — design, sourcing, production, and delivery. Based in Bengaluru since 2017.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link text-[13px] text-gray-500 hover:text-[#FFEA00] flex items-center gap-1.5">
                      <span className="text-gray-700">›</span> {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Address</h4>
              <p className="text-[13px] leading-relaxed text-gray-500">
                #1865, 3rd Floor, 1st Stage,<br />
                5th Block Extension,<br />
                HBR Layout, Bengaluru - 560043<br />
                Karnataka, INDIA
              </p>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Contact Us</h4>
              <div className="space-y-3 mb-6">
                <a href="tel:+918660744258" className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-[#FFEA00] transition-colors">
                  <PhoneIcon /> +91 86607 44258
                </a>
                <a href="mailto:hello@serenteelectronics.com" className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-[#FFEA00] transition-colors">
                  <MailIcon /> hello@serenteelectronics.com
                </a>
              </div>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {['Facebook', 'Twitter', 'LinkedIn', 'YouTube'].map((name) => (
                  <a key={name} href="#" className="social-icon w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 hover:text-black border border-gray-800">
                    <span className="text-[11px] font-bold">{name.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[12px] text-gray-600">© 2024 Serente Electronics Pvt Ltd. All rights reserved.</p>
            <p className="text-[12px] text-gray-600">Bengaluru, India 🇮🇳</p>
          </div>
        </div>
      </footer>

      {/* Brutalist WhatsApp Floating Button — smaller on mobile */}
      {showWhatsApp && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 animate-fade-in-up">
          <a
            href="https://wa.me/918660744258?text=Hello!%20I%20visited%20your%20website%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float-btn"
          >
            <div className="whatsapp-logo-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="whatsapp-logo-icon">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.905-6.99C16.257 1.875 13.784.843 11.15.84 5.71.84 1.285 5.261 1.28 10.7c-.001 1.64.427 3.242 1.241 4.675l-.999 3.652 3.733-.979zm10.742-7.069c-.276-.139-1.637-.808-1.89-.9-.253-.093-.437-.139-.621.139-.184.277-.713.9-.874 1.085-.161.185-.322.208-.598.069-.276-.139-1.168-.43-2.223-1.372-.821-.733-1.376-1.639-1.537-1.916-.161-.277-.017-.427.121-.565.125-.124.276-.322.414-.484.14-.161.185-.277.276-.462.093-.185.047-.347-.024-.487-.07-.139-.621-1.499-.85-2.053-.224-.538-.47-.464-.645-.472-.167-.008-.358-.01-.55-.01s-.504.072-.768.358c-.264.286-1.009.986-1.009 2.404s1.032 2.788 1.17 2.973c.138.185 2.03 3.1 4.917 4.35.687.297 1.224.474 1.643.607.69.219 1.319.188 1.815.114.553-.083 1.637-.669 1.867-1.314.23-.645.23-1.198.161-1.314-.069-.115-.253-.184-.53-.322z"/>
              </svg>
            </div>
            <div className="whatsapp-button-text">
              <span>Chat on</span>
              <span>WhatsApp</span>
            </div>
          </a>
        </div>
      )}

    </div>
  );
}
