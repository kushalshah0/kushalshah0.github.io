import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { about, personalInfo } from '../../data/portfolioData';
import profileImg from '../../assets/profile.png';

import { useMobile } from '../../hooks/useMobile';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const isMobile = useMobile();

  const container = {
    hidden: { opacity: isMobile ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.08,
        delayChildren: isMobile ? 0 : 0.2
      }
    },
  };

  const item = {
    hidden: { opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0 : 0.5,
        ease: "easeOut"
      }
    },
  };

  return (
    <section id="about" className="section-container !pt-0 md:!pt-16 -mt-10 md:mt-0">
      <motion.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={container}>



        {/* Desktop Layout - Unified Glass Card */}
        <motion.div variants={item} className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden max-w-5xl mx-auto">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />

          {/* Image and Bio - Side by Side on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 mb-8">
            {/* Profile Image - Left Side (Desktop only) */}
            <div className="hidden lg:block">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative sticky top-8">
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio Text - Right Side */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-foreground">Who I am</h3>
                <div className="lg:hidden ml-auto w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 shadow-lg flex-shrink-0">
                  <img src={profileImg} alt={personalInfo.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                {about.description.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics - Full Width at Bottom */}
          <div className="pt-8 border-t border-white/5">
            <h4 className="text-sm font-medium text-primary mb-6 uppercase tracking-wider">Impact & Metrics</h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {about.stats.map((s) => (
                <div key={s.label} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">{s.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 mt-8">
            <p className="text-sm text-muted-foreground italic text-center">
              "Always learning, always shipping."
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
