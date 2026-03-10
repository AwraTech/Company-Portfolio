'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import TestimonialCard from './TestimonialCard';
import { useTheme } from '@/context/ThemeContext';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', text: '', image: null as File | null });
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) setSlidesPerView(3);
      else if (window.innerWidth >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };
    
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    resetTimer();
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
    resetTimer();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < slidesPerView; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setShowSuccess(true);
    setFormData({ name: '', company: '', text: '', image: null });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className={`py-16 px-4 ${isDark ? 'bg-[#0f172a]' : 'bg-[#30504F]'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Success Alert */}
        {showSuccess && (
          <div className="fixed top-24 right-4 z-50 bg-[#00FFAB] text-black px-6 py-4 rounded-lg shadow-2xl animate-slideDown flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold">Thank you for sharing your experience!</span>
          </div>
        )}

        <p className="text-[#00FFAB] text-sm font-medium mb-2 text-center">05. TESTIMONIALS</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white">What Our Clients Say</h2>
        <p className="text-white/80 text-center mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Don't just take our word for it - hear from our satisfied clients
        </p>
        
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-[#00FFAB] text-black font-semibold rounded-lg hover:bg-[#00e69a] transition-all"
          >
            Share Your Experience
          </button>
        </div>
        <div className="relative">
          <button
            onClick={handlePrev}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card-bg rounded-full p-2 shadow-lg hover:bg-section-bg transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <div
            className="overflow-hidden px-4 md:px-0"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300">
              {getVisibleTestimonials().map((testimonial, index) => (
                <TestimonialCard
                  key={`${currentIndex}-${index}`}
                  picture={testimonial.picture}
                  name={testimonial.name}
                  company={testimonial.company}
                  text={testimonial.text}
                />
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card-bg rounded-full p-2 shadow-lg hover:bg-section-bg transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>
        
        {/* Mobile navigation buttons */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="bg-white/10 rounded-full p-3 shadow-lg hover:bg-white/20 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white/10 rounded-full p-3 shadow-lg hover:bg-white/20 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                resetTimer();
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-[#00FFAB]' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-[#30504F] border border-white/10 rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-[#00FFAB] transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-6">Share Your Experience</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white text-sm mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#00FFAB]"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm mb-2">Company *</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#00FFAB]"
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm mb-2">Your Experience *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.text}
                  onChange={(e) => setFormData({...formData, text: e.target.value})}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#00FFAB] resize-none"
                  placeholder="Share your experience with us..."
                />
              </div>
              
              <div>
                <label className="block text-white text-sm mb-2">Profile Image (Optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({...formData, image: e.target.files?.[0] || null})}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#00FFAB] file:text-black file:cursor-pointer hover:file:bg-[#00e69a]"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-[#00FFAB] text-black font-semibold rounded-lg hover:bg-[#00e69a] transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
