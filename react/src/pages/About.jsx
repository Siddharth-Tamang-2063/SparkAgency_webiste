import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sidImg   from '/src/assets/siddharth.jpg';
import karanImg from '/src/assets/karan.png';

gsap.registerPlugin(ScrollTrigger);

const WHY_ITEMS = [
  { num: '01', text: 'We think in systems, not pages' },
  { num: '02', text: 'Design + marketing + execution under one roof' },
  { num: '03', text: 'Built by founders, not account managers' },
  { num: '04', text: 'Speed, precision, and measurable outcomes only' },
];

const FOUNDERS = [
  {
    name: 'Siddharth Tamang', role: 'Co-Founder', title: 'Developer · Copywriter', img: sidImg,
    bio: 'Architect of performance systems and high-converting messaging. Siddharth engineers scalable products, writes copy that sells, and ensures every line shipped is fast, precise, and battle-tested.',
    focus: ['Full-stack dev', 'Automation', 'Conversion logic'],
  },
  {
    name: 'Karan Kumar Kamat', role: 'Co-Founder', title: 'Designer · Growth Strategist', img: karanImg,
    bio: 'Designs brands that people remember and campaigns that people click. Karan blends premium visual strategy with data-driven paid performance to convert attention into measurable revenue.',
    focus: ['UI/UX', 'Branding', 'Paid Ads', 'Growth strategy'],
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: '.about-intro', start: 'top 76%' } });
      tl.fromTo('.about-eyebrow', { opacity: 0, x: -14 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' })
        .fromTo('.about-headline', { opacity: 0, y: 52 }, { opacity: 1, y: 0, duration: 1.05, ease: 'power4.out' }, '-=0.25')
        .fromTo('.about-body', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, '-=0.65')
        .fromTo('.why-item', { opacity: 0, x: -20 }, { opacity: 1, x: 0, stagger: 0.08, duration: 0.6, ease: 'power2.out' }, '-=0.45');

      gsap.fromTo('.founders-label', { opacity: 0 },
        { opacity: 1, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: '.founders-grid', start: 'top 80%' } });
      gsap.fromTo('.founder-card', { opacity: 0, y: 56 },
        { opacity: 1, y: 0, stagger: 0.13, duration: 0.95, ease: 'power3.out', scrollTrigger: { trigger: '.founders-grid', start: 'top 80%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 md:py-28 bg-[#080808] overflow-hidden"
      style={{ borderTop: '1px solid rgba(240,237,232,0.06)' }}>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: '160px', opacity: 0.022 }} />

      <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="font-bold whitespace-nowrap" style={{ fontFamily: 'Syne, sans-serif', fontSize: '28vw', color: 'rgba(240,237,232,0.014)', letterSpacing: '-0.04em', lineHeight: 1 }}>SPARK</span>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-12">

        {/* Intro — two-column */}
        <div className="about-intro grid lg:grid-cols-[1fr_1.1fr] gap-12 md:gap-18 items-start mb-18 md:mb-24">

          <div>
            <div className="about-eyebrow inline-flex items-center gap-3 mb-7">
              <span className="block w-7 h-px" style={{ backgroundColor: '#E8FF47' }} />
              <span className="text-[10px] uppercase tracking-[0.28em]" style={{ fontFamily: 'DM Sans, sans-serif', color: '#E8FF47', fontWeight: 500 }}>About Us</span>
            </div>
            <h2 className="about-headline text-[#F0EDE8] leading-[0.90] tracking-[-0.03em]"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              Founder-Led.<br />
              <span style={{ color: 'rgba(240,237,232,0.28)' }}>Execution-Obsessed.</span>
            </h2>
          </div>

          <div className="pt-1">
            <p className="about-body leading-[1.85] mb-9"
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(0.92rem, 1.4vw, 1.05rem)', color: 'rgba(240,237,232,0.60)' }}>
              We don't operate like agencies — we operate like owners. Every product, funnel, and system we build is designed to generate leverage, scale fast, and dominate attention.
            </p>
            <ul className="flex flex-col">
              {WHY_ITEMS.map((item) => (
                <li key={item.num} className="why-item group flex items-baseline gap-5 py-3.5"
                  style={{ borderBottom: '1px solid rgba(240,237,232,0.07)' }}>
                  <span className="font-mono text-[9px] tracking-[0.15em] flex-shrink-0 transition-opacity duration-400"
                    style={{ color: '#E8FF47', opacity: 0.5, fontFamily: 'DM Sans, sans-serif' }}>{item.num}</span>
                  <span className="text-sm leading-[1.7] transition-colors duration-400 group-hover:text-[#F0EDE8]/75"
                    style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(240,237,232,0.55)' }}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Founders */}
        <div>
          <div className="founders-label flex items-center gap-4 mb-10">
            <span className="text-[10px] uppercase tracking-[0.28em]" style={{ fontFamily: 'DM Sans, sans-serif', color: '#E8FF47', fontWeight: 500 }}>Meet the Founders</span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(240,237,232,0.07)' }} />
          </div>

          <div className="founders-grid grid md:grid-cols-2 gap-4 md:gap-5">
            {FOUNDERS.map((f, i) => (
              <div key={i} className="founder-card group relative overflow-hidden"
                style={{ border: '1px solid rgba(240,237,232,0.09)', backgroundColor: 'rgba(240,237,232,0.018)' }}>

                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(232,255,71,0.05) 0%, transparent 70%)' }} />
                <div className="absolute left-0 top-0 bottom-0 w-px bg-[#E8FF47] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }} />

                <div className="relative z-10 p-7 md:p-9">
                  <div className="flex items-start gap-6 mb-7">
                    <div className="relative flex-shrink-0 overflow-hidden"
                      style={{ width: 80, height: 80, border: '1px solid rgba(240,237,232,0.12)', clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
                      <img src={f.img} alt={f.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'rgba(232,255,71,0.06)' }} />
                    </div>
                    <div className="pt-0.5">
                      <div className="text-[9px] uppercase tracking-[0.24em] mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(232,255,71,0.7)' }}>{f.role}</div>
                      <h4 className="leading-[1.12] tracking-[-0.02em] mb-1"
                        style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: '#F0EDE8' }}>{f.name}</h4>
                      <p className="text-[10px] uppercase tracking-[0.18em]" style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(240,237,232,0.40)' }}>{f.title}</p>
                    </div>
                  </div>

                  <div className="w-full h-px mb-6" style={{ backgroundColor: 'rgba(240,237,232,0.07)' }} />

                  <p className="leading-[1.85] mb-6" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: 'rgba(240,237,232,0.55)' }}>{f.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    {f.focus.map((tag) => (
                      <span key={tag} className="inline-block text-[9px] uppercase tracking-[0.18em] px-3 py-1.5"
                        style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(240,237,232,0.42)', border: '1px solid rgba(240,237,232,0.09)', backgroundColor: 'rgba(240,237,232,0.025)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
