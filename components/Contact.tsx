"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // GANTI DENGAN ACCESS KEY DARI WEB3FORMS
    formData.append("access_key", "307a21b5-7fa1-4f1e-b0e8-22aef022c9b4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="flex min-h-screen flex-col items-center justify-center px-4 py-20 bg-transparent relative z-10">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-16 text-center text-3xl font-bold sm:text-4xl font-display text-ink">
            Let's <span className="text-spark">Collaborate!</span>
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-ink-muted">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
            Don't hesitate to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Bagian Formulir */}
          <div className="bg-surface/50 p-6 sm:p-7 rounded-2xl border border-line shadow-xl backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-ink mb-5">Send Message</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-ink-muted mb-1.5">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name"
                  className="w-full bg-void/80 border border-line rounded-lg px-4 py-2.5 text-sm text-ink placeholder-ink-muted/50 focus:outline-none focus:border-spark focus:ring-1 focus:ring-spark transition-all" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-muted mb-1.5">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="email@gmail.com"
                  className="w-full bg-void/80 border border-line rounded-lg px-4 py-2.5 text-sm text-ink placeholder-ink-muted/50 focus:outline-none focus:border-spark focus:ring-1 focus:ring-spark transition-all" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-muted mb-1.5">Message</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  placeholder="Write your message here..."
                  className="w-full bg-void/80 border border-line rounded-lg px-4 py-2.5 text-sm text-ink placeholder-ink-muted/50 focus:outline-none focus:border-spark focus:ring-1 focus:ring-spark transition-all resize-none" 
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full rounded-lg bg-flame px-6 py-3 text-sm font-bold text-void transition-all hover:bg-flame-dim hover:scale-[1.02] shadow-[0_0_15px_rgba(255,61,46,0.2)] hover:shadow-[0_0_20px_rgba(255,61,46,0.4)]"
              >
                Send Message
              </button>

              {result && (
                <p className="text-center text-sm mt-4 text-spark font-medium">
                  {result}
                </p>
              )}
            </form>
          </div>

          {/* Bagian Info Kontak Langsung */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-ink mb-5">Or reach out via</h3>
            <div className="space-y-4">
              <a 
                href="https://wa.me/6285272935122" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 bg-surface/50 p-5 rounded-2xl border border-line hover:bg-surface transition-all hover:scale-[1.02] hover:border-spark/50 group backdrop-blur-sm"
              >
                <div className="bg-[#25D366]/10 p-3 rounded-xl text-[#25D366] group-hover:scale-110 group-hover:bg-[#25D366]/20 transition-all border border-[#25D366]/20">
                  <SiWhatsapp size={24} />
                </div>
                <div>
                  <h4 className="text-ink font-medium text-base group-hover:text-spark transition-colors">WhatsApp</h4>
                  <p className="text-ink-muted text-xs sm:text-sm">Online & Fast Response</p>
                </div>
              </a>

              {/* Email Button */}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ianku93@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-surface/50 p-5 rounded-2xl border border-line hover:bg-surface transition-all hover:scale-[1.02] hover:border-spark/50 group backdrop-blur-sm"
              >
                <div className="bg-spark/10 p-3 rounded-xl text-spark group-hover:scale-110 group-hover:bg-spark/20 transition-all border border-spark/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-ink font-medium text-base group-hover:text-spark transition-colors">Email</h4>
                  <p className="text-ink-muted text-xs sm:text-sm">ianku93@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
