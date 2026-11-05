import React, { useState } from 'react';
import { 
  FaPhone, FaEnvelope, FaWhatsapp, FaRocket, FaChartLine, 
  FaGlobe, FaMobileAlt, FaStar, FaBars, FaTimes, FaArrowRight, FaCheckCircle 
} from 'react-icons/fa';

// ==========================================
// 🎛️ MASTER BUSINESS CONFIGURATION
// ==========================================
const BUSINESS_CONFIG = {
  name: "Vynex",
  tagline: "Your Business. Our Digital Expertise.",
  goal: "To grow local business online.",
  phone: "+91 7249283143",
  whatsappNumber: "917249283143",
  email: "mujtabasarwar312@gmail.com",
  heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
  
  services: [
    {
      title: "Website Development",
      description: "High-converting, lightning-fast modern websites built to turn local visitors into paying customers.",
      icon: FaGlobe,
      badge: "Essential"
    },
    {
      title: "Google Maps & SEO",
      description: "Dominate local searches when customers look for services near them in your area.",
      icon: FaChartLine,
      badge: "High Growth"
    },
    {
      title: "Social Media Growth",
      description: "Engaging content, ads, and brand presence on Instagram & Facebook tailored for local audiences.",
      icon: FaRocket,
      badge: "Popular"
    },
    {
      title: "WhatsApp & Leads Automation",
      description: "Direct customer booking system and instant inquiry setups that run 24/7 on autopilot.",
      icon: FaMobileAlt,
      badge: "Instant Conversion"
    }
  ],

  reasons: [
    "Tailored Specifically for Local Businesses & Storefronts",
    "100% Mobile-Optimized & Lightning Fast Performance",
    "Direct WhatsApp Integration for Zero Lead Loss",
    "Affordable Packages with Proven Local ROI"
  ]
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle WhatsApp Consultation Request
  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const businessName = e.target.businessName.value;
    const service = e.target.service.value;

    const message = `*New Growth Inquiry - Vynex*%0A%0A` +
                    `*Client Name:* ${name}%0A` +
                    `*Phone:* ${phone}%0A` +
                    `*Business Name:* ${businessName}%0A` +
                    `*Service Interested:* ${service}%0A%0A` +
                    `Hi Vynex Team, I want to grow my business online!`;

    window.open(`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${message}`, '_blank');
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-600 selection:text-white">
      
      {/* Top Banner */}
      <div className="bg-purple-950/60 border-b border-purple-900/40 text-purple-200 text-xs sm:text-sm py-2 px-4 text-center font-medium flex justify-center items-center gap-4">
        <span>🚀 Mission: {BUSINESS_CONFIG.goal}</span>
        <span className="hidden sm:inline">|</span>
        <span className="hidden sm:inline">⚡ Fast Turnaround & Premium Support</span>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-600 text-white font-black text-2xl px-3.5 py-1.5 rounded-xl shadow-[0_0_15px_rgba(147,51,234,0.5)]">
              V
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-wider text-white uppercase leading-none">
                VYNEX<span className="text-purple-500">.</span>
              </h1>
              <p className="text-[10px] text-purple-400 font-bold tracking-widest uppercase mt-0.5">Digital Agency</p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-stone-300">
            <a href="#home" className="hover:text-purple-400 transition">Home</a>
            <a href="#services" className="hover:text-purple-400 transition">Services</a>
            <a href="#about" className="hover:text-purple-400 transition">Why Us</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>

          {/* Action Call Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={`tel:${BUSINESS_CONFIG.phone}`} 
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-[0_0_20px_rgba(147,51,234,0.4)] transition flex items-center gap-2"
            >
              <FaPhone size={14} /> Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden text-white p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-b border-purple-900/40 px-4 pt-2 pb-4 space-y-3 font-medium text-stone-300">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-purple-400">Home</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-purple-400">Services</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-purple-400">Why Us</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-purple-400">Contact</a>
            <div className="pt-2">
              <a href={`tel:${BUSINESS_CONFIG.phone}`} className="w-full bg-purple-600 text-white text-center py-2.5 rounded-xl font-bold block">
                Call {BUSINESS_CONFIG.phone}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-28 lg:py-36 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-purple-950/80 border border-purple-500/30 text-purple-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(147,51,234,0.2)]">
            <FaRocket className="text-purple-400" /> Goal: Growing Local Businesses Online
          </div>
          
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            {BUSINESS_CONFIG.tagline.split('.')[0]}<span className="text-purple-500">.</span> <br />
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-white bg-clip-text text-transparent">
              Our Digital Expertise.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            We help local shops, showrooms, cafes, and service businesses establish a dominant online presence, attract nearby customers, and scale their revenue.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(147,51,234,0.5)] transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Grow Your Business <FaArrowRight />
            </a>
            <a 
              href="#services" 
              className="bg-stone-900/80 hover:bg-stone-900 border border-purple-900/50 text-white font-bold px-8 py-4 rounded-xl transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-purple-400 font-bold uppercase text-xs tracking-widest">Solutions</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 mb-4">How We Grow Your Local Business</h2>
          <p className="text-stone-400">Everything you need to step out of the shadows and command digital attention.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BUSINESS_CONFIG.services.map((srv, index) => {
            const IconComponent = srv.icon;
            return (
              <div 
                key={index} 
                className="bg-stone-950 border border-purple-950 hover:border-purple-600/60 p-8 rounded-2xl transition duration-300 hover:-translate-y-1 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3.5 bg-purple-950/80 border border-purple-800/40 text-purple-400 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition">
                      <IconComponent size={24} />
                    </div>
                    <span className="text-[10px] font-bold bg-purple-950 text-purple-300 px-2.5 py-1 rounded-full border border-purple-800/30">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{srv.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-6">{srv.description}</p>
                </div>

                <a 
                  href="#contact" 
                  className="text-purple-400 font-bold text-sm flex items-center gap-2 group-hover:text-purple-300"
                >
                  Get Quote <FaArrowRight size={12} />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-stone-950 border-y border-purple-950/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-purple-400 font-bold uppercase text-xs tracking-widest">Why Partner With Vynex</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 mb-6 leading-tight">
              Built Specifically For Local Storefronts & Brands.
            </h2>
            <p className="text-stone-400 leading-relaxed mb-8">
              Generic agencies build overpriced websites that look nice but bring zero customers. At <strong>Vynex</strong>, we focus strictly on local lead generation, search visibility, and converting visitors into paying foot traffic.
            </p>

            <div className="space-y-4">
              {BUSINESS_CONFIG.reasons.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-purple-500 flex-shrink-0 text-lg" />
                  <span className="text-stone-200 font-medium text-sm sm:text-base">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stat Card Showcase */}
          <div className="bg-gradient-to-br from-purple-950/40 to-black p-8 sm:p-12 rounded-3xl border border-purple-900/40 relative overflow-hidden">
            <div className="space-y-8 relative z-10">
              <div className="border-b border-purple-900/40 pb-6">
                <span className="text-4xl font-black text-purple-400">100%</span>
                <p className="text-stone-300 font-semibold mt-1">Focus on Local Digital Growth</p>
              </div>
              <div className="border-b border-purple-900/40 pb-6">
                <span className="text-4xl font-black text-white">Direct Lead</span>
                <p className="text-stone-300 font-semibold mt-1">WhatsApp & Phone Call Routing</p>
              </div>
              <div>
                <span className="text-4xl font-black text-purple-400">End-to-End</span>
                <p className="text-stone-300 font-semibold mt-1">Setup, Optimization & Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation / Contact Section */}
      <section id="contact" className="py-24 max-w-4xl mx-auto px-4">
        <div className="bg-stone-950 rounded-3xl border border-purple-900/50 p-8 sm:p-12 shadow-[0_0_50px_rgba(147,51,234,0.1)]">
          <div className="text-center max-w-lg mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Transform Your Business</h2>
            <p className="text-stone-400 text-sm">Fill out the form below to receive a free digital growth strategy via WhatsApp.</p>
          </div>

          <form onSubmit={handleConsultationSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 rounded-xl bg-black border border-purple-900/50 text-white placeholder-stone-600 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">Phone / WhatsApp</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  placeholder="+91 9876543210"
                  className="w-full px-4 py-3.5 rounded-xl bg-black border border-purple-900/50 text-white placeholder-stone-600 focus:border-purple-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">Business Name</label>
                <input 
                  type="text" 
                  name="businessName" 
                  required 
                  placeholder="e.g. Apex Cafe / Royal Motors"
                  className="w-full px-4 py-3.5 rounded-xl bg-black border border-purple-900/50 text-white placeholder-stone-600 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">Required Service</label>
                <select name="service" className="w-full px-4 py-3.5 rounded-xl bg-black border border-purple-900/50 text-white focus:border-purple-500 focus:outline-none">
                  <option value="Website Development">Website Development</option>
                  <option value="Google Maps & Local SEO">Google Maps & Local SEO</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Full Digital Package">Full Digital Growth Package</option>
                </select>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl shadow-[0_0_25px_rgba(147,51,234,0.4)] transition flex items-center justify-center gap-2 text-base"
            >
              <FaWhatsapp size={20} /> Request Free Consultation
            </button>
          </form>

          {formSubmitted && (
            <div className="mt-4 p-4 bg-purple-950/80 border border-purple-600 text-purple-200 text-center rounded-xl font-medium text-sm">
              WhatsApp opened with your details! Our team will get back to you shortly.
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-stone-400 py-12 border-t border-purple-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-black tracking-wider mb-3">VYNEX<span className="text-purple-500">.</span></h3>
            <p className="text-sm text-stone-400 leading-relaxed mb-4">
              {BUSINESS_CONFIG.tagline}
            </p>
            <p className="text-xs text-purple-400 font-semibold">{BUSINESS_CONFIG.goal}</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Quick Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-purple-400 transition">Home</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition">Digital Services</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition">Why Choose Vynex</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition">Get Consultation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Direct Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <FaPhone className="text-purple-500" /> 
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-purple-400 transition">{BUSINESS_CONFIG.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-purple-500" /> 
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-purple-400 transition">{BUSINESS_CONFIG.email}</a>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-stone-900 text-center text-xs text-stone-600">
          © {new Date().getFullYear()} VYNEX DIGITAL. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=Hi%20Vynex!%20I%20want%20to%20discuss%20growing%20my%20business%20online.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-purple-600 text-white p-4 rounded-full shadow-[0_0_30px_rgba(147,51,234,0.6)] hover:bg-purple-500 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat with Vynex on WhatsApp"
      >
        <FaWhatsapp size={28} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out text-sm font-semibold">
          Chat with Vynex!
        </span>
      </a>

    </div>
  );
}