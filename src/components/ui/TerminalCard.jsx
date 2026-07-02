import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SEQUENCES = [
  [
    { text: '$ git clone https://github.com/kushalshah0/app', type: 'cmd' },
    { text: "✓ Cloning into 'app'...", type: 'success' },
    { text: '$ cd app && npm install', type: 'cmd' },
    { text: '✓ 342 packages installed in 4.1s', type: 'success' },
    { text: '$ npm run dev', type: 'cmd' },
    { text: '✓ Vite server running → http://localhost:3000', type: 'success' },
    { text: '✓ MongoDB connected successfully', type: 'success' },
  ],
  [
    { text: '$ git checkout -b feature/auth', type: 'cmd' },
    { text: "✓ Switched to new branch 'feature/auth'", type: 'success' },
    { text: '$ POST /api/auth/register  →  201 Created', type: 'info' },
    { text: '$ POST /api/auth/login     →  200 OK', type: 'info' },
    { text: '$ GET  /api/users/me       →  200 OK', type: 'info' },
    { text: '$ git commit -m "feat: add JWT auth"', type: 'cmd' },
    { text: '✓ [feature/auth d4e9a1] feat: add JWT auth', type: 'success' },
  ],
  [
    { text: '$ npm run build', type: 'cmd' },
    { text: '✓ Vite build completed in 3.2s', type: 'success' },
    { text: '✓ dist/index.js   248 KB │ gzip: 81 KB', type: 'muted' },
    { text: '$ vercel deploy --prod', type: 'cmd' },
    { text: '⠸ Building...', type: 'muted' },
    { text: '✓ Build completed in 12s', type: 'success' },
    { text: '✓ Deployed → https://app.vercel.app', type: 'success' },
  ],
];

const TYPE_STYLES = {
  cmd:     'text-white font-medium',
  success: 'text-emerald-400',
  info:    'text-sky-400',
  muted:   'text-gray-500',
};

const LINE_DELAY  = 800;
const PAUSE_END   = 2000;
const MAX_VISIBLE = 7;

const TerminalCard = () => {
  const [lines, setLines] = useState([]);
  const [seqIdx, setSeqIdx] = useState(0);
  const [resetting, setResetting] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    let timer;
    const sequence = SEQUENCES[seqIdx];
    let lineIdx = 0;

    const addLine = () => {
      if (lineIdx < sequence.length) {
        const line = sequence[lineIdx++];
        setLines(prev => [...prev.slice(-(MAX_VISIBLE - 1)), line]);
        timer = setTimeout(addLine, LINE_DELAY);
      } else {
        timer = setTimeout(() => {
          setResetting(true);
          setTimeout(() => {
            setLines([]);
            setResetting(false);
            setSeqIdx(i => (i + 1) % SEQUENCES.length);
          }, 500);
        }, PAUSE_END);
      }
    };

    timer = setTimeout(addLine, 400);
    return () => clearTimeout(timer);
  }, [seqIdx]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const isRunning = !resetting;

  return (
    <div className="relative group">
      {/* glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-2xl group-hover:scale-105 transition-transform duration-500" />

      {/* window */}
      <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 font-mono text-sm">

        {/* title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1e1e2e] border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-gray-500 select-none flex-1 text-center">
            kushal@dev:~/projects
          </span>
        </div>

        {/* terminal body */}
        <div className="bg-[#13131a] px-5 py-4 min-h-[230px] flex flex-col justify-end">
          <AnimatePresence initial={false}>
            {lines.map((line, i) => (
              <motion.div
                key={`${seqIdx}-${i}`}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: resetting ? 0 : 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`leading-7 ${TYPE_STYLES[line.type]}`}
              >
                {line.text}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* blinking cursor */}
          {isRunning && (
            <div className="flex items-center gap-1 mt-1">
              <span className="text-gray-500">$</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-white/70 ml-1"
              />
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* status bar */}
        <div className="flex items-center gap-4 px-4 py-2 bg-[#1e1e2e] border-t border-white/5 text-xs text-gray-500 select-none">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            MERN Stack
          </span>
          <span>·</span>
          <span>main</span>
          <span>·</span>
          <span>Node 20.x</span>
          <span className="ml-auto">UTF-8</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalCard;
