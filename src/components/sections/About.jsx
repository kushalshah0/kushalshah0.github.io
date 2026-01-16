import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { about, personalInfo } from '../../data/portfolioData';
import profileImg from '../../assets/profile.png';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section id="about" className="section-container">
      <motion.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={container}>
        <motion.div variants={item} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse into my world and what drives me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div variants={item} className="lg:col-span-2 glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
            {/* Subtle Gradient Blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transition-colors group-hover:bg-primary/10" />

            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover transform scale-125 hover:scale-[1.35] transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  {/* Removed Bioprofile title */}
                  <h3 className="text-2xl font-bold text-foreground">{personalInfo.role}</h3>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {about.description.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="glass-card p-8 rounded-3xl border border-white/5 flex flex-col justify-between h-full bg-secondary/20">
            <div>
              <div className="text-sm font-medium text-primary mb-6">Key Metrics</div>
              <div className="grid grid-cols-1 gap-4">
                {about.stats.map((s) => (
                  <div
                    key={s.label}
                    className="p-4 rounded-2xl bg-background/50 border border-white/5 hover:border-primary/30 transition-colors"
                  >
                    <div className="text-3xl font-display font-bold text-foreground">{s.value}</div>
                    <div className="text-sm text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-sm text-muted-foreground italic">
                "Always learning, always shipping."
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
