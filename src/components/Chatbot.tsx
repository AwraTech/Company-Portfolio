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
        className="fixed bottom-8 right-4 sm:bottom-8 sm:right-8 z-50 text-white hover:text-[#00FFAB] hover:scale-125 transition-all duration-300 drop-shadow-2xl animate-bounce"
        style={{ animationDuration: '2s' }}
      >
        {isOpen ? <IoClose size={50} className="animate-spin" style={{animationDuration: '0.5s', animationIterationCount: '1'}} /> : <BsChatDotsFill size={50} />}
      </button>

      {isOpen && (
        <div className={`fixed bottom-20 right-4 sm:bottom-24 sm:right-8 top-24 sm:top-24 z-40 w-[calc(100vw-2rem)] sm:w-[400px] h-auto sm:h-[calc(100vh-12rem)] max-w-[400px] max-h-[calc(100vh-14rem)] sm:max-h-[550px] backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col overflow-hidden border ${isDark ? 'bg-[#0A192F]/95 border-white/10' : 'bg-white/95 border-[#00FFAB]/20'}`}>
          <div className="bg-gradient-to-r from-[#30504F] to-[#00FFAB]/30 p-3 sm:p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#00FFAB] to-[#00FFAB]/70 flex items-center justify-center overflow-hidden shadow-lg">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Head */}
                    <ellipse cx="50" cy="40" rx="22" ry="25" fill="#30504F" className="animate-headBob"/>
                    
                    {/* Hair/Top */}
                    <path d="M 30 30 Q 35 20 40 25 Q 45 18 50 22 Q 55 18 60 25 Q 65 20 70 30" fill="#00FFAB" className="animate-wiggle"/>
                    
                    {/* Eyes */}
                    <ellipse cx="42" cy="38" rx="3" ry="4" fill="white" className="animate-eyeMove"/>
                    <ellipse cx="58" cy="38" rx="3" ry="4" fill="white" className="animate-eyeMove"/>
                    <circle cx="42" cy="39" r="1.5" fill="#000" className="animate-pupil"/>
                    <circle cx="58" cy="39" r="1.5" fill="#000" className="animate-pupil"/>
                    
                    {/* Eyebrows */}
                    <path d="M 38 32 Q 42 30 46 32" stroke="#00FFAB" strokeWidth="1.5" fill="none" strokeLinecap="round" className="animate-eyebrow"/>
                    <path d="M 54 32 Q 58 30 62 32" stroke="#00FFAB" strokeWidth="1.5" fill="none" strokeLinecap="round" className="animate-eyebrow"/>
                    
                    {/* Nose */}
                    <circle cx="50" cy="45" r="1.5" fill="#00FFAB" className="animate-bounce"/>
                    
                    {/* Mouth - Smiling */}
                    <path d="M 42 50 Q 50 56 58 50" stroke="#00FFAB" strokeWidth="2" fill="none" strokeLinecap="round" className="animate-talk"/>
                    
                    {/* Body */}
                    <ellipse cx="50" cy="75" rx="20" ry="22" fill="#30504F" className="animate-breathe"/>
                    
                    {/* Arms */}
                    <path d="M 32 70 Q 28 75 30 80" stroke="#30504F" strokeWidth="4" strokeLinecap="round" className="animate-wave"/>
                    <path d="M 68 70 Q 72 75 70 80" stroke="#30504F" strokeWidth="4" strokeLinecap="round" className="animate-wave" style={{animationDelay: '0.3s'}}/>
                    
                    {/* Hands */}
                    <circle cx="30" cy="80" r="3" fill="#00FFAB" className="animate-wave"/>
                    <circle cx="70" cy="80" r="3" fill="#00FFAB" className="animate-wave" style={{animationDelay: '0.3s'}}/>
                    
                    {/* Sparkles */}
                    <circle cx="20" cy="30" r="1.5" fill="#00FFAB" className="animate-sparkle"/>
                    <circle cx="80" cy="35" r="1" fill="#00FFAB" className="animate-sparkle" style={{animationDelay: '0.5s'}}/>
                    <circle cx="25" cy="50" r="1" fill="#00FFAB" className="animate-sparkle" style={{animationDelay: '1s'}}/>
                  </svg>
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Awra</h3>
                <p className="text-white/70 text-xs">AI Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-[#00FFAB] transition">
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
