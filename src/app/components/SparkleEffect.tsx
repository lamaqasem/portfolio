import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

export default function SparkleEffect() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    let sparkleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Only create sparkles occasionally (10% chance)
      if (Math.random() > 0.9) {
        const newSparkle: Sparkle = {
          id: sparkleId++,
          x: e.clientX,
          y: e.clientY,
        };

        setSparkles((prev) => [...prev, newSparkle]);

        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
        }, 1000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: sparkle.x,
              top: sparkle.y,
            }}
            className="w-2 h-2"
          >
            <svg viewBox="0 0 20 20" className="w-full h-full">
              <path
                d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
                fill="#ff69b4"
                opacity="0.6"
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
