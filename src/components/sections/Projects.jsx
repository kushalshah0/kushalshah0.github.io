import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { projects } from '../../data/portfolioData';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [filter, setFilter] = useState('featured');

  const filters = [
    { id: 'featured', label: 'Featured' },
    { id: 'all', label: 'All' },
  ];

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((p) => p.featured);
  }, [filter]);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section id="projects" className="section-container relative">
      {/* Decor */}
      <div className="absolute right-0 top-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <motion.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={container}>
        <motion.div variants={item} className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects that showcase my passion for building.
          </p>
        </motion.div>

        <motion.div variants={item} className="flex items-center justify-center mb-10">
          <div className="inline-flex items-center gap-1 p-1 rounded-2xl border border-white/5 bg-secondary/30 backdrop-blur-sm">
            {filters.map((f) => {
              const isActive = filter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`relative px-6 py-2 rounded-xl text-sm font-medium transition-colors ${isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="projects-pill"
                      className="absolute inset-0 rounded-xl bg-primary shadow-lg shadow-primary/25"
                      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{f.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
