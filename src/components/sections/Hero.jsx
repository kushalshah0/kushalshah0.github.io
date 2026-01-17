import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Code2, Cpu } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { useMobile } from '../../hooks/useMobile';

const TypewriterLoop = ({ texts, typingSpeed = 50, deletingSpeed = 30, pauseDuration = 2000 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(typingSpeed);

  useEffect(() => {
    let ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, delta, isDeleting, loopNum, texts, typingSpeed, deletingSpeed, pauseDuration]); // Added dependencies for tick function stability

  const tick = () => {
    let i = loopNum % texts.length;
    let fullText = texts[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(deletingSpeed);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(pauseDuration);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(typingSpeed);
    } else if (!isDeleting && updatedText !== fullText) {
      setDelta(Math.random() * 30 + typingSpeed);
    }
  };

  return (
    <span>
      {text}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
};

const CodeCard = () => (
  <div className="relative group perspective-1000">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
    <div className="relative bg-white/80 dark:bg-card/50 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-xl p-6 font-mono text-sm shadow-2xl transition-all duration-500 transform group-hover:rotate-y-2 group-hover:rotate-x-2">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="flex-1 text-center text-xs text-gray-500 dark:text-muted-foreground">developer.config.js</div>
      </div>
      <div className="space-y-2 text-gray-500 dark:text-muted-foreground">
        <div className="flex">
          <span className="text-purple-600 dark:text-purple-400 mr-2">const</span>
          <span className="text-blue-600 dark:text-blue-400">developer</span>
          <span className="text-gray-900 dark:text-white mx-2">=</span>
          <span className="text-amber-600 dark:text-yellow-400">{'{'}</span>
        </div>
        <div className="pl-4">
          <span className="text-gray-900 dark:text-white">name:</span>
          <span className="text-green-600 dark:text-green-400 ml-2">'{personalInfo.name}'</span>,
        </div>
        <div className="pl-4">
          <span className="text-gray-900 dark:text-white">role:</span>
          <span className="text-green-600 dark:text-green-400 ml-2">'{personalInfo.role}'</span>,
        </div>
        <div className="pl-4">
          <span className="text-gray-900 dark:text-white">skills:</span>
          <span className="text-amber-600 dark:text-yellow-400 ml-2">['React', 'Node', 'Next.js']</span>,
        </div>
        <div className="pl-4">
          <span className="text-gray-900 dark:text-white">hardWorker:</span>
          <span className="text-orange-600 dark:text-orange-400 ml-2">true</span>,
        </div>
        <div className="pl-4">
          <span className="text-gray-900 dark:text-white">problemSolver:</span>
          <span className="text-orange-600 dark:text-orange-400 ml-2">true</span>,
        </div>
        <div className="pl-4">
          <span className="text-gray-900 dark:text-white">hireable:</span>
          <span className="text-blue-600 dark:text-blue-400 ml-2">function() {'{'}</span>
        </div>
        <div className="pl-8">
          <span className="text-purple-600 dark:text-purple-400">return</span>
          <span className="text-orange-600 dark:text-orange-400 ml-2">true</span>;
        </div>
        <div className="pl-4 text-blue-600 dark:text-blue-400">{'}'}</div>
        <div className="text-amber-600 dark:text-yellow-400">{'}'}</div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const isMobile = useMobile();
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-[auto] md:min-h-screen flex items-start md:items-center justify-center pt-32 pb-20 md:pt-32 md:pb-0 overflow-hidden">

      {/* Abstract Background Shapes */}
      {/* Abstract Background Shapes - Hidden on mobile for performance */}
      <div className="hidden md:block absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
      <div className="hidden md:block absolute bottom-20 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[80px] -z-10 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="section-container !py-0 relative z-10 w-full pl-4 sm:pl-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </div>

            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-110 mb-4">
                Hi, I'm <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-primary animate-gradient bg-300%">
                  {personalInfo.name}
                </span>
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light min-h-[40px] mb-2">
                I build <TypewriterLoop
                  texts={[
                    "scalable full-stack apps.",
                    "robust backends.",
                    "interactive UIs."
                  ]}
                />
              </div>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                {personalInfo.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('#projects')}
                className="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white font-medium flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all text-sm md:text-base"
              >
                View Work <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('#contact')}
                className="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-background/50 backdrop-blur-sm border border-white/10 text-foreground font-medium hover:bg-white/5 transition-all text-sm md:text-base"
              >
                Contact Me
              </motion.button>
            </div>


          </motion.div>

          {/* Right Side Visual */}
          <motion.div
            initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: isMobile ? 0 : 0.8, delay: isMobile ? 0 : 0.2 }}
            className="hidden lg:block relative"
          >
            <CodeCard />

            {/* Floating Icons - Hidden on mobile/tablet, shown on desktop */}
            <div className="hidden lg:block">

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-10 -right-10 p-4 bg-background/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl"
              >
                <Code2 size={32} className="text-blue-400" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-10 -left-10 p-4 bg-background/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl"
              >
                <Terminal size={32} className="text-purple-400" />
              </motion.div>

              <motion.div
                animate={{ x: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -right-20 p-4 bg-background/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl"
              >
                <Cpu size={32} className="text-green-400" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section >
  );
};

export default Hero;
