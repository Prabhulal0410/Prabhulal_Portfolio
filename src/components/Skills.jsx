// "use client";
// import { useState, useTransition, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import SkillCard from "./skills/SkillCard";
// import { MySkills } from "@/constants/MySkills";

// // Skills ----> workflow
// //  └── SkillCard (per category)
// //       └── SkillCardBlock (per individual skill)


// const Skills = (props) => {
//   const refHeading = useRef(null);
//   const refContent = useRef(null);
//   const inViewHeading = useInView(refHeading);
//   const inViewContent = useInView(refContent, { once: true });
//   const variants1 = {
//     initial: { opacity: 0, y: 50 },
//     animate: { opacity: 1, y: 0 },
//   };

//   return (
//     <section className="sm:py-[80px] sm:px-6" id="skills">
//       <motion.div
//         ref={refHeading}
//         variants={variants1}
//         initial="initial"
//         animate={inViewHeading ? "animate" : "initial"}
//         transition={{ duration: 0.6 }}
//         className="flex items-center gap-4"
//       >
//         <h3 className="text-textWhite text-3xl font-[800] sm:text-5xl">
//           Skills
//         </h3>
//         <div className="bg-textWhite mt-2 h-[4px] min-w-0 flex-grow"></div>
//       </motion.div>
//       <div className="flex flex-col items-center justify-between gap-6 py-6 mt-20">
//         {MySkills?.map((skill, i) => (
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 10,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 1,
//             }}
//             transition={{
//               duration: 0.5,
//             }}
//             className="w-full"
//             key={i}
//           >
//             <SkillCard title={skill.title} skills={skill.skills} />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;


// ┌────────────────────────┐
// │ MySkills (Data File)   │
// │ {                      │
// │  name: "React",        │
// │  icon: "ReactOriginal" │
// │ }                      │
// └─────────────┬──────────┘
//               ↓
// ┌────────────────────────┐
// │ icon (string)          │
// │ "ReactOriginal"        │
// │ (instruction only)     │
// └─────────────┬──────────┘
//               ↓
// ┌────────────────────────┐
// │ switch–case mapping    │
// │ "ReactOriginal" →      │
// │ ReactOriginal          │
// └─────────────┬──────────┘
//               ↓
// ┌────────────────────────┐
// │ Devicon React Component│
// │ function ReactOriginal │
// │ returns SVG JSX        │
// └─────────────┬──────────┘
//               ↓
// ┌────────────────────────┐
// │ React Rendering Engine │
// │ Converts JSX → DOM     │
// └─────────────┬──────────┘
//               ↓
// ┌────────────────────────┐
// │ Browser                │
// │ Displays SVG Icon      │
// └────────────────────────┘


"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView, useMotionValue } from "framer-motion";

import {
  JavascriptOriginal,
  TypescriptOriginal,
  PythonOriginal,
  COriginal,
  CplusplusOriginal,
  CsharpOriginal,
  DartOriginal,
  ReactOriginal,
  NextjsOriginal,
  NodejsOriginal,
  ExpressOriginal,
  Html5Original,
  Css3Original,
  TailwindcssOriginal,
  BootstrapOriginal,
  ReduxOriginal,
  GraphqlPlain,
  PrismaOriginal,
  MongodbOriginal,
  MysqlOriginal,
  FirebaseOriginal,
  JsonOriginal,
  GitOriginal,
  PostmanOriginal,
  VercelOriginal,
  NetlifyOriginal,
  JiraOriginal,
  SlackPlain,
} from "devicons-react";
import { FaGithub } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";

const hex2rgba = (hex, alpha) => {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
};

const SKILLS = [
  { n: "JavaScript", r: 46, color: "#f7df1e", Icon: JavascriptOriginal  },
  { n: "React",       r: 48, color: "#61dafb", Icon: ReactOriginal       },
  { n: "Next.js",     r: 46, color: "#aaaaaa", Icon: NextjsOriginal      },
  { n: "HTML5",       r: 35, color: "#e44d26", Icon: Html5Original       },
  { n: "CSS3",        r: 33, color: "#264de4", Icon: Css3Original        },
  { n: "Tailwind",    r: 43, color: "#38bdf8", Icon: TailwindcssOriginal },
  { n: "Bootstrap",   r: 35, color: "#7952b3", Icon: BootstrapOriginal   },
  { n: "Shadcn UI",   r: 33, color: "#cccccc", Icon: SiShadcnui         },
  { n: "Redux",       r: 35, color: "#764abc", Icon: ReduxOriginal       },
  { n: "Firebase",    r: 37, color: "#ffca28", Icon: FirebaseOriginal    },
  { n: "JSON",        r: 29, color: "#888888", Icon: JsonOriginal        },
  { n: "Git",         r: 35, color: "#f05032", Icon: GitOriginal         },
  { n: "GitHub",      r: 37, color: "#aaaaaa", Icon: FaGithub            },
  { n: "Postman",     r: 33, color: "#ff6c37", Icon: PostmanOriginal     },
  { n: "Vercel",      r: 31, color: "#cccccc", Icon: VercelOriginal      },
  { n: "Netlify",     r: 29, color: "#00c7b7", Icon: NetlifyOriginal     },
];

const restStyle = (color) => ({
  border:     `1.5px solid ${hex2rgba(color, 0.5)}`,
  background: hex2rgba(color, 0.08),
  boxShadow:  `0 0 12px ${hex2rgba(color, 0.3)}, inset 0 0 4px ${hex2rgba(color, 0.18)}`,
  labelColor: "#9ca3af",
});

const hoverStyle = (color, t) => ({
  border:     `1.5px solid ${hex2rgba(color, 0.5 + t * 0.5)}`,
  background: hex2rgba(color, 0.06 + t * 0.10),
  boxShadow:  `0 0 ${10 + t * 28}px ${hex2rgba(color, 0.25 + t * 0.45)}, inset 0 0 ${2 + t * 8}px ${hex2rgba(color, 0.15 + t * 0.1)}`,
  labelColor: t > 0.35 ? "#FAF7F2" : "#E0E2EC",
});

const getScale = (w) => {
  if (w < 360) return 0.72;
  if (w < 480) return 0.82;
  if (w < 640) return 0.88;
  if (w < 900) return 0.88;
  return 1;
};

const FRICTION  = 0.991;
const BOUNCE    = 0.70;
const REPEL_R   = 115;
const REPEL_STR = 5.8;
const MAX_SPEED = 13;
const GRAVITY   = 0.07;

const Ball = ({ skill, scaledR, stateRef, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [style, setStyle] = useState(() => restStyle(skill.color));

  useEffect(() => {
    stateRef.current[index].mvX      = x;
    stateRef.current[index].mvY      = y;
    stateRef.current[index].setStyle = setStyle;
  }, []);

  const size     = scaledR * 2;
  const iconSize = Math.max(18, Math.floor(scaledR * 0.60));
  const lblSize  = Math.max(8,  Math.floor(scaledR * 0.22));
  const IconComp = skill.Icon;

  return (
    <motion.div
      style={{
        position:       "absolute",
        width:          size,
        height:         size,
        marginLeft:     -scaledR,
        marginTop:      -scaledR,
        borderRadius:   "50%",
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        gap:            4,
        userSelect:     "none",
        cursor:         "none",
        willChange:     "transform",
        border:         style.border,
        background:     style.background,
        boxShadow:      style.boxShadow,
        transition:     "border .22s ease, background .22s ease, box-shadow .22s ease",
        x,
        y,
      }}
      initial={{ scale: 0.15, opacity: 0 }}
      animate={{ scale: 1,    opacity: 1 }}
      transition={{
        delay:     index * 0.036,
        duration:  0.6,
        type:      "spring",
        stiffness: 210,
        damping:   15,
      }}
    >
      <span style={{ pointerEvents:"none", zIndex:2, lineHeight:1, position:"relative", display:"flex", alignItems:"center", justifyContent:"center", color:"#E0E2EC" }}>
        <IconComp size={iconSize} />
      </span>
      <span style={{ fontSize:lblSize, fontWeight:600, color:style.labelColor, textAlign:"center", lineHeight:1.15, padding:"0 3px", letterSpacing:"0.1px", pointerEvents:"none", zIndex:2, position:"relative", transition:"color .22s ease", whiteSpace:"nowrap" }}>
        {skill.n}
      </span>
    </motion.div>
  );
};

const SkillArena = () => {
  const arenaRef  = useRef(null);
  const mouseRef  = useRef({ x: -9999, y: -9999, inside: false });
  const stateRef  = useRef(
    SKILLS.map(() => ({
      x: 0, y: 0,
      vx: (Math.random() - 0.5) * 1.3,
      vy: (Math.random() - 0.5) * 1.3,
      mvX: null, mvY: null, setStyle: null,
    }))
  );
  const rafRef    = useRef(null);
  const sizeRef   = useRef({ w: 900, h: 500 });
  const scaleRef  = useRef(1);
  const [ready, setReady]   = useState(false);
  const [arenaH, setArenaH] = useState(500);
  const [scale, setScale]   = useState(1);

  const computeHeight = (w, sc) => {
    const spacing = Math.floor(100 * sc);
    const cols    = Math.max(1, Math.floor(w / (spacing + 12)));
    const rows    = Math.ceil(SKILLS.length / cols);
    const extraPad = w < 640 ? 8 : 40;
    const computed  = rows * (spacing + 6) + extraPad;
    return w < 640 ? computed : Math.max(380, computed);
  };

  const initPositions = useCallback((w, h, sc) => {
    const spacing = Math.floor(100 * sc);
    const cols    = Math.max(1, Math.floor(w / (spacing + 12)));
    stateRef.current.forEach((s, i) => {
      const r = Math.round(SKILLS[i].r * sc);
      s.x  = r + 8 + (i % cols) * (spacing + 6) + Math.random() * 6;
      s.y  = r + 4 + Math.floor(i / cols) * (spacing + 2) + Math.random() * 4;
      s.vx = (Math.random() - 0.5) * 1.3;
      s.vy = (Math.random() - 0.5) * 1.3;
    });
  }, []);

  useEffect(() => {
    if (!arenaRef.current) return;
    const w  = arenaRef.current.offsetWidth;
    const sc = getScale(w);
    const h  = computeHeight(w, sc);
    sizeRef.current  = { w, h };
    scaleRef.current = sc;
    setArenaH(h);
    setScale(sc);
    initPositions(w, h, sc);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    stateRef.current.forEach((s) => { s.mvX?.set(s.x); s.mvY?.set(s.y); });
  }, [ready]);

  useEffect(() => {
    if (!ready) return;

    function tick() {
      const { w, h } = sizeRef.current;
      const sc = scaleRef.current;
      const st = stateRef.current;
      const { x: mx, y: my, inside } = mouseRef.current;
      const repelR   = REPEL_R   * sc;
      const repelStr = REPEL_STR * sc;

      for (let i = 0; i < st.length; i++) {
        for (let j = i + 1; j < st.length; j++) {
          const a = st[i], b = st[j];
          const ra = Math.round(SKILLS[i].r * sc);
          const rb = Math.round(SKILLS[j].r * sc);
          const dx = b.x - a.x, dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;
          const minD = ra + rb;
          if (dist < minD) {
            const nx = dx / dist, ny = dy / dist;
            const ov = (minD - dist) * 0.55;
            a.x -= nx * ov; a.y -= ny * ov;
            b.x += nx * ov; b.y += ny * ov;
            const rv = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny;
            if (rv > 0) {
              a.vx -= rv * nx * 0.85; a.vy -= rv * ny * 0.85;
              b.vx += rv * nx * 0.85; b.vy += rv * ny * 0.85;
            }
          }
        }
      }

      st.forEach((s, i) => {
        const r     = Math.round(SKILLS[i].r * sc);
        const color = SKILLS[i].color;

        if (inside) {
          const dx = s.x - mx, dy = s.y - my;
          const d  = Math.sqrt(dx * dx + dy * dy) || 1;
          if (d < repelR) {
            const force = (1 - d / repelR) * repelStr;
            s.vx += (dx / d) * force;
            s.vy += (dy / d) * force;
          }
          const gzone = repelR * 1.3;
          const t = d < gzone ? 1 - d / gzone : 0;
          s.setStyle?.(t > 0 ? hoverStyle(color, t) : restStyle(color));
        } else {
          s.setStyle?.(restStyle(color));
        }

        s.vy += GRAVITY;
        s.vx *= FRICTION; s.vy *= FRICTION;
        const spd = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
        if (spd > MAX_SPEED) { s.vx = (s.vx / spd) * MAX_SPEED; s.vy = (s.vy / spd) * MAX_SPEED; }

        s.x += s.vx; s.y += s.vy;

        if (s.x - r < 0)  { s.x = r;      s.vx =  Math.abs(s.vx) * BOUNCE; }
        if (s.x + r > w)  { s.x = w - r;  s.vx = -Math.abs(s.vx) * BOUNCE; }
        if (s.y - r < 0)  { s.y = r;      s.vy =  Math.abs(s.vy) * BOUNCE; }
        if (s.y + r > h)  { s.y = h - r;  s.vy = -Math.abs(s.vy) * BOUNCE; }

        s.mvX?.set(s.x);
        s.mvY?.set(s.y);
      });

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [ready]);

  useEffect(() => {
    const ro = new ResizeObserver(([e]) => {
      const w  = e.contentRect.width;
      const sc = getScale(w);
      const h  = computeHeight(w, sc);
      sizeRef.current  = { w, h };
      scaleRef.current = sc;
      setArenaH(h);
      setScale(sc);
      initPositions(w, h, sc);
    });
    if (arenaRef.current) ro.observe(arenaRef.current);
    return () => ro.disconnect();
  }, []);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isMobile, setIsMobile]           = useState(false);

  useEffect(() => { setIsMobile(window.matchMedia("(pointer: coarse)").matches); }, []);

  const getPos = (e, rect) => {
    if (e.touches) return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  // ── FIX: track where the touch started so we can detect scroll vs drag ──
  const touchStartRef = useRef({ x: 0, y: 0 });

  const handleTouchStart = useCallback((e) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }, []);

  const handleMove = useCallback((e) => {
    const rect = arenaRef.current.getBoundingClientRect();
    const { x, y } = getPos(e, rect);
    mouseRef.current = { x, y, inside: true };
    cursorX.set(x); cursorY.set(y);
    if (!isMobile) setCursorVisible(true);
  }, [isMobile]);

  const handleLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999, inside: false };
    setCursorVisible(false);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setTimeout(() => { mouseRef.current = { x: -9999, y: -9999, inside: false }; }, 300);
  }, []);

  return (
    <div
      ref={arenaRef}
      onMouseMove={handleMove}
      onMouseEnter={() => !isMobile && setCursorVisible(true)}
      onMouseLeave={handleLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={(e) => {
        const dx = Math.abs(e.touches[0].clientX - touchStartRef.current.x);
        const dy = Math.abs(e.touches[0].clientY - touchStartRef.current.y);
        // Only block native scroll if the gesture is more horizontal than vertical
        if (dx > dy) {
          e.preventDefault();
        }
        handleMove(e);
      }}
      onTouchEnd={handleTouchEnd}
      className="relative w-full overflow-hidden"
      style={{
        height:        arenaH,
        background:    "transparent",
        border:        "none",
        cursor:        isMobile ? "default" : "none",
        touchAction:   "pan-y",   // ← KEY FIX: allow vertical scroll on mobile
        borderRadius:  "16px",
      }}
    >
      {ready && SKILLS.map((skill, i) => (
        <Ball key={skill.n} skill={skill} scaledR={Math.round(skill.r * scale)} index={i} stateRef={stateRef} />
      ))}
      {!isMobile && (
        <motion.div style={{ position:"absolute", width:10, height:10, borderRadius:"50%", background:"#3182CE", boxShadow:"0 0 0 3px rgba(49,130,206,0.3)", pointerEvents:"none", translateX:"-50%", translateY:"-50%", x:cursorX, y:cursorY, opacity:cursorVisible ? 1 : 0, zIndex:100 }} />
      )}
    </div>
  );
};

const Skills = () => {
  const headingRef    = useRef(null);
  const headingInView = useInView(headingRef, { once: false });
  const arenaRef      = useRef(null);
  const arenaInView   = useInView(arenaRef, { once: true, amount: 0.1 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => { setIsMobile(window.matchMedia("(pointer: coarse)").matches); }, []);

  return (
    <section className="px-3 sm:px-6 py-10 sm:py-[80px]" id="skills">
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-textWhite text-3xl font-[800] sm:text-5xl">Skills</h3>
        <div className="bg-heading mt-2 h-[4px] min-w-0 flex-grow" />
      </motion.div>

      <motion.div
        ref={arenaRef}
        initial={{ opacity: 0, y: 30 }}
        animate={arenaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mt-2 sm:mt-8"
      >
        <SkillArena />
        <p className="text-center mt-8 uppercase font-sans" style={{ fontSize: isMobile ? "11px" : "10px", letterSpacing: "3px", color: "rgba(156,163,175,0.75)" }}>
          ✦ Touch & drag to interact ✦
        </p>
      </motion.div>
    </section>
  );
};

export default Skills;