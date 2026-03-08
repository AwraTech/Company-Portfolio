'use client';

import { useState, useRef, useEffect } from 'react';
import { IoSend, IoClose } from 'react-icons/io5';
import { BsChatDotsFill } from 'react-icons/bs';
import { usePathname } from 'next/navigation';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Awra AI, your intelligent assistant. How can I help you today?", isBot: true, timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.body.style.background === 'rgb(10, 25, 47)');
    };
    checkDarkMode();
    const interval = setInterval(checkDarkMode, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, isBot: false, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prev => [...prev, { text: botResponse, isBot: true, timestamp: new Date() }]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) return "Hello! I'm Awra AI, your intelligent assistant. I'm here to help you with anything you need!";
    if (input.includes('service')) return "We offer web development, mobile apps, AI solutions, and cloud services. What interests you?";
    if (input.includes('contact')) return "You can reach us at contact@awratech.com or call +1 (555) 123-4567";
    if (input.includes('price') || input.includes('cost')) return "Our pricing varies by project. Let's discuss your needs! Contact our team for a custom quote.";
    if (input.includes('team')) return "We have a talented team of developers, designers, and AI specialists ready to help!";
    if (input.includes('who are you') || input.includes('what are you')) return "I'm Awra AI, an intelligent virtual assistant created by Awra Tech to help answer your questions!";
    return "That's interesting! I'm Awra AI and I can help you with our services, pricing, team info, or contact details. What would you like to know?";
  };

  if (pathname === '/contact' || pathname === '/news') return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-4 sm:bottom-8 sm:right-8 z-50 group transition-all duration-300 drop-shadow-2xl cursor-pointer"
      >
        <div className="relative">
          {/* Main button background */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-2xl group-hover:shadow-[#00FFAB]/30 transition-all duration-300 group-hover:scale-110 border-2 border-[#00FFAB]">
            <div className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden">
              {/* Icon */}
              <div className="relative z-10 transition-all duration-300 group-hover:scale-110">
                {isOpen ? (
                  <IoClose size={28} className="text-[#30504F] font-bold animate-spin" style={{animationDuration: '0.3s', animationIterationCount: '1'}} />
                ) : (
                  <div className="relative animate-bounce" style={{animationDuration: '2s'}}>
                    {/* Bold chat bubble icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" className="text-[#30504F]">
                      <path 
                        fill="currentColor" 
                        strokeWidth="2"
                        stroke="currentColor"
                        d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.35L2 22l5.65-1.05C9.96 21.64 11.46 22 13 22h7c1.1 0 2-.9 2-2V12c0-5.52-4.48-10-10-10z"
                      />
                      {/* Bold message dots */}
                      <circle cx="8" cy="12" r="2" fill="#00FFAB" className="animate-pulse" style={{animationDelay: '0s'}} />
                      <circle cx="12" cy="12" r="2" fill="#00FFAB" className="animate-pulse" style={{animationDelay: '0.3s'}} />
                      <circle cx="16" cy="12" r="2" fill="#00FFAB" className="animate-pulse" style={{animationDelay: '0.6s'}} />
                    </svg>
                    
                    {/* Notification dot */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#00FFAB] rounded-full border-2 border-white animate-ping"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Floating label - shows on hover and touch */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#30504F] text-[#00FFAB] px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border-2 border-[#00FFAB] transform scale-95 group-hover:scale-100 group-active:scale-100">
            💬 Chat with Awra AI
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-[#30504F]"></div>
          </div>
        </div>
      </button>

      {isOpen && (
        <div className={`fixed bottom-20 right-4 sm:bottom-24 sm:right-8 top-24 sm:top-24 z-40 w-[calc(100vw-2rem)] sm:w-[400px] h-auto sm:h-[calc(100vh-12rem)] max-w-[400px] max-h-[calc(100vh-14rem)] sm:max-h-[550px] backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col overflow-hidden border ${isDark ? 'bg-[#0A192F]/95 border-white/10' : 'bg-white/95 border-[#00FFAB]/20'}`}>
          <div className="bg-gradient-to-r from-[#30504F] via-[#30504F] to-[#30504F]/90 p-4 flex items-center justify-between border-b border-[#00FFAB]/20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00FFAB] to-[#00FFAB]/80 p-0.5 shadow-lg">
                  <div className="w-full h-full rounded-full bg-[#30504F] flex items-center justify-center overflow-hidden">
                    {/* Professional AI avatar */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Head circle */}
                      <circle cx="50" cy="35" r="20" fill="#00FFAB" className="animate-pulse"/>
                      
                      {/* AI Brain pattern */}
                      <path d="M 35 30 Q 40 25 45 30 Q 50 25 55 30 Q 60 25 65 30" stroke="#30504F" strokeWidth="2" fill="none" className="animate-pulse"/>
                      <path d="M 35 35 Q 40 30 45 35 Q 50 30 55 35 Q 60 30 65 35" stroke="#30504F" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                      <path d="M 35 40 Q 40 35 45 40 Q 50 35 55 40 Q 60 35 65 40" stroke="#30504F" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                      
                      {/* Eyes - more tech-like */}
                      <rect x="42" y="32" width="4" height="6" rx="2" fill="#30504F" className="animate-pulse"/>
                      <rect x="54" y="32" width="4" height="6" rx="2" fill="#30504F" className="animate-pulse"/>
                      
                      {/* Digital mouth */}
                      <rect x="45" y="42" width="10" height="2" rx="1" fill="#30504F" className="animate-pulse"/>
                      
                      {/* Body - more geometric */}
                      <rect x="35" y="55" width="30" height="35" rx="15" fill="#00FFAB" className="animate-breathe"/>
                      
                      {/* Tech elements */}
                      <circle cx="25" cy="25" r="2" fill="#00FFAB" className="animate-ping" style={{animationDelay: '0s'}}/>
                      <circle cx="75" cy="30" r="1.5" fill="#00FFAB" className="animate-ping" style={{animationDelay: '0.5s'}}/>
                      <circle cx="20" cy="45" r="1" fill="#00FFAB" className="animate-ping" style={{animationDelay: '1s'}}/>
                      <circle cx="80" cy="50" r="1.5" fill="#00FFAB" className="animate-ping" style={{animationDelay: '1.5s'}}/>
                    </svg>
                  </div>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#00FFAB] rounded-full border-2 border-[#30504F] animate-pulse"></span>
              </div>
              <div>
                <h3 className="text-[#00FFAB] font-bold text-base">Awra AI</h3>
                <p className="text-[#00FFAB]/70 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#00FFAB] rounded-full animate-pulse"></span>
                  Online Assistant
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#00FFAB] hover:text-white transition-colors duration-200 p-1 rounded-full hover:bg-[#00FFAB]/10">
              <IoClose size={24} />
            </button>
          </div>

          <div className={`flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 ${isDark ? 'bg-[#0A192F]' : 'bg-gradient-to-b from-white/50 to-white/80'}`}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} animate-slideDown`}>
                <div className={`max-w-[85%] sm:max-w-[75%] p-2.5 sm:p-3 rounded-2xl shadow-md ${msg.isBot ? (isDark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-800') : 'bg-[#00FFAB] text-black'}`}>
                  <p className="text-xs sm:text-sm">{msg.text}</p>
                  <span className="text-[10px] sm:text-xs opacity-60 mt-1 block">{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className={`p-3 rounded-2xl shadow-md ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
                  <div className="flex gap-1">
                    <span className={`w-2 h-2 rounded-full animate-bounce ${isDark ? 'bg-white' : 'bg-gray-400'}`} style={{ animationDelay: '0ms' }}></span>
                    <span className={`w-2 h-2 rounded-full animate-bounce ${isDark ? 'bg-white' : 'bg-gray-400'}`} style={{ animationDelay: '150ms' }}></span>
                    <span className={`w-2 h-2 rounded-full animate-bounce ${isDark ? 'bg-white' : 'bg-gray-400'}`} style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className={`p-3 sm:p-4 border-t ${isDark ? 'bg-[#0A192F] border-white/10' : 'bg-white border-gray-200'}`}>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className={`flex-1 px-3 sm:px-4 py-2 border rounded-full focus:outline-none focus:border-[#00FFAB] transition text-sm ${isDark ? 'bg-white/10 border-white/20 text-white placeholder-white/50' : 'bg-white border-gray-300 text-black placeholder-gray-400'}`}
              />
              <button
                onClick={handleSend}
                className="bg-[#00FFAB] hover:bg-[#00FFAB]/80 text-black p-2 rounded-full transition-all hover:scale-110 flex-shrink-0"
              >
                <IoSend size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
