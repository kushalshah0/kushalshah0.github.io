import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ y: -10 }}
      className="glass-card rounded-2xl overflow-hidden group border border-white/5 hover:border-primary/50 transition-colors will-change-transform"
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-secondary/20">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-purple-500/20">
            <div className="text-6xl font-bold text-primary/30">
              {project.title.substring(0, 2)}
            </div>
          </div>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg">
            <Star size={12} fill="currentColor" />
            Featured
          </div>
        )}

        {/* Overlay on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 bg-background/80 backdrop-blur-sm">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
              aria-label="View GitHub Repository"
            >
              <Github size={20} />
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
              aria-label="View Live Demo"
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-display">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-secondary/50 text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
