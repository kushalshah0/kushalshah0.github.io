import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, Code2, Package, Rocket, CheckCircle2 } from 'lucide-react';

/* ─── Stages ─────────────────────────────────────────────── */
const STAGES = [
  { label: 'Branch', Icon: GitBranch },
  { label: 'Code',   Icon: Code2     },
  { label: 'Build',  Icon: Package   },
  { label: 'Deploy', Icon: Rocket    },
];

/* ─── Single sequence, stage-grouped ─────────────────────── */
const SEQUENCE = [
  // Stage 0 — Branch
  { stage: 0, text: '$ git fetch origin',                                       type: 'cmd'     },
  { stage: 0, text: '$ git checkout -b feature/user-authentication',            type: 'cmd'     },
  { stage: 0, text: "↳ Branch set up to track 'origin/main'",                  type: 'muted'   },
  // Stage 1 — Code
  { stage: 1, text: '$ npm i bcryptjs jsonwebtoken express-validator',          type: 'cmd'     },
  { stage: 1, text: '✓ added 8 packages, audited 1247 packages in 3.2s',       type: 'success' },
  { stage: 1, text: '$ nodemon src/server.js',                                  type: 'cmd'     },
  { stage: 1, text: '✓ [nodemon] starting node src/server.js',                 type: 'muted'   },
  { stage: 1, text: '✓ Server listening on PORT 5000',                         type: 'success' },
  { stage: 1, text: '✓ MongoDB Atlas → cluster0 connected',                    type: 'success' },
  { stage: 1, text: '→ POST /api/v1/auth/register  201  48ms',                 type: 'info'    },
  { stage: 1, text: '→ POST /api/v1/auth/login     200  23ms',                 type: 'info'    },
  { stage: 1, text: '→ GET  /api/v1/users/profile  200  12ms',                 type: 'info'    },
  // Stage 2 — Build
  { stage: 2, text: '$ npm run build',                                          type: 'cmd'     },
  { stage: 2, text: '⠸ vite v5.4.8 building for production...',                type: 'muted'   },
  { stage: 2, text: '✓ 1,847 modules transformed',                             type: 'success' },
  { stage: 2, text: '✓ dist/assets/index.js  287.42 kB │ gzip: 89.31 kB',     type: 'success' },
  { stage: 2, text: '✓ built in 4.18s',                                        type: 'success' },
  // Stage 3 — Deploy
  { stage: 3, text: '$ vercel --prod',                                          type: 'cmd'     },
  { stage: 3, text: '⠸ Deploying to production...',                             type: 'muted'   },
  { stage: 3, text: '✓ Production alias → http://prod-8qc2cebfk.vercel.app/',  type: 'success' },
  { stage: 3, text: '✓ Production deployment complete',                        type: 'success' },
];

const MAX_VISIBLE = 8;
const LINE_MS     = 720;
const PAUSE_MS    = 2800;

const TYPE_CLS = {
  cmd:     'text-foreground font-semibold',
  success: 'text-emerald-400',
  info:    'text-primary',
  muted:   'text-muted-foreground',
};

/* ─── Pipeline bar ──────────────────────────────────────────── */
const PipelineBar = ({ currentStage, completedStages, resetting }) => (
  <div className="px-6 py-4 border-t border-white/5 bg-card/30">
    <div className="flex items-center">
      {STAGES.map(({ label, Icon }, i) => {
        const done    = completedStages.includes(i);
        const current = !resetting && currentStage === i;
        return (
          <>
            {/* stage node — fixed width, centered */}
            <div key={i} className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <div className="relative">
                {current && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/30"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                  />
                )}
                <motion.div
                  animate={current ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                  transition={current ? { repeat: Infinity, duration: 1.4 } : { duration: 0.4 }}
                  className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-500 ${
                    done    ? 'bg-emerald-500/20 border-emerald-500/70' :
                    current ? 'bg-primary/20 border-primary shadow-[0_0_14px_2px] shadow-primary/50' :
                              'bg-white/5 border-white/10'
                  }`}
                >
                  {done
                    ? <CheckCircle2 size={13} className="text-emerald-400" />
                    : <Icon size={13} className={current ? 'text-primary' : 'text-muted-foreground/30'} />
                  }
                </motion.div>
              </div>
              <span className={`text-[9px] text-center whitespace-nowrap font-medium transition-colors duration-300 ${
                done ? 'text-emerald-400' : current ? 'text-primary' : 'text-muted-foreground/30'
              }`}>{label}</span>
            </div>

            {/* connector gets flex-1, sits at icon center via mb offset */}
            {i < STAGES.length - 1 && (
              <div key={`c-${i}`} className="flex-1 h-[1.5px] mx-2 mb-[18px] relative bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: completedStages.includes(i) && !resetting ? '100%' : '0%' }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #34d399, #6ee7b7)', boxShadow: '0 0 6px #34d399' }}
                />
              </div>
            )}
          </>
        );
      })}
    </div>
  </div>
);

/* ─── Main ──────────────────────────────────────────────────── */
const DevTerminal = () => {
  const [lines,           setLines]           = useState([]);
  const [currentStage,    setCurrentStage]    = useState(0);
  const [completedStages, setCompletedStages] = useState([]);
  const [resetting,       setResetting]       = useState(false);
  const lineIdRef = useState(0);

  useEffect(() => {
    let idx = 0, timer;

    const addLine = () => {
      if (idx < SEQUENCE.length) {
        const line     = SEQUENCE[idx];
        const prevLine = SEQUENCE[idx - 1];

        if (prevLine && line.stage !== prevLine.stage) {
          setCompletedStages(prev => [...prev, prevLine.stage]);
        }

        setCurrentStage(line.stage);
        const id = lineIdRef[0]++;
        setLines(prev => [...prev.slice(-(MAX_VISIBLE - 1)), { ...line, id }]);
        idx++;
        timer = setTimeout(addLine, LINE_MS);
      } else {
        setCompletedStages(prev =>
          prev.includes(STAGES.length - 1) ? prev : [...prev, STAGES.length - 1]
        );
        timer = setTimeout(() => {
          setResetting(true);
          setTimeout(() => {
            setLines([]);
            setCurrentStage(0);
            setCompletedStages([]);
            setResetting(false);
            idx = 0;
            timer = setTimeout(addLine, LINE_MS);
          }, 600);
        }, PAUSE_MS);
      }
    };

    timer = setTimeout(addLine, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative group">
      <div className="absolute -inset-3 bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent rounded-2xl blur-2xl -z-10 group-hover:from-primary/20 transition-all duration-700" />

      <div className="glass-card rounded-xl overflow-hidden border border-white/10 shadow-2xl font-mono text-sm">

        {/* title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-card/80 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[11px] text-muted-foreground flex-1 text-center select-none tracking-wide">
            kushal@dev  ~/projects
          </span>
          <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            live
          </span>
        </div>

        {/* log body */}
        <div className="bg-background/60 backdrop-blur-sm px-5 pt-5 pb-4 h-[260px] flex flex-col justify-end overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            {lines.map((line) => (
              <motion.p
                key={line.id}
                layout
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: resetting ? 0 : 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{
                  opacity:  { duration: 0.18, ease: 'easeInOut' },
                  y:        { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
                  layout:   { type: 'spring', stiffness: 220, damping: 28 },
                }}
                className={`leading-7 ${TYPE_CLS[line.type]}`}
              >
                {line.text}
              </motion.p>
            ))}
          </AnimatePresence>

          {!resetting && (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-primary">$</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.85 }}
                className="inline-block w-[7px] h-[15px] bg-primary/80 rounded-[1px]"
              />
            </div>
          )}
        </div>

        <PipelineBar
          currentStage={currentStage}
          completedStages={completedStages}
          resetting={resetting}
        />
      </div>
    </div>
  );
};

export default DevTerminal;
