import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGS = [
  { text: '$ git checkout -b feature/user-auth',  type: 'cmd' },
  { text: "✓ Switched to branch 'feature/user-auth'", type: 'success' },
  { text: '$ npm install jsonwebtoken bcryptjs',   type: 'cmd' },
  { text: '✓ 2 packages added in 1.8s',            type: 'success' },
  { text: '$ node server.js',                      type: 'cmd' },
  { text: '✓ Server running on http://localhost:5000', type: 'success' },
  { text: '✓ MongoDB connected',                   type: 'success' },
  { text: '$ POST /api/auth/register  →  201',     type: 'info' },
  { text: '$ POST /api/auth/login     →  200',     type: 'info' },
  { text: '$ npm run build',                       type: 'cmd' },
  { text: '✓ Build completed in 3.2s',             type: 'success' },
  { text: '$ vercel deploy --prod',                type: 'cmd' },
  { text: '✓ Deployed → https://app.vercel.app',  type: 'success' },
];

const TYPE_STYLES = {
  cmd:     'text-white',
  success: 'text-emerald-400',
  info:    'text-sky-400',
};

const VISIBLE = 6;   // max lines shown at once
const LINE_DELAY = 900; // ms per line
const PAUSE = 2200;  // pause at end before reset

const TerminalCard = () => {
  const [lines, setLines] = useState([]);
  const [done, setDone]   = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    let idx = 0;
    let timer;

    const addLine = () => {
      if (idx < LOGS.length) {
        setLines(prev => [...prev, LOGS[idx]]);
        idx++;
        timer = setTimeout(addLine, LINE_DELAY);
      } else {
        // pause then restart
        timer = setTimeout(() => {
          setDone(true);
          setTimeout(() => {
            setLines([]);
            setDone(false);
            idx = 0;
            timer = setTimeout(addLine, LINE_DELAY);
          }, 400);
        }, PAUSE);
      }
    };

    timer = setTimeout(addLine, 600);
    return () => clearTimeout(timer);
  }, []);

  // keep scroll pinned to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const visible = lines.slice(-VISIBLE);

  return (
    <div className="relative group perspective-1000">
      {/* glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />

      {/* window */}
      <div className="relative bg-[#0d1117] border border-white/10 rounded-xl shadow-2xl overflow-hidden font-mono text-sm">

        {/* title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-gray-500 flex-1 text-center">kushal@dev ~ /projects/portfolio-pro</span>
        </div>

        {/* log area */}
        <div className="p-5 space-y-1.5 min-h-[220px]">
          <AnimatePresence initial={false}>
            {visible.map((line, i) => (
              <motion.div
                key={lines.length - visible.length + i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className={`leading-relaxed ${TYPE_STYLES[line.type]}`}
              >
                {line.text}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* blinking cursor */}
          {!done && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-white/70 align-middle ml-0.5"
            />
          )}
          <div ref={bottomRef} />
        </div>

        {/* status bar */}
        <div className="flex items-center gap-3 px-4 py-2 bg-[#161b22] border-t border-white/5 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            MERN Stack
          </span>
          <span>·</span>
          <span>main</span>
          <span>·</span>
          <span>Node 20</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalCard;
