import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { skills } from '../../data/portfolioData';
import { Cpu, Globe, Wrench } from 'lucide-react';

const SkillCard = ({ title, items, icon: Icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
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
        {items.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + i * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-secondary/50 text-secondary-foreground border border-white/5 hover:border-primary/20 hover:bg-primary/5 transition-colors cursor-default"
          >
            {skill}
          </motion.span>
        ))}
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
