import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { useMobile } from '../../hooks/useMobile';

const Contact = () => {
  const isMobile = useMobile();
  const [ref, isInView] = useInView({ threshold: 0.15 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus({ type: 'success', message: "Message sent successfully!" });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus({ type: 'error', message: 'Failed to send message.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <motion.div ref={ref}
        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        animate={isMobile ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : {})}
        transition={{ duration: isMobile ? 0 : 0.6 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left: Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Let's Work <br />
                <span className="text-primary">Together</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                I'm currently available for freelance projects and open to full-time opportunities.
                If you have an idea or just want to chat, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:border-primary/50 transition-all group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email Me</div>
                  <div className="font-medium text-foreground">{personalInfo.email}</div>
                </div>
                <ArrowRight className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" size={20} />
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
                <div className="p-3 rounded-full bg-secondary text-secondary-foreground">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium text-foreground">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card p-8 rounded-3xl border border-white/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground ml-1">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-secondary/50 border border-white/5 focus:border-primary/50 focus:bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50 text-foreground"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-secondary/50 border border-white/5 focus:border-primary/50 focus:bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50 text-foreground"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground ml-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-secondary/50 border border-white/5 focus:border-primary/50 focus:bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-muted-foreground/50 text-foreground"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {status.message && (
                <div className={`flex items-center gap-2 p-3 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                  }`}>
                  {status.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                  {status.message}
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-lg hover:shadow-primary/25 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send size={20} />}
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
