'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

interface NewsPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export default function NewsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredPosts: NewsPost[] = [
    {
      id: 1,
      title: "Awra Tech Celebrates Successful Year",
      excerpt: "Looking back at our achievements and exciting projects completed this year.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      date: "Dec 15, 2024",
      author: "Awra Tech Team",
      category: "Company News"
    },
    {
      id: 2,
      title: "Awra Tech Launches New AI Solutions",
      excerpt: "We're excited to announce our latest AI-powered tools for businesses.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      date: "Dec 12, 2024",
      author: "Awra Tech Team",
      category: "Technology"
    },
    {
      id: 3,
      title: "Tech Meetup in Addis Ababa",
      excerpt: "Join us for our upcoming tech meetup discussing the future of software development.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      date: "Dec 10, 2024",
      author: "Awra Tech Team",
      category: "Events"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
    }, 20000);
    return () => clearInterval(timer);
  }, [featuredPosts.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  const newsPosts: NewsPost[] = [
    {
      id: 4,
      title: "New Project Completed Successfully",
      excerpt: "We successfully delivered a major e-commerce platform for our client.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      date: "Dec 8, 2024",
      author: "Awra Tech",
      category: "Projects"
    },
    {
      id: 5,
      title: "Team Expansion Announcement",
      excerpt: "Awra Tech is growing! We're welcoming new talented developers to our team.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      date: "Dec 5, 2024",
      author: "Awra Tech",
      category: "Team"
    },
    {
      id: 6,
      title: "Latest Tech Trends in Ethiopia",
      excerpt: "Exploring the growing tech ecosystem and opportunities in Ethiopia.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
      date: "Dec 3, 2024",
      author: "Awra Tech",
      category: "Industry"
    },
    {
      id: 7,
      title: "Client Success Story",
      excerpt: "How we helped a local startup scale their business with our solutions.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
      date: "Dec 1, 2024",
      author: "Awra Tech",
      category: "Success Stories"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">News & Updates</h1>
        <p className="text-white/70 text-lg max-w-2xl">Stay updated with what's happening at Awra Tech and in the tech world.</p>
      </div>

      {/* Featured Post Slider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative h-[350px] sm:h-[500px] rounded-2xl overflow-hidden mb-6">
          {featuredPosts.map((post, index) => (
            <div
              key={post.id}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                <span className="inline-block px-3 py-1 bg-[#00FFAB] text-black text-xs sm:text-sm font-semibold rounded-full mb-2 sm:mb-4">
                  {post.category}
                </span>
                <h2 className="text-lg sm:text-4xl font-bold text-white mb-2 sm:mb-3">{post.title}</h2>
                <p className="text-white/90 text-xs sm:text-lg mb-2 sm:mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-3 sm:gap-4 text-white/70 text-xs sm:text-sm">
                  <span className="flex items-center gap-1 sm:gap-2">
                    <FaCalendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1 sm:gap-2">
                    <FaUser size={12} /> {post.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Controls - Outside Image */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="text-white hover:text-[#00FFAB] transition-all"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {featuredPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${index === currentSlide ? 'bg-[#00FFAB] w-8' : 'bg-white/50 w-2'}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="text-white hover:text-[#00FFAB] transition-all"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Recent Updates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-xl overflow-hidden group cursor-pointer transition-all hover:scale-[1.02] hover:shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2 py-1 bg-[#00FFAB] text-black text-xs font-semibold rounded">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-[#00FFAB] transition">{post.title}</h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center text-white/60 text-xs">
                  <span className="flex items-center gap-1">
                    <FaCalendar size={10} /> {post.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
