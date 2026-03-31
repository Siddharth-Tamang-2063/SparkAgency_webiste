import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = ['home', 'services', 'about', 'contact'];

export default function Navbar() {
  const headerRef = useRef(null);
  const menuRef   = useRef(null);
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ── Scroll shrink ── */
  useEffect(() => {
    const header = headerRef.current;

    const onScroll = () => {
      const past = window.scrollY > 72;
      setScrolled(past);
      gsap.to(header, {
        paddingTop:    past ? '12px' : '24px',
        paddingBottom: past ? '12px' : '24px',
        duration: 0.45,
        ease: 'power2.out',
        overwrite: true,
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    /* ── Entrance ── */
    gsap.fromTo(header,
      { y: -80, opacity: 0 },
      { y: 0,   opacity: 1, duration: 1.1, ease: 'power4.out', delay: 0.15 }
    );

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  /* ── Outside click to close ── */
  useEffect(() => {
    if (!open) return;
    const handleOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, [open]);

  /* ── Mobile menu animation ── */
  useEffect(() => {
    const menu  = menuRef.current;
    const items = menu?.querySelectorAll('.mob-item');
    if (!menu) return;

    if (open) {
      gsap.to(menu, { height: 'auto', duration: 0.4, ease: 'power3.out' });
      gsap.fromTo(items,
        { opacity: 0, y: -14 },
        { opacity: 1, y: 0, stagger: 0.055, duration: 0.4, ease: 'power3.out' }
      );
    } else {
      gsap.to(items, { opacity: 0, y: -10, stagger: 0.04, duration: 0.22 });
      gsap.to(menu,  { height: 0, duration: 0.38, delay: 0.12, ease: 'power3.in' });
    }
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="fixed w-full z-50 px-6 md:px-10 py-6 transition-all duration-300"
      style={{
        background:     (scrolled || open) ? 'rgba(8,8,8,0.88)' : 'transparent',
        backdropFilter: (scrolled || open) ? 'blur(20px)'        : 'none',
        borderBottom:   (scrolled || open)
          ? '1px solid rgba(240,237,232,0.05)'
          : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* ── Logo ── */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 bg-[#E8FF47] rounded-[5px] flex items-center justify-center flex-shrink-0">
            <span className="text-[#080808] font-black text-xs" style={{ fontFamily: 'Syne, sans-serif' }}>S</span>
          </div>
          <span className="font-bold text-base text-[#F0EDE8] tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            Spark<span className="text-[#E8FF47]">.</span>
          </span>
        </a>

        {/* ── Desktop links ── */}
        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link}`}
              className="link-line text-[#F0EDE8]/50 hover:text-[#F0EDE8] transition-colors duration-300 text-sm capitalize tracking-wide"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <a
          href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Strategy+Call+with+Spark+Agency&details=Let%27s+discuss+your+project"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-accent text-xs px-5 py-2.5"
        >
          Book a Call
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* ── Hamburger ── */}
        {/* FIX: translate-y values updated from 3px → 6px to match the 5px gap,
            so both lines meet exactly at center when forming the X */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden flex flex-col justify-center items-end gap-[5px] w-8 h-8"
          onClick={() => setOpen(v => !v)}
        >
          <span className={`block h-px bg-[#F0EDE8] transition-all duration-300 origin-center ${open ? 'w-5 rotate-[-45deg] translate-y-[6px]' : 'w-5'}`} />
          <span className={`block h-px bg-[#F0EDE8] transition-all duration-300 origin-center ${open ? 'opacity-0 scale-x-0' : 'w-3'}`} />
          <span className={`block h-px bg-[#F0EDE8] transition-all duration-300 origin-center ${open ? 'w-5 rotate-[45deg] -translate-y-[6px]' : 'w-5'}`} />
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden h-0 mt-3"
      >
        {/* FIX: border opacity changed from non-standard /06 and /04
            to explicit rgba() values for reliable rendering */}
        <div
          className="pt-4 pb-6 flex flex-col gap-1"
          style={{ borderTop: '1px solid rgba(240,237,232,0.06)' }}
        >
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setOpen(false)}
              className="mob-item block px-3 py-3 text-[#F0EDE8]/50 hover:text-[#F0EDE8] capitalize text-base last:border-0 transition-colors"
              style={{ borderBottom: '1px solid rgba(240,237,232,0.04)' }}
            >
              {link}
            </a>
          ))}

          {/* FIX: added explicit `flex items-center` so justify-center
              and the gap for any future icon actually take effect */}
          <a
            href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Strategy+Call+with+Spark+Agency"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mob-item btn-accent flex items-center justify-center gap-2 mt-4 mx-3 px-6 py-3 text-sm"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}