import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { num: '01', tag: 'Strategy',     title: 'Discovery Call',     desc: 'We map your goals, audience, and competitive landscape. No templates — a proper strategy session before a single pixel is touched.' },
  { num: '02', tag: 'Architecture', title: 'Strategy & Design',  desc: 'Our team architects the full solution: wireframes, design system, copy direction, and technical spec — all reviewed before build.' },
  { num: '03', tag: 'Engineering',  title: 'Build & Launch',     desc: 'Production-grade development with daily stand-ups, QA at every milestone, and a zero-compromise deployment to your live environment.' },
  { num: '04', tag: 'Growth',       title: 'Optimize & Scale',   desc: 'Post-launch iteration driven by real data — A/B tests, performance tuning, and growth amplification until KPIs are exceeded.' },
];

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } });
      tl.fromTo('.proc-eyebrow', { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.55, ease: 'power2.out' })
        .fromTo('.proc-headline', { opacity: 0, y: 48 }, { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }, '-=0.3')
        .fromTo('.proc-sub', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.65')
        .fromTo('.proc-divider', { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: 'power3.inOut', transformOrigin: 'left center' }, '-=0.5')
        .fromTo('.proc-card', { opacity: 0, y: 36 }, { opacity: 1, y: 0, stagger: 0.09, duration: 0.85, ease: 'power3.out' }, '-=0.7')
        .fromTo('.proc-ghost-num', { opacity: 0 }, { opacity: 1, stagger: 0.07, duration: 1.4, ease: 'power2.out' }, '-=1');

      gsap.fromTo('.proc-line-fill', { scaleX: 0 },
        { scaleX: 1, duration: 1.6, ease: 'expo.inOut', transformOrigin: 'left center', scrollTrigger: { trigger: '.proc-cards', start: 'top 78%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-[#060606] overflow-hidden"
      style={{ borderTop: '1px solid rgba(240,237,232,0.06)' }}>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: '160px', opacity: 0.022 }} />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,255,71,0.035) 0%, transparent 70%)' }} />

      <div className="relative max-w-[1360px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-[640px]">
            <div className="proc-eyebrow inline-flex items-center gap-3 mb-7">
              <span className="block w-7 h-px" style={{ backgroundColor: '#E8FF47' }} />
              <span className="text-[#E8FF47] text-[10px] uppercase tracking-[0.28em]" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}>How We Work</span>
            </div>
            <h2 className="proc-headline text-[#F0EDE8] leading-[0.90] tracking-[-0.03em]"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)' }}>
              A Process Built<br />
              <span style={{ color: 'rgba(240,237,232,0.28)' }}>on Accountability</span>
            </h2>
          </div>
          <div className="proc-sub lg:text-right">
            <p className="text-[#F0EDE8]/52 text-sm leading-[2] mb-0" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Four deliberate phases.<br />Zero shortcuts.<br />
              <span style={{ color: 'rgba(240,237,232,0.28)' }}>One standard: excellence.</span>
            </p>
          </div>
        </div>

        {/* Timeline rail */}
        <div className="proc-divider proc-cards hidden lg:block mb-0 relative">
          <div className="w-full h-px" style={{ backgroundColor: 'rgba(240,237,232,0.07)' }} />
          <div className="proc-line-fill absolute top-0 left-0 w-full h-px" style={{ backgroundColor: 'rgba(232,255,71,0.35)', transformOrigin: 'left center' }} />
          {STEPS.map((_, i) => (
            <div key={i} aria-hidden="true" className="absolute top-[-3px]" style={{ left: `${(i / (STEPS.length - 1)) * 100}%` }}>
              <div className="w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#E8FF47', opacity: 0.6, transform: 'translateX(-50%)' }} />
            </div>
          ))}
        </div>

        {/* Step cards */}
        <div className="proc-cards grid md:grid-cols-2 lg:grid-cols-4 lg:divide-x"
          style={{ borderColor: 'rgba(240,237,232,0.07)', borderLeftWidth: 0 }}>
          {STEPS.map((step, i) => (
            <div key={i} className="proc-card group relative flex flex-col pt-8 pb-10 border-b md:last:border-b-0 md:[&:nth-child(2)]:border-b-0 lg:border-b-0 lg:px-9 first:lg:pl-0 last:lg:pr-0"
              style={{ borderColor: 'rgba(240,237,232,0.07)' }}>

              <span aria-hidden="true" className="proc-ghost-num pointer-events-none select-none absolute bottom-4 right-3 lg:right-5 font-bold leading-none"
                style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(5rem, 10vw, 8.5rem)', color: 'rgba(240,237,232,0.03)', letterSpacing: '-0.04em' }}>
                {step.num}
              </span>

              <div className="flex items-center justify-between mb-8 relative z-10">
                <span className="font-mono text-[10px] tracking-[0.2em] transition-opacity duration-500"
                  style={{ color: '#E8FF47', fontFamily: 'DM Sans, sans-serif', opacity: 0.55 }}>{step.num}</span>
                <span className="text-[9px] uppercase tracking-[0.22em] transition-colors duration-500"
                  style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(240,237,232,0.35)' }}>{step.tag}</span>
              </div>

              <h3 className="relative z-10 leading-[1.15] tracking-[-0.015em] mb-4 transition-colors duration-400 group-hover:text-[#F0EDE8]"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.12rem', color: 'rgba(240,237,232,0.78)' }}>
                {step.title}
              </h3>

              <p className="relative z-10 flex-1 leading-[1.85] transition-colors duration-400 group-hover:text-[#F0EDE8]/55"
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: 'rgba(240,237,232,0.45)' }}>
                {step.desc}
              </p>

              <div className="absolute left-0 lg:left-9 first:lg:left-0 bottom-0 lg:bottom-auto lg:top-0 h-px lg:h-[1.5px] w-0 group-hover:w-10 transition-all duration-500"
                style={{ backgroundColor: '#E8FF47', transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }} />
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-7"
          style={{ borderTop: '1px solid rgba(240,237,232,0.06)' }}>
          <div>
            <p className="text-sm mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(240,237,232,0.58)' }}>
              Most projects go from first call to live site in under 4 weeks.
            </p>
            <p className="text-xs" style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(240,237,232,0.30)' }}>
              No retainers. No hidden phases.
            </p>
          </div>
          <a href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Strategy+Call+with+Spark+Agency"
            target="_blank" rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 flex-shrink-0 overflow-hidden"
            style={{ backgroundColor: '#E8FF47', color: '#080808', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '-0.01em', padding: '1rem 2rem', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
            <span aria-hidden="true" className="absolute inset-0 bg-[#d4f030] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative z-10">Start the Process</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
