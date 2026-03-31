import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { toast } from 'react-hot-toast';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const SOCIALS = [
  { Icon: FaFacebookF, href: 'https://www.facebook.com/profile.php?id=61585138836374&sk=followers', label: 'Facebook' },
  { Icon: FaInstagram, href: 'https://www.instagram.com/official.sparkagency/', label: 'Instagram' },
  { Icon: FaTiktok,    href: 'https://www.tiktok.com/@official.sparkagency', label: 'TikTok' },
  { Icon: FaWhatsapp,  href: 'https://wa.me/+9779708729008', label: 'WhatsApp' },
  { Icon: FaEnvelope,  href: 'https://mail.google.com/mail/?view=cm&to=office.sparkagency@gmail.com', label: 'Email' },
];

const INFO_ITEMS = [
  { label: 'Email',    value: 'office.sparkagency@gmail.com', href: 'mailto:office.sparkagency@gmail.com' },
  { label: 'Phone',    value: '+977 9708729008 / +977 9702048730', href: 'tel:+9779708729008' },
  { label: 'Location', value: 'Biratnagar, Nepal', href: null },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 600));
    setSending(false);
    toast.success("Message sent! We'll reply within 24 hours.", {
      style: { background: '#0E0E0E', color: '#F0EDE8', border: '1px solid rgba(240,237,232,0.08)', fontFamily: 'DM Sans, sans-serif', fontSize: '14px' },
      iconTheme: { primary: '#E8FF47', secondary: '#080808' },
    });
    setForm({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-reveal', { opacity: 0, y: 38 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const inputClass = 'w-full px-5 py-3.5 bg-[#0C0C0C] border border-[#F0EDE8]/[0.09] rounded-xl text-[#F0EDE8] placeholder:text-[#F0EDE8]/30 text-sm focus:outline-none focus:border-[#E8FF47]/40 transition-colors duration-300';

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 bg-[#080808] border-t border-[#F0EDE8]/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="contact-reveal text-center mb-12 max-w-xl mx-auto">
          <span className="text-[#E8FF47] text-[11px] uppercase tracking-[0.2em] font-medium block mb-3">Let's Talk</span>
          <h2 className="text-[2.8rem] md:text-[3.8rem] font-bold text-[#F0EDE8] leading-[0.96] tracking-[-0.02em]" style={{ fontFamily: 'Syne, sans-serif' }}>
            Start Your<br /><span style={{ color: 'rgba(240,237,232,0.28)' }}>Project Today</span>
          </h2>
          <p className="text-[#F0EDE8]/52 text-sm mt-4">Drop us a message or book a call. We respond within 24 hours, every time.</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 max-w-5xl mx-auto items-start">

          {/* Form */}
          <form onSubmit={handleSubmit} className="contact-reveal md:col-span-3 flex flex-col gap-3.5">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required className={inputClass} />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required className={inputClass} />
            <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your project…" required className={`${inputClass} resize-none`} />
            <button type="submit" disabled={sending} className="btn-accent self-start px-8 py-3.5 text-sm disabled:opacity-60">
              {sending ? 'Sending…' : 'Send Message →'}
            </button>
          </form>

          {/* Info sidebar */}
          <div className="contact-reveal md:col-span-2 flex flex-col gap-7">

            <div>
              <h3 className="text-base font-bold text-[#F0EDE8] mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Find Us Online</h3>
              <div className="flex flex-wrap gap-2">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                    className="w-10 h-10 rounded-xl border border-[#F0EDE8]/[0.09] flex items-center justify-center text-[#F0EDE8]/45 hover:border-[#E8FF47]/30 hover:text-[#E8FF47] transition-all duration-300">
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {INFO_ITEMS.map(({ label, value, href }) => (
                <div key={label}>
                  <div className="text-[#F0EDE8]/30 text-[10px] uppercase tracking-[0.18em] mb-1">{label}</div>
                  {href ? (
                    <a href={href} className="text-[#F0EDE8]/62 text-sm hover:text-[#E8FF47] transition-colors">{value}</a>
                  ) : (
                    <span className="text-[#F0EDE8]/62 text-sm">{value}</span>
                  )}
                </div>
              ))}
            </div>

            <a href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Strategy+Call+with+Spark+Agency"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#E8FF47] text-sm font-medium hover:gap-5 transition-all duration-300 group">
              <span className="w-8 h-8 rounded-full border border-[#E8FF47]/30 flex items-center justify-center group-hover:bg-[#E8FF47] group-hover:text-[#080808] transition-all duration-300">↗</span>
              Book a strategy call instead
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
