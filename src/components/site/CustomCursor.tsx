import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 30, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 400, damping: 30, mass: 0.4 });
  const ringX = useSpring(x, { stiffness: 120, damping: 18, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 120, damping: 18, mass: 0.6 });

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Disable on touch / coarse pointers
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]',
      );
      setHovering(!!interactive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", leave);
    window.addEventListener("mouseover", over);
    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", leave);
      window.removeEventListener("mouseover", over);
      document.documentElement.style.cursor = "";
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-primary mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-primary/60"
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          opacity: visible ? (hovering ? 1 : 0.6) : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}