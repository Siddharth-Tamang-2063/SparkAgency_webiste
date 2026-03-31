import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const NAV = ['home', 'services', 'about', 'contact'];

const SERVICES_LIST = [
  'Web Design', 'SaaS Products', 'AI Agents',
  'Performance Marketing', 'Branding', 'Growth Strategy',
];

const SOCIALS = [
  { Icon: FaFacebookF, href: 'https://www.facebook.com/profile.php?id=61585138836374&sk=followers' },
  { Icon: FaInstagram, href: 'https://www.instagram.com/official.sparkagency/'                    },
  { Icon: FaTiktok,    href: 'https://www.tiktok.com/@official.sparkagency'                       },
  { Icon: FaWhatsapp,  href: 'https://wa.me/+9779708729008'                                       },
  { Icon: FaEnvelope,  href: 'mailto:office.sparkagency@gmail.com'                                },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#F0EDE8]/[0.04]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        {/* ── Main columns ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-14 border-b border-[#F0EDE8]/[0.04]">

          {/* Brand column (spans 2 on desktop) */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 bg-[#E8FF47] rounded-[5px] flex items-center justify-center flex-shrink-0">
                <span className="text-[#080808] font-black text-xs" style={{ fontFamily: 'Syne, sans-serif' }}>S</span>
              </div>
              <span className="font-bold text-base text-[#F0EDE8]" style={{ fontFamily: 'Syne, sans-serif' }}>
                Spark<span className="text-[#E8FF47]">.</span>
              </span>
            </div>

            <p className="text-[#F0EDE8]/30 text-[0.8rem] leading-relaxed mb-6 max-w-[220px]">
              Premium digital experiences, AI automation, and growth systems for ambitious brands.
            </p>

            <div className="flex flex-wrap gap-2">
              {SOCIALS.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-[#F0EDE8]/[0.07] flex items-center justify-center text-[#F0EDE8]/28 hover:border-[#E8FF47]/20 hover:text-[#E8FF47] transition-all duration-300"
                >
                  <Icon size={12} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#F0EDE8]/50 text-[10px] uppercase tracking-[0.2em] mb-5">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV.map(link => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="text-[#F0EDE8]/30 text-sm capitalize hover:text-[#F0EDE8] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#F0EDE8]/50 text-[10px] uppercase tracking-[0.2em] mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {SERVICES_LIST.map(s => (
                <li key={s} className="text-[#F0EDE8]/30 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F0EDE8]/50 text-[10px] uppercase tracking-[0.2em] mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-[#F0EDE8]/30">
              <a href="mailto:office.sparkagency@gmail.com" className="hover:text-[#E8FF47] transition-colors">
                office.sparkagency@gmail.com
              </a>
              <a href="tel:+9779708729008" className="hover:text-[#F0EDE8] transition-colors">
                +977 9708729008
              </a>
              <span>Biratnagar, Nepal</span>
            </div>

            <a
              href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Strategy+Call+with+Spark+Agency"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-7 text-[11px] text-[#E8FF47] font-medium uppercase tracking-wider hover:gap-3 transition-all duration-300"
            >
              Book a Call ↗
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#F0EDE8]/18 text-xs">
            © {new Date().getFullYear()} Spark Agency. All rights reserved.
          </p>
          <p className="text-[#F0EDE8]/18 text-xs">
            Built with precision in Biratnagar, Nepal.
          </p>
        </div>
      </div>
    </footer>
  );
}