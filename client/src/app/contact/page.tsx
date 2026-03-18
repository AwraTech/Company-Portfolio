'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaYoutube, FaTiktok, FaTelegram, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

export default function ContactPage() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({ fullName: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`min-h-screen pt-20 pb-20 ${isDark ? 'bg-[#0f172a]' : 'bg-[#30504F]'}`}>
      {/* Success Alert */}
      {showSuccess && (
        <div className="fixed top-24 right-4 z-50 bg-[#00FFAB] text-black px-6 py-4 rounded-lg shadow-2xl animate-slideDown flex items-center gap-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-semibold">Message sent successfully!</span>
        </div>
      )}

      {/* Hero Section with Background Image */}
      <div className="relative h-[280px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
          alt="Tech Background"
          fill
          className="object-cover"
          priority
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-black/20 via-[#0f172a]/90 to-[#0f172a]' : 'from-black/20 via-[#30504F]/90 to-[#30504F]'}`}></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-3">Contact Our Team</h1>
          <p className="text-sm sm:text-base text-white/90 max-w-xl">Get in touch with us and let's discuss how we can help bring your ideas to life.</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">Let's Build The Future Together</h2>
              <p className="text-white/70 text-sm leading-relaxed">Have a project in mind? We're here to turn your vision into reality.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="bg-[#00FFAB]/10 p-2.5 rounded-lg group-hover:bg-[#00FFAB]/20 transition">
                  <FaEnvelope className="text-[#00FFAB] text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm mb-0.5">Email</h3>
                  <a href="mailto:support@awratech.com" className="block text-white/70 hover:text-[#00FFAB] transition text-sm">support@awratech.com</a>
                  <a href="mailto:info@awratech.com" className="block text-white/70 hover:text-[#00FFAB] transition text-sm">info@awratech.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-[#00FFAB]/10 p-3 rounded-lg group-hover:bg-[#00FFAB]/20 transition">
                  <FaPhone className="text-[#00FFAB] text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Phone</h3>
                  <a href="tel:+251978210810" className="block text-white/70 hover:text-[#00FFAB] transition font-light">+251 978 210 810</a>
                  <a href="tel:+251967606906" className="block text-white/70 hover:text-[#00FFAB] transition font-light">+251 967 606 906</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-[#00FFAB]/10 p-3 rounded-lg group-hover:bg-[#00FFAB]/20 transition">
                  <FaMapMarkerAlt className="text-[#00FFAB] text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Location</h3>
                  <p className="text-white/70 font-light">Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-[#00FFAB]/10 p-3 rounded-lg group-hover:bg-[#00FFAB]/20 transition">
                  <FaTelegram className="text-[#00FFAB] text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Telegram</h3>
                  <a href="https://t.me/+251978210810" className="block text-white/70 hover:text-[#00FFAB] transition font-light">+251 978 210 810</a>
                  <a href="https://t.me/+251967606906" className="block text-white/70 hover:text-[#00FFAB] transition font-light">+251 967 606 906</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-[#00FFAB]/10 p-3 rounded-lg group-hover:bg-[#00FFAB]/20 transition">
                  <FaWhatsapp className="text-[#00FFAB] text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">WhatsApp</h3>
                  <a href="https://wa.me/251978210810" className="block text-white/70 hover:text-[#00FFAB] transition font-light">+251 978 210 810</a>
                  <a href="https://wa.me/251967606906" className="block text-white/70 hover:text-[#00FFAB] transition font-light">+251 967 606 906</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/awratech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0077B5] transition-all hover:scale-110">
                  <FaLinkedin className="text-3xl" />
                </a>
                <a href="https://github.com/AwraTech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#333] transition-all hover:scale-110">
                  <FaGithub className="text-3xl" />
                </a>
                <a href="https://youtube.com/@awratech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF0000] transition-all hover:scale-110">
                  <FaYoutube className="text-3xl" />
                </a>
                <a href="https://tiktok.com/@awra.tech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#000000] transition-all hover:scale-110">
                  <FaTiktok className="text-3xl" />
                </a>
                <a href="https://www.instagram.com/awratech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E4405F] transition-all hover:scale-110">
                  <FaInstagram className="text-3xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-white font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#00FFAB] transition"
                  placeholder="Abebe Kebede"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#00FFAB] transition"
                  placeholder="abebe@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#00FFAB] transition"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#00FFAB] transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00FFAB] hover:bg-[#00FFAB]/80 text-black font-semibold py-3 px-6 rounded-lg transition-all hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
