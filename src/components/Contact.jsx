import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MapPin, Phone, MessageSquare, Sparkles, Loader2 } from 'lucide-react';
import GithubIcon from './GithubIcon';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const email = 'nayakdevi8@gmail.com';
  const github = 'https://github.com/Ghostx003';
  const phone = '+91 7016135937';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Send form submission to FormSubmit API -> forwards directly to nayakdevi8@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/nayakdevi8@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}: ${formData.subject}`
        })
      });

      if (response.ok) {
        setSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        // Fallback to mailto link if network issue
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Email submission error:', error);
      // Fallback mailto trigger
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      setSubmitted(true);
    } finally {
      setIsSending(false);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 6000);
    }
  };

  return (
    <section id="contact" className="py-24 relative px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            Let's Build Together
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            Have a project, opportunity, or technical discussion in mind? Send a message directly to my Gmail!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Contact Card */}
            <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                <p className="text-xs text-slate-400 mt-1">Open for full-stack, DevOps, and cloud engineering opportunities.</p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-6">
                
                {/* Email Box */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-600/20 border border-teal-400/40 flex items-center justify-center text-teal-400 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-slate-400 font-mono block">MY GMAIL ADDRESS</span>
                    <a href={`mailto:${email}`} className="text-sm font-bold text-white hover:text-teal-300 transition-colors truncate block">
                      {email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* GitHub Box */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0">
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-slate-400 font-mono block">GITHUB PROFILE</span>
                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-cyan-300 transition-colors truncate block">
                      github.com/Ghostx003
                    </a>
                  </div>
                </div>

                {/* Phone & WhatsApp Box */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-slate-400 font-mono block">PHONE / WHATSAPP</span>
                    <a
                      href="https://wa.me/917016135937?text=Hi%20Devi,%20I%20saw%20your%20portfolio!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:text-emerald-300 transition-colors block"
                    >
                      {phone} <span className="text-[10px] text-emerald-400 font-mono font-normal ml-1">💬 Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Location Box */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-600/20 border border-teal-400/40 flex items-center justify-center text-teal-400 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-slate-400 font-mono block">LOCATION</span>
                    <span className="text-sm font-bold text-white block">
                      Bhubaneswar, Odisha, India
                    </span>
                  </div>
                </div>

              </div>

              {/* Quick Copy Notification Pill */}
              {copied && (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold text-center flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  Email address copied to clipboard!
                </div>
              )}

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Send Me a Message</h3>
                <p className="text-xs text-slate-400 mt-1">This form sends a message directly to my Gmail inbox (<span className="text-teal-400 font-mono">nayakdevi8@gmail.com</span>).</p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl glass-card border border-emerald-400/40 bg-emerald-950/20 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Dispatched to Gmail!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. Your message has been sent directly to <span className="text-emerald-300 font-semibold">nayakdevi8@gmail.com</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">YOUR NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-teal-400/60 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">YOUR EMAIL</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-teal-400/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">SUBJECT</label>
                    <input
                      type="text"
                      required
                      placeholder="Project Inquiry / Job Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-teal-400/60 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">MESSAGE</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-teal-400/60 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-white bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 rounded-xl shadow-xl shadow-teal-500/25 hover:scale-[1.02] transition-all disabled:opacity-50"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending to nayakdevi8@gmail.com...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Direct Message to Gmail
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
