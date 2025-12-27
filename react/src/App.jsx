import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";
import agencyImg from '/src/assets/agencyImg.jpg'
import sidImg from '/src/assets/siddharth.jpg'
import karanImg from '/src/assets/karan.png'

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "power3.out", duration: 1 });

export default function App() {
  const heroBg = useRef(null);
  const heroText = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const cardsRef = useRef([]);
  const contactRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["home", "services", "about", "contact"];

  const experts = [
    {
      name: "Siddharth Tamang",
      role: "Co-Founder & Developer",
      img: "/src/assets/siddharth.jpg",
    },
    {
      name: "Karan Kumar Kamat",
      role: "Co-Founder & Designer",
      img: "/src/assets/karan.png",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  // GSAP Scroll Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(heroBg.current, {
        yPercent: 30,
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.from(heroText.current.children, {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: { trigger: "#hero", start: "top 70%" },
      });
      gsap.from(".service-card", {
        y: 120,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 55%",
          end: "bottom 70%",
          scrub: true,
        },
      });
      gsap.to(aboutRef.current, {
        yPercent: 30, // moves down as you scroll
        scrollTrigger: {
          trigger: "#about-parallax",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      cardsRef.current.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
      if (contactRef.current) {
        gsap.from(contactRef.current.children, {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: { trigger: contactRef.current, start: "top 80%" },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  // Hover effects
  useEffect(() => {
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card) => {
      card.addEventListener("mouseenter", () =>
        gsap.to(card, {
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(30,58,138,0.3)",
          duration: 0.3,
        })
      );
      card.addEventListener("mouseleave", () =>
        gsap.to(card, {
          scale: 1,
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          duration: 0.3,
        })
      );
    });
    cardsRef.current.forEach((card) => {
      card.addEventListener("mouseenter", () =>
        gsap.to(card, {
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(30,58,138,0.3)",
          duration: 0.3,
        })
      );
      card.addEventListener("mouseleave", () =>
        gsap.to(card, {
          scale: 1,
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          duration: 0.3,
        })
      );
    });
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (!menuRef.current) return;

    const links = menuRef.current.querySelectorAll("li a");
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.4 },
    });

    if (menuOpen) {
      tl.to(menuRef.current, { height: "auto" }) // expand container
        .fromTo(
          links,
          { opacity: 0, y: -20, scale: 0.95, rotateX: -15 },
          { opacity: 1, y: 0, scale: 1, rotateX: 0, stagger: 0.1 },
          "<" // start at the same time as container
        );
    } else {
      tl.to(
        links,
        {
          opacity: 0,
          y: -20,
          scale: 0.95,
          rotateX: -15,
          stagger: 0.05,
          duration: 0.25,
        },
        0
      ).to(menuRef.current, { height: 0, duration: 0.4 }, 0); // collapse simultaneously
    }
  }, [menuOpen]);

  return (
    <div className="overflow-x-hidden font-sans bg-[#F9FAFB] text-gray-900">
      <Toaster position="top-right" />

      {/* NAVBAR */}
      <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={agencyImg}
              alt="Spark Agency"
              className="w-10 h-10 object-cover rounded-full"
            />
            <span className="text-2xl font-bold text-[#1E3A8A]">
              Spark Agency
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-[#1E3A8A] font-medium">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                className="relative hover:text-blue-800 transition-colors before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-[#1E3A8A] before:transition-all hover:before:w-full"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6 text-[#1E3A8A]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          ref={menuRef}
          className={`md:hidden bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-300 ${
            menuOpen ? "h-auto py-4" : "h-0"
          } rounded-b-lg shadow-lg`}
        >
          <ul className="flex flex-col gap-2">
            {sections.map((sec) => (
              <li key={sec}>
                <a
                  href={`#${sec}`}
                  className="block px-6 py-4 text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white rounded-lg transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          ref={heroBg}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1E3A8A,rgba(30,58,138,0.6))]  scale-110"
        />
        <div
          ref={heroText}
          className="relative z-10 max-w-4xl text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            We Build <br /> Digital Experiences
          </h1>
          <p className="mt-6 text-xl text-white/80">
            High-end websites, marketing & automation for modern brands.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Book+a+Call&dates=20251227T090000Z/20251227T100000Z&details=Schedule+a+call+with+Spark+Agency&location=Online&trp=false&add=office.sparkagency@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#1E3A8A] text-white rounded-full font-semibold hover:bg-white hover:text-[#1E3A8A] transition"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        ref={servicesRef}
        className="py-40 bg-[radial-gradient(circle_at_20%_20%,rgba(30,58,138,0.12),transparent_45%)]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-[#1E3A8A]">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              " 💻 Web Design",
              " 📈Marketing",
              "🤖Automation",
              " 🏷️Branding",
              " 📱Social Media",
              "🤝Customer Interaction",
            ].map((s, i) => (
              <div
                key={i}
                className="service-card bg-white p-10 rounded-3xl shadow-lg cursor-pointer"
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#1E3A8A]">
                  {s}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We create scalable, conversion-focused solutions built for
                  growth and performance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PARALLAX */}
      <section
        id="about-parallax"
        className="relative h-[60vh] overflow-hidden"
      >
        <div
          ref={aboutRef}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1E3A8A,rgba(30,58,138,0.6))]"
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h2 className="text-5xl font-bold text-white">Designed for Impact</h2>
        </div>
      </section>

      {/* ABOUT & EXPERTS */}
      <section className="relative py-44 bg-[#F9FAFB] overflow-hidden">
        {/* background grid + glow */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(30,58,138,0.12),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(30,58,138,0.10),transparent_45%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* TOP CONTENT */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#020617] leading-tight">
                Founder-Led. <br />
                Execution-Obsessed.
              </h2>

              <p className="mt-8 text-xl text-gray-700 leading-relaxed max-w-xl">
                We don’t operate like agencies. We operate like owners.
                <br />
                <br />
                Every product, funnel, and system we build is designed to
                <span className="font-semibold text-[#1E3A8A]">
                  {" "}
                  generate leverage, scale fast, and dominate attention.
                </span>
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-blue-100">
              <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4">
                Why We Win
              </h3>

              <ul className="space-y-4 text-gray-700">
                <li>• We think in systems, not pages</li>
                <li>• Design + marketing + execution under one roof</li>
                <li>• Built by founders, not account managers</li>
                <li>• Speed, precision, and measurable outcomes</li>
              </ul>
            </div>
          </div>

          {/* FOUNDERS */}
          <h3 id="about" className="text-4xl font-bold text-[#020617] mb-14">
            Meet the Founders
          </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
  {/* SID */}
  <div
    ref={(el) => (cardsRef.current[0] = el)}
    className="group relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition"
  >
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1E3A8A]/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

    <div className="relative z-10 flex flex-col sm:grid sm:grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-6 sm:gap-8 items-center sm:items-start text-center sm:text-left">
      {/* PHOTO */}
      <img
        src={sidImg}
        alt="Siddharth Tamang"
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border border-blue-200 shadow-md"
      />

      {/* CONTENT */}
      <div>
        <h4 className="text-2xl sm:text-3xl font-semibold text-[#020617]">
          Siddharth Tamang
        </h4>

        <p className="mt-1 text-xs sm:text-sm uppercase tracking-wider text-[#1E3A8A] font-medium">
          Co-Founder · Developer · Editor · Copywriter
        </p>

        <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
          Architect of systems, performance, and messaging. Siddharth engineers
          scalable products, writes high-converting copy, and ensures everything
          shipped is fast, precise, and battle-tested.
        </p>

        <p className="mt-3 text-xs sm:text-sm text-gray-600">
          Focus: Full-stack development · Automation · Conversion logic
        </p>
      </div>
    </div>
  </div>

  {/* KARAN */}
  <div
    ref={(el) => (cardsRef.current[1] = el)}
    className="group relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition"
  >
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1E3A8A]/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

    <div className="relative z-10 flex flex-col sm:grid sm:grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-6 sm:gap-8 items-center sm:items-start text-center sm:text-left">
      {/* PHOTO */}
      <img
        src={karanImg}
        alt="Karan Kumar Kamat"
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border border-blue-200 shadow-md"
      />

      {/* CONTENT */}
      <div>
        <h4 className="text-2xl sm:text-3xl font-semibold text-[#020617]">
          Karan Kumar Kamat
        </h4>

        <p className="mt-1 text-xs sm:text-sm uppercase tracking-wider text-[#1E3A8A] font-medium">
          Co-Founder · Designer · Digital Marketer · Ads Specialist
        </p>

        <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
          Designs brands people remember and campaigns people click. Karan blends
          high-end visuals with data-driven marketing to convert attention into
          revenue.
        </p>

        <p className="mt-3 text-xs sm:text-sm text-gray-600">
          Focus: UI/UX · Branding · Paid Ads · Growth strategy
        </p>
      </div>
    </div>
  </div>
</div>

        
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-40 bg-[radial-gradient(circle_at_20%_20%,rgba(30,58,138,0.12),transparent_45%)]"
      >
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A]">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-600">
            We’d love to hear from you! Send us a message or reach out on social
            media.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-3xl shadow-lg flex flex-col gap-6"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
              required
            />
            <button
              type="submit"
              className="px-6 py-4 bg-[#1E3A8A] text-white rounded-full font-semibold hover:bg-blue-900 transition"
            >
              Send Message
            </button>
          </form>

          {/* Socials */}
          <div className="flex flex-col gap-6 justify-center">
            <h3 className="text-2xl font-semibold text-[#1E3A8A]">
              Reach Us On
            </h3>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61585138836374&sk=followers"
                className="p-4 rounded-full bg-[#1E3A8A] text-white hover:bg-blue-900 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/official.sparkagency/"
                className="p-4 rounded-full bg-[#1E3A8A] text-white hover:bg-blue-900 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@official.sparkagency"
                className="p-4 rounded-full bg-[#1E3A8A] text-white hover:bg-blue-900 transition"
              >
                <FaTiktok />
              </a>
              <a
                href="https://wa.me//+9779708729008"
                className="p-4 rounded-full bg-[#1E3A8A] text-white hover:bg-blue-900 transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=office.sparkagency@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-[#1E3A8A] text-white hover:bg-blue-900 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1E3A8A] text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={agencyImg}
                alt="Spark Agency"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-2xl font-bold">Spark Agency</span>
            </div>
            <p className="text-gray-200">
              We build digital experiences, marketing systems, and automation
              solutions that help brands scale faster and smarter.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61585138836374&sk=followers"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/official.sparkagency/"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@official.sparkagency"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaTiktok />
              </a>
              <a
                href="https://wa.me//+9779708729008"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:office.sparkagency@gmail.com"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-gray-300 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:office.sparkagency@gmail.com"
                className="hover:text-gray-300 transition"
              >
                office.sparkagency@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+9779708729008"
                className="hover:text-gray-300 transition"
              >
                +977 9708729008, +977 9702048730
              </a>
            </p>
            <p>Location: Biratnagar, Nepal</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-white/20 pt-6 text-center text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Spark Agency. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
