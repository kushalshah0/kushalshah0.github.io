import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, Moon, Sun } from 'lucide-react';
import { navLinks, socialLinks, personalInfo } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`mx-auto transition-all duration-300 rounded-2xl border ${isScrolled
              ? 'bg-background/80 backdrop-blur-xl border-white/10 shadow-lg'
              : 'bg-transparent border-transparent'
              } px-6 py-3 flex items-center justify-between max-w-4xl`}
          >
            {/* Brand */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 hover:opacity-80 transition-opacity"
            >
              {personalInfo.name}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeSection === link.href.substring(1)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  {link.name}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3 pl-6 border-l border-border/50">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <div className="flex gap-2">
                {[
                  { icon: Github, href: socialLinks.github },
                  { icon: Linkedin, href: socialLinks.linkedin },
                  { icon: Mail, href: socialLinks.email }
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/90 backdrop-blur-2xl md:hidden flex flex-col pt-32 px-6 pb-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4, ease: "easeOut" }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-3xl sm:text-4xl font-display font-medium text-left hover:text-primary transition-colors flex items-center gap-4 group"
                >
                  <span className="text-sm font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity translate-y-1">0{i + 1}</span>
                  {link.name}
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-auto flex items-center justify-between border-t border-border/50 pt-8"
            >
              <div className="flex gap-4">
                {[
                  { icon: Github, href: socialLinks.github },
                  { icon: Linkedin, href: socialLinks.linkedin },
                  { icon: Mail, href: socialLinks.email }
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border/50 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>

              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 text-sm font-medium hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun size={18} /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon size={18} /> Dark Mode
                  </>
                )}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
