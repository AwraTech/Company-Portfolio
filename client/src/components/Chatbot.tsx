'use client';

import { useState, useRef, useEffect } from 'react';
import { IoClose, IoSend } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const pathname = usePathname();
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! 👋 I'm Awra AI. Ask me anything about Awra Tech — our services, projects, team, or how to get started!" },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  if (pathname === '/contact' || pathname === '/news') return null;

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const userMsg: Message = { role: 'user', content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();
      setMessages([...updated, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages([...updated, { role: 'assistant', content: 'Something went wrong. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 sm:right-6 z-[60] group transition-all duration-300 cursor-pointer"
      >
        <div className="relative">
          <div className={`w-14 h-14 rounded-full shadow-2xl border-2 border-[#00FFAB] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#00FFAB]/40 flex items-center justify-center ${isDark ? 'bg-[#0f172a]' : 'bg-[#30504F]'}`}>
            {isOpen ? (
              <IoClose size={26} className="text-white" />
            ) : (
              <div className="relative animate-bounce" style={{ animationDuration: '2s' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" className="text-white">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.35L2 22l5.65-1.05C9.96 21.64 11.46 22 13 22h7c1.1 0 2-.9 2-2V12c0-5.52-4.48-10-10-10z" />
                  <circle cx="8" cy="12" r="1.8" fill="#00FFAB" />
                  <circle cx="12" cy="12" r="1.8" fill="#00FFAB" />
                  <circle cx="16" cy="12" r="1.8" fill="#00FFAB" />
                </svg>
                <span className={`absolute -top-1 -right-1 w-3 h-3 bg-[#00FFAB] rounded-full animate-ping border-2 ${isDark ? 'border-[#0f172a]' : 'border-[#30504F]'}`} />
              </div>
            )}
          </div>
          {!isOpen && (
            <div className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-[#00FFAB] pointer-events-none ${isDark ? 'bg-[#0f172a] text-[#00FFAB]' : 'bg-[#30504F] text-[#00FFAB]'}`}>
              💬 Chat with Awra AI
            </div>
          )}
        </div>
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div
          className={`fixed z-[60] flex flex-col border shadow-2xl overflow-hidden rounded-2xl
            ${isDark ? 'bg-[#0d1f3c] border-white/10' : 'bg-[#1c3836] border-[#00FFAB]/20'}
            top-4 left-3 right-3 bottom-[82px]
            sm:top-auto sm:left-auto sm:right-6 sm:bottom-[88px] sm:w-[360px] sm:h-[500px]
          `}
        >
          {/* Header */}
          <div className="bg-[#2a4a48] px-4 py-3 flex items-center justify-between border-b border-[#00FFAB]/20 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#00FFAB]/20 border-2 border-[#00FFAB] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" fill="#00FFAB" />
                  <rect x="8" y="14" width="8" height="8" rx="4" fill="#00FFAB" />
                  <circle cx="10" cy="7" r="1.2" fill="#2a4a48" />
                  <circle cx="14" cy="7" r="1.2" fill="#2a4a48" />
                </svg>
              </div>
              <div>
                <p className="text-[#00FFAB] font-bold text-sm leading-none">Awra AI</p>
                <p className="text-[#00FFAB]/60 text-xs mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Online · Virtual Assistant
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#00FFAB] hover:text-white p-1.5 rounded-full hover:bg-[#00FFAB]/10 transition-colors">
              <IoClose size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
            {messages.map((msg, i) => (
              <div key={i} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#00FFAB]/20 border border-[#00FFAB]/40 flex items-center justify-center shrink-0">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" fill="#00FFAB" />
                      <rect x="8" y="14" width="8" height="8" rx="4" fill="#00FFAB" />
                    </svg>
                  </div>
                )}
                <div className={`max-w-[78%] px-3.5 py-2.5 text-sm leading-relaxed rounded-2xl ${
                  msg.role === 'user'
                    ? 'bg-[#00FFAB] text-[#0f172a] font-medium rounded-br-none'
                    : 'bg-white/10 text-white rounded-bl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-end gap-2 justify-start">
                <div className="w-6 h-6 rounded-full bg-[#00FFAB]/20 border border-[#00FFAB]/40 flex items-center justify-center shrink-0">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" fill="#00FFAB" />
                    <rect x="8" y="14" width="8" height="8" rx="4" fill="#00FFAB" />
                  </svg>
                </div>
                <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map(i => (
                      <span key={i} className="w-2 h-2 rounded-full bg-[#00FFAB] animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className={`px-3 py-3 border-t shrink-0 ${isDark ? 'border-white/10' : 'border-[#00FFAB]/15'}`}>
            <div className="flex items-center gap-2 rounded-xl px-3 py-2.5 bg-white/5 border border-white/10">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Ask about Awra Tech..."
                className="flex-1 bg-transparent text-white placeholder-white/30 text-sm outline-none"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="w-8 h-8 rounded-lg bg-[#00FFAB] flex items-center justify-center disabled:opacity-30 hover:bg-[#00e69a] transition-colors shrink-0 cursor-pointer"
              >
                <IoSend size={14} className="text-[#0f172a]" />
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
