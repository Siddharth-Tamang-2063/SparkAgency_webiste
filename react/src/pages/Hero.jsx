import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: '50+',  label: 'Projects Delivered' },
  { value: '100%', label: 'Client Retention'   },
  { value: '3×',   label: 'Avg. ROI Lift'      },
];

const MARQUEE_ITEMS = [
  'Web Design', 'Brand Strategy', 'Conversion Optimisation',
  'AI-Powered Systems', 'Paid Growth', 'Full-Stack Development',
  'UI / UX', 'Copywriting', 'SEO', 'Automation',
];

const FONT_SYNE = { fontFamily: 'Syne, sans-serif' };
const FONT_DM   = { fontFamily: 'DM Sans, sans-serif' };

export default function Hero() {
  const sectionRef  = useRef(null);
  const gridRef     = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(gridRef.current, {
        y: '26%', ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1.4 },
      });
      gsap.to('.hero-glow', { scale: 1.22, opacity: 0.09, duration: 5, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      gsap.to('.hero-scroll-dot', { y: 22, duration: 1.5, yoyo: true, repeat: -1, ease: 'sine.inOut' });

      const tl = gsap.timeline({ delay: 0.15 });
      const headline = headlineRef.current;
      if (headline) {
        headline.querySelectorAll('.hero-line').forEach(line => {
          const words = line.innerText.trim().split(/\s+/);
          line.innerHTML = words.map(w =>
            `<span class="sw" style="display:inline-block;overflow:hidden;vertical-align:bottom"><span class="si" style="display:inline-block">${w}</span></span>`
          ).join(' ');
        });
        gsap.set('.si', { y: '112%', rotate: 2.5, transformOrigin: 'left bottom' });
        tl
          .fromTo('.hero-corner',       { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, 0)
          .fromTo('.hero-eyebrow-line', { scaleX: 0 }, { scaleX: 1, duration: 0.55, ease: 'power3.inOut', transformOrigin: 'left center' }, 0.05)
          .fromTo('.hero-eyebrow-text', { opacity: 0, x: -12 }, { opacity: 1, x: 0, duration: 0.55, ease: 'power2.out' }, 0.25)
          .fromTo('.hero-rule',         { scaleX: 0 }, { scaleX: 1, duration: 0.95, ease: 'expo.inOut', transformOrigin: 'left center' }, 0.3)
          .to('.si', { y: '0%', rotate: 0, duration: 1.1, stagger: 0.038, ease: 'power4.out' }, 0.4)
          .fromTo('.hero-sub',          { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.95)
          .fromTo('.hero-stat',         { opacity: 0, y: 18 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.65, ease: 'power3.out' }, 1.0)
          .fromTo('.hero-cta-wrap',     { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 1.15)
          .fromTo('.hero-edge-label',   { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' }, 1.4);
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen flex flex-col overflow-hidden bg-[#080808]"
    >

      {/* Grain */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: '160px', opacity: 0.028 }} />

      {/* Parallax grid */}
      <div ref={gridRef} aria-hidden="true" className="absolute pointer-events-none"
        style={{ inset: '-30%', backgroundImage: 'linear-gradient(rgba(240,237,232,0.032) 1px, transparent 1px),linear-gradient(90deg, rgba(240,237,232,0.032) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* Radial glow */}
      <div aria-hidden="true" className="hero-glow absolute pointer-events-none"
        style={{ top: '-5%', left: '-15%', width: '70vw', height: '70vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,255,71,0.9) 0%, transparent 65%)', opacity: 0.055 }} />

      {/* Corner marks */}
      <svg aria-hidden="true" className="hero-corner absolute z-10 pointer-events-none" style={{ top: 24, left: 24, opacity: 0 }} width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2V0M2 10H0M2 2L0 0" stroke="rgba(240,237,232,0.25)" strokeWidth="1"/>
      </svg>
      <svg aria-hidden="true" className="hero-corner absolute z-10 pointer-events-none" style={{ top: 24, right: 24, opacity: 0, transform: 'scaleX(-1)' }} width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2V0M2 10H0M2 2L0 0" stroke="rgba(240,237,232,0.25)" strokeWidth="1"/>
      </svg>

      {/* Left edge label — desktop only */}
      <div aria-hidden="true" className="hero-edge-label hidden lg:flex items-center gap-3 absolute z-20 pointer-events-none"
        style={{ left: '1.4rem', top: '50%', transform: 'rotate(-90deg) translateX(50%)', transformOrigin: 'left center', opacity: 0 }}>
        <span className="block w-5 h-px" style={{ backgroundColor: 'rgba(240,237,232,0.2)' }} />
        <span className="text-[8px] uppercase tracking-[0.32em] whitespace-nowrap" style={{ ...FONT_DM, color: 'rgba(240,237,232,0.2)' }}>01 — Hero</span>
      </div>

      {/* Scroll indicator — desktop only */}
      <div className="hero-edge-label hidden lg:flex flex-col items-center gap-2 absolute z-20 pointer-events-none" style={{ right: '1.6rem', bottom: '3rem', opacity: 0 }}>
        <span className="text-[8px] uppercase tracking-[0.3em]" style={{ ...FONT_DM, color: 'rgba(240,237,232,0.25)', writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="relative overflow-hidden" style={{ width: '1px', height: '40px', backgroundColor: 'rgba(240,237,232,0.1)' }}>
          <div className="hero-scroll-dot absolute left-0 right-0" style={{ top: 0, height: '16px', background: 'linear-gradient(to bottom, transparent, rgba(232,255,71,0.8), transparent)' }} />
        </div>
      </div>

      {/* =====================================================
          DESKTOP LAYOUT — unchanged from original
      ===================================================== */}
      <div
        className="hidden lg:flex relative z-10 flex-1 flex-col justify-center w-full mx-auto"
        style={{
          maxWidth: '1380px',
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 5rem) 1.5rem',
        }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4 self-start">
          <span className="hero-eyebrow-line block h-px" style={{ width: 28, backgroundColor: '#E8FF47' }} />
          <span className="hero-eyebrow-text w-[5px] h-[5px] rounded-full animate-pulse flex-shrink-0" style={{ backgroundColor: '#E8FF47', opacity: 0 }} />
        </div>

        {/* Rule */}
        <div className="hero-rule w-full h-px mb-5" style={{ backgroundColor: 'rgba(240,237,232,0.08)' }} />

        {/* Headline + right column */}
        <div className="flex flex-row items-end gap-0">
          <div ref={headlineRef} className="flex-1 pr-12" style={{ minWidth: 0 }}>
            <div className="leading-[0.88] tracking-[-0.035em]"
              style={{ ...FONT_SYNE, fontWeight: 700, fontSize: 'clamp(3rem, 8.5vw, 8rem)' }}>
              <div className="hero-line" style={{ color: '#F0EDE8' }}>We Build Digital</div>
              <div className="hero-line" style={{ color: 'rgba(240,237,232,0.30)' }}>Experiences That</div>
              <div className="hero-line" style={{ color: '#E8FF47' }}>Convert.</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 pb-1" style={{ width: '100%', maxWidth: 300 }}>
            <p className="hero-sub text-sm leading-[1.8]" style={{ ...FONT_DM, color: 'rgba(240,237,232,0.60)', opacity: 0 }}>
              Premium websites, AI-powered systems, and growth strategies — for brands that refuse to be average.
            </p>
            <div className="flex flex-col">
              {STATS.map((s, i) => (
                <div key={i} className="hero-stat flex items-baseline gap-4 py-2.5" style={{ borderTop: '1px solid rgba(240,237,232,0.08)', opacity: 0 }}>
                  <span className="font-bold leading-none" style={{ ...FONT_SYNE, fontSize: '1.75rem', color: '#F0EDE8', letterSpacing: '-0.025em' }}>{s.value}</span>
                  <span className="text-[9px] uppercase tracking-[0.22em]" style={{ ...FONT_DM, color: 'rgba(240,237,232,0.48)' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="hero-cta-wrap flex flex-row items-start gap-4 mt-7" style={{ opacity: 0 }}>
          <a
            href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Strategy+Call+with+Spark+Agency&details=Let%27s+discuss+your+project"
            target="_blank" rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 flex-shrink-0 overflow-hidden"
            style={{ backgroundColor: '#E8FF47', color: '#080808', ...FONT_SYNE, fontWeight: 700, fontSize: '0.82rem', letterSpacing: '-0.01em', padding: '0.875rem 1.75rem', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
          >
            <span aria-hidden="true" className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" style={{ backgroundColor: '#d4f030', transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }} />
            <span className="relative z-10">Book a Free Strategy Call</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
          <a href="#services" className="group inline-flex items-center gap-2 py-3.5 transition-colors duration-300"
            style={{ ...FONT_DM, fontSize: '0.82rem', fontWeight: 500, color: 'rgba(240,237,232,0.50)', letterSpacing: '0.01em' }}>
            <span className="group-hover:text-[#F0EDE8]/70 transition-colors duration-300" style={{ color: 'inherit' }}>See Our Services</span>
            <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
          </a>
        </div>
      </div>

      {/* =====================================================
          MOBILE LAYOUT — purpose-built, editorial poster style
          Top: eyebrow + rule + giant headline
          Bottom: tagline + CTA pinned above marquee
      ===================================================== */}
      <div className="lg:hidden relative z-10 flex-1 flex flex-col" style={{ padding: '0 1.5rem' }}>

        {/* ── TOP BLOCK ── */}
        <div style={{ paddingTop: '3.5rem' }}>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="hero-eyebrow-line block h-px" style={{ width: 28, backgroundColor: '#E8FF47' }} />
            <span className="hero-eyebrow-text w-[5px] h-[5px] rounded-full animate-pulse" style={{ backgroundColor: '#E8FF47', opacity: 0 }} />
          </div>

          {/* Rule */}
          <div className="hero-rule w-full h-px mb-6" style={{ backgroundColor: 'rgba(240,237,232,0.08)' }} />

          {/* Headline — big and editorial */}
          <div ref={headlineRef}>
            <div
              className="leading-[0.88] tracking-[-0.04em]"
              style={{ ...FONT_SYNE, fontWeight: 700, fontSize: 'clamp(3rem, 13.5vw, 4.5rem)' }}
            >
              <div className="hero-line" style={{ color: '#F0EDE8' }}>We Build</div>
              <div className="hero-line" style={{ color: '#F0EDE8' }}>Digital</div>
              <div className="hero-line" style={{ color: 'rgba(240,237,232,0.25)' }}>Experiences</div>
              <div className="hero-line" style={{ color: 'rgba(240,237,232,0.25)' }}>That</div>
              <div className="hero-line" style={{ color: '#E8FF47' }}>Convert.</div>
            </div>
          </div>
        </div>

        {/* Spacer — pushes bottom block down */}
        <div className="flex-1" />

        {/* ── BOTTOM BLOCK — pinned above marquee ── */}
        <div style={{ paddingBottom: '1.75rem' }}>
          {/* Thin divider */}
          <div style={{ height: '1px', backgroundColor: 'rgba(240,237,232,0.08)', marginBottom: '1.25rem' }} />

          {/* Tagline */}
          <p
            className="hero-sub mb-5"
            style={{ ...FONT_DM, fontSize: '0.78rem', lineHeight: 1.75, color: 'rgba(240,237,232,0.50)', opacity: 0, maxWidth: '28ch' }}
          >
            Premium websites &amp; growth strategies for brands that refuse to be average.
          </p>

          {/* CTA row */}
          <div className="hero-cta-wrap flex items-center gap-5" style={{ opacity: 0 }}>
            <a
              href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Strategy+Call+with+Spark+Agency&details=Let%27s+discuss+your+project"
              target="_blank" rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden flex-shrink-0"
              style={{ backgroundColor: '#E8FF47', color: '#080808', ...FONT_SYNE, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '-0.01em', padding: '0.75rem 1.4rem', clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
            >
              <span aria-hidden="true" className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" style={{ backgroundColor: '#d4f030', transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }} />
              <span className="relative z-10">Book a Call</span>
              <span className="relative z-10">↗</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-1.5"
              style={{ ...FONT_DM, fontSize: '0.75rem', fontWeight: 500, color: 'rgba(240,237,232,0.40)', letterSpacing: '0.01em' }}
            >
              Our Services
              <span style={{ color: 'rgba(232,255,71,0.5)' }}>↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom marquee — unchanged */}
      <div className="relative z-10 flex-shrink-0 overflow-hidden" style={{ borderTop: '1px solid rgba(240,237,232,0.06)' }}>
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-16 pointer-events-none z-10" style={{ background: 'linear-gradient(to right, #080808, transparent)' }} />
        <div aria-hidden="true" className="absolute inset-y-0 right-0 w-16 pointer-events-none z-10" style={{ background: 'linear-gradient(to left, #080808, transparent)' }} />
        <div className="flex whitespace-nowrap" style={{ width: 'max-content', animation: 'marquee-scroll 32s linear infinite' }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 py-3 px-5">
              <span className="text-[9.5px] uppercase tracking-[0.26em]" style={{ ...FONT_DM, color: 'rgba(240,237,232,0.35)' }}>{item}</span>
              <span style={{ color: 'rgba(232,255,71,0.4)', fontSize: '0.35rem' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}