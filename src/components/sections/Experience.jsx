import { motion } from 'framer-motion';
import { experience } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useMobile } from '../../hooks/useMobile';

const Experience = () => {
  const isMobile = useMobile();

  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
          Experience
        </h2>
        <p className="text-lg text-muted-foreground">
          My professional journey and career highlights.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent transform -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: isMobile ? 0 : index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Timeline Dot (Desktop) */}
              <div className="absolute left-1/2 top-0 w-4 h-4 rounded-full border-2 border-primary bg-background transform -translate-x-1/2 hidden md:block z-10">
                <div className="absolute inset-0 rounded-full animate-ping bg-primary/20" />
              </div>

              {/* Content Card */}
              <div className="flex-1">
                <div className="glass-card p-6 md:p-8 hover:border-primary/30 transition-colors group">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Briefcase size={20} />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-white/5">
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                  <div className="text-primary font-medium mb-4">{item.company}</div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {item.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {item.location}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty Space for Grid Alignment */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
