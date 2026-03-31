import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { num: '01', icon: '◈', title: 'Web Design & Development', desc: 'Pixel-perfect, performance-first websites built in React with GSAP motion. Sub-2s load times, flawless mobile, and conversion-optimized architecture.', tags: ['React', 'Tailwind', 'GSAP'] },
  { num: '02', icon: '⬡', title: 'SaaS Product Development', desc: 'End-to-end product engineering — from validated MVP to scalable multi-tenant SaaS — designed to handle real traffic and real revenue from day one.', tags: ['Full-Stack', 'Auth', 'APIs'] },
  { num: '03', icon: '◉', title: 'AI Agents & Automation', desc: 'Custom LLM workflows and n8n pipelines that eliminate manual work, qualify leads overnight, and run your entire back-office on autopilot 24/7.', tags: ['LLMs', 'n8n', 'Zapier'] },
  { num: '04', icon: '◐', title: 'Brand Identity & Design', desc: 'Strategic visual identities that position your brand as the undisputed premium option — logo systems, typography, motion guidelines, and full style docs.', tags: ['Logo', 'Motion', 'Systems'] },
  { num: '05', icon: '◑', title: 'Performance Marketing', desc: 'Data-driven ad campaigns across Meta, Google, and TikTok with rigorous creative testing, audience segmentation, and ROAS-focused budget allocation.', tags: ['Meta Ads', 'Google', 'TikTok'] },
  { num: '06', icon: '◇', title: 'Growth Strategy & SEO', desc: 'Full-funnel growth systems that compound over time — technical SEO, high-intent content, CRO sprints, and funnel analytics turning traffic into revenue.', tags: ['SEO', 'CRO', 'Funnels'] },
];

export default function Services() {
  const sectionRef = useRef(null);
  const headerRef  = useRef(null);
  const cardsRef   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: headerRef.current, start: 'top 82%' } });
      gsap.fromTo(cardsRef.current, { opacity: 0, y: 55 },
        { opacity: 1, y: 0, duration: 0.75, stagger: 0.09, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 62%' } });
    }, sectionRef);

    cardsRef.current.forEach(card => {
      if (!card) return;
      card.addEventListener('mouseenter', () => gsap.to(card, { backgroundColor: '#0E0E0E', duration: 0.35, ease: 'power2.out' }));
      card.addEventListener('mouseleave', () => gsap.to(card, { backgroundColor: '#080808', duration: 0.35, ease: 'power2.out' }));
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-28 bg-[#080808] relative">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#E8FF47]/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <div>
            <span className="text-[#E8FF47] text-[11px] uppercase tracking-[0.2em] font-medium block mb-3">What We Do</span>
            <h2 className="text-[2.8rem] md:text-[3.8rem] font-bold text-[#F0EDE8] leading-[0.96] tracking-[-0.02em]" style={{ fontFamily: 'Syne, sans-serif' }}>
              Services Built<br />
              <span style={{ color: 'rgba(240,237,232,0.30)' }}>for Results</span>
            </h2>
          </div>
          <p className="text-[#F0EDE8]/55 text-sm md:text-base max-w-xs leading-relaxed">
            Every engagement is scoped for measurable outcomes — not deliverables for their own sake.
          </p>
        </div>

        {/* Card grid — 2 cols mobile, 2 cols md, 3 cols lg */}
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-[#F0EDE8]/[0.08] rounded-2xl overflow-hidden">
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className={[
                'group relative bg-[#080808] p-4 sm:p-6 md:p-7 lg:p-9',
                'border-[#F0EDE8]/[0.08]',
                // Mobile / md (2-col): right border on even indices
                i % 2 === 0 ? 'border-r' : '',
                // Mobile / md (2-col): bottom border on first 4 items (rows 0 & 1)
                i < 4 ? 'border-b' : '',
                // lg (3-col): right border override
                i % 3 !== 2 ? 'lg:border-r' : 'lg:border-r-0',
                // lg (3-col): bottom border only on first row (i < 3)
                i >= 3 ? 'lg:border-b-0' : '',
                'transition-colors duration-400',
              ].filter(Boolean).join(' ')}
            >
              <span className="absolute top-0 left-0 w-[1px] h-0 bg-[#E8FF47] group-hover:h-10 transition-all duration-500 ease-out" />

              <div className="flex items-center justify-between mb-4 md:mb-6">
                <span className="text-[#E8FF47]/40 text-[10px] md:text-[11px] font-mono tracking-widest group-hover:text-[#E8FF47]/70 transition-colors duration-400">{svc.num}</span>
                <span className="text-[#F0EDE8]/25 text-base md:text-lg group-hover:text-[#E8FF47]/40 transition-colors duration-400">{svc.icon}</span>
              </div>

              <h3 className="text-[0.85rem] sm:text-[0.95rem] md:text-[1.12rem] font-bold text-[#F0EDE8]/90 mb-2 md:mb-3 group-hover:text-[#F0EDE8] transition-colors duration-300 leading-snug" style={{ fontFamily: 'Syne, sans-serif' }}>
                {svc.title}
              </h3>

              <p className="text-[#F0EDE8]/52 text-[0.72rem] sm:text-[0.78rem] md:text-[0.82rem] leading-[1.75] mb-4 md:mb-6">{svc.desc}</p>

              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {svc.tags.map((tag, j) => (
                  <span key={j} className="text-[9px] md:text-[10px] px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-[#F0EDE8]/[0.10] text-[#F0EDE8]/42 group-hover:border-[#E8FF47]/25 group-hover:text-[#E8FF47]/70 transition-all duration-400">
                    {tag}
                  </span>
                ))}
              </div>

              <span className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-[#E8FF47] text-sm md:text-base opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}