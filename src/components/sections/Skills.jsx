import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { skills } from '../../data/portfolioData';
import { Cpu, Globe, Wrench } from 'lucide-react';
import { useMobile } from '../../hooks/useMobile';

const SkillCard = ({ title, items, icon: Icon, delay }) => {
  const isMobile = useMobile();
  const adjustedDelay = isMobile ? 0 : delay;

  // Technology logo mapping using DevIcons (theme-aware)
  const getTechIcon = (tech) => {
    const iconMap = {
      'React Js': 'react',
      'Next Js': 'nextjs',
      'HTML': 'html5',
      'CSS': 'css3',
      'JavaScript': 'javascript',
      'Bootstrap': 'bootstrap',
      'Material UI': 'materialui',
      'Flutter': 'flutter',
      'Node Js': 'nodejs',
      'Express Js': 'express',
      'Python': 'python',
      'MySQL': 'mysql',
      'MongoDB': 'mongodb',
      'Firebase': 'firebase',
      'Git': 'git',
      'GitHub': 'github',
      'Docker': 'docker',
      'Netlify': 'netlify',
      'Postman': 'postman',
      'Figma': 'figma',
      'Android Studio': 'androidstudio',
      'Java': 'java',
      'Kotlin': 'kotlin',
      'XML': 'xml'
    };
    return iconMap[tech] || null;
  };

  return (
    <motion.div
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: adjustedDelay, duration: isMobile ? 0 : 0.5 }}
      whileHover={{ y: -5 }}
      className="glass-card p-6 md:p-8 rounded-3xl h-full border border-white/5 hover:border-primary/30 transition-all duration-300 group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-display font-semibold text-foreground">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => {
          const iconSlug = getTechIcon(skill);
          return (
            <motion.span
              key={skill}
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: isMobile ? 0 : (adjustedDelay + i * 0.05) }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 rounded-xl text-sm font-medium bg-secondary/50 text-secondary-foreground border border-white/5 hover:border-primary/20 hover:bg-primary/5 transition-colors cursor-default flex items-center gap-2"
            >
              {iconSlug && (
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconSlug}/${iconSlug}-original.svg`}
                  alt={skill}
                  className={`w-5 h-5 ${['express', 'github'].includes(iconSlug) ? 'dark:invert' : ''}`}
                  onError={(e) => {
                    // Fallback to plain version if original doesn't exist
                    e.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconSlug}/${iconSlug}-plain.svg`;
                  }}
                />
              )}
              {skill}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-container relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
          Technical Arsenal
        </h2>
        <p className="text-lg text-muted-foreground">
          The tools and technologies I use to bring ideas to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        <div className="md:col-span-1 lg:col-span-1">
          <SkillCard
            title="Frontend"
            items={skills.frontend}
            icon={Globe}
            delay={0}
          />
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <SkillCard
            title="Backend"
            items={skills.backend}
            icon={Cpu}
            delay={0.1}
          />
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <SkillCard
            title="Tools & DevOps"
            items={skills.tools}
            icon={Wrench}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
