import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Send, Copy, Check, Mail, Github, Linkedin, Twitter, MapPin, Clock, Globe, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFX } from '../utils/sound';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full Stack Engineering Inquiry',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Kashmir / IST time zone
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    soundFX.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFX.playClick();
    setIsSubmitting(true);

    const whatsappNumber = '918899802079';
    const messageText = `*New Portfolio Inquiry*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Subject:* ${encodeURIComponent(formData.subject)}%0A%0A*Message:*%0A${encodeURIComponent(formData.message)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      soundFX.playSuccess();

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#25D366', '#D8C3A5', '#F5F5F5'],
      });

      // Open WhatsApp chat directly
      window.open(`https://wa.me/${whatsappNumber}?text=${messageText}`, '_blank');
    }, 600);
  };

  const handleSendEmail = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#D8C3A5]">
            <Sparkles className="w-3.5 h-3.5 text-[#D8C3A5]" />
            <span>06 // Initiate Conversation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#F5F5F5]">
            Let's build something <br />
            <span className="text-[#D8C3A5]">exceptional together.</span>
          </h2>
          <p className="text-sm text-[#B5B5B5] max-w-lg font-light">
            Open for full-time senior engineering opportunities, design system architecture, and high-impact software contracts.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Direct Channels & Local Time */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Copy Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6 bg-[#141414]">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#A3B18A] tracking-wider">Direct Inbox</span>
                <h3 className="text-xl font-bold font-heading text-[#F5F5F5]">Send a Direct Email</h3>
                <p className="text-xs text-[#B5B5B5] leading-relaxed">
                  Fastest way to get in touch regarding project inquiries or technical roles.
                </p>
              </div>

              {/* Email & Phone Copy Pill */}
              <div className="space-y-2">
                <div className="p-3.5 rounded-xl bg-[#0D0D0D] border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-[#D8C3A5] shrink-0" />
                    <span className="text-xs font-mono text-[#F5F5F5] truncate">{PERSONAL_INFO.email}</span>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg bg-[#D8C3A5] text-[#0D0D0D] font-bold text-xs hover:bg-[#ebd5b7] transition-all flex items-center gap-1 shrink-0"
                    data-cursor="button"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0D0D0D] border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <MessageSquare className="w-4 h-4 text-[#A3B18A] shrink-0" />
                    <span className="text-xs font-mono text-[#F5F5F5] truncate">{PERSONAL_INFO.phone}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#D8C3A5]">Phone / WhatsApp</span>
                </div>
              </div>

              {/* Location & Relocation Info */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-xs text-[#F5F5F5] font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#D8C3A5]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <p className="text-[11px] text-[#A3B18A] font-mono">Preference: Open to Relocate to Bangalore</p>
              </div>

              {/* Local Time Indicator */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-[#B5B5B5]">
                  <Clock className="w-3.5 h-3.5 text-[#A3B18A]" />
                  <span>Kashmir, IN (IST):</span>
                </div>
                <span className="text-[#D8C3A5] font-bold">{currentTime || '12:00 PM'}</span>
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4 bg-[#141414]">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#B5B5B5]">Social Networks</h4>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFX.playHover()}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#D8C3A5]/50 text-[#F5F5F5] hover:text-[#D8C3A5] transition-all flex flex-col items-center gap-2 group"
                  data-cursor="button"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono">GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFX.playHover()}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#D8C3A5]/50 text-[#F5F5F5] hover:text-[#D8C3A5] transition-all flex flex-col items-center gap-2 group"
                  data-cursor="button"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono">LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column - Interactive Form */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6 bg-[#141414]">
            <div className="space-y-1">
              <h3 className="text-xl font-bold font-heading text-[#F5F5F5]">Send a Message</h3>
              <p className="text-xs text-[#B5B5B5]">Fill out the form below to initiate an engineering inquiry.</p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-8 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] text-[#0D0D0D] flex items-center justify-center mx-auto font-bold text-xl">
                  ✓
                </div>
                <h4 className="text-lg font-bold font-heading text-[#F5F5F5]">Redirecting to WhatsApp!</h4>
                <p className="text-xs text-[#B5B5B5] max-w-sm mx-auto">
                  Opening WhatsApp chat with Hyder (+91 8899802079). Your inquiry details have been pre-filled.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono text-[#D8C3A5]"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#B5B5B5]">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Lin"
                      className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-xs text-[#F5F5F5] placeholder:text-[#B5B5B5]/30 focus:outline-none focus:border-[#D8C3A5]/50 transition-all font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#B5B5B5]">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-xs text-[#F5F5F5] placeholder:text-[#B5B5B5]/30 focus:outline-none focus:border-[#D8C3A5]/50 transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#B5B5B5]">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-xs text-[#F5F5F5] focus:outline-none focus:border-[#D8C3A5]/50 transition-all font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#B5B5B5]">Project Details / Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product scope, stack requirements, or team goals..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-xs text-[#F5F5F5] placeholder:text-[#B5B5B5]/30 focus:outline-none focus:border-[#D8C3A5]/50 transition-all font-mono leading-relaxed resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-3.5 px-4 rounded-xl bg-[#25D366] text-[#0D0D0D] font-bold text-xs hover:bg-[#22bf5b] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                    data-cursor="button"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="py-3.5 px-4 rounded-xl bg-[#D8C3A5] text-[#0D0D0D] font-bold text-xs hover:bg-[#ebd5b7] transition-all flex items-center justify-center gap-2 shadow-lg"
                    data-cursor="button"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email</span>
                  </button>
                </div>

                <p className="text-[11px] font-mono text-center text-[#B5B5B5]/60 pt-1">
                  ⚡ Messages are delivered directly to Hyder's WhatsApp (+91 8899802079) & Email.
                </p>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
