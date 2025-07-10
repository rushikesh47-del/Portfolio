import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", image: "/React-icon.svg" },
  { name: "GSAP", image: "/gsap-greensock.svg" },
  { name: "Figma", image: "/figma-icon.svg" },
  { name: "Tailwind", image: "/tailwind-css-2.svg" },
  { name: "JavaScript", image: "/javascript-2.svg" },
  { name: "Node.js", image: "/nodejs-1.svg" },
  { name: "Three.js", image: "/threejs-1.svg" },
];

const SkillsCarousel = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate((prev) => prev - 1.1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex justify-center items-center">
      <motion.div
        className="relative w-[300px] h-[300px]"
        style={{
          perspective: "1200px",
        }}
      >
        <motion.div
          animate={{ rotateY: rotate }}
          transition={{ duration: 0.9, ease: "linear" }}
          className="w-full h-full"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {skills.map((skill, index) => {
            const angle = (360 / skills.length) * index;
            return (
              <motion.div
                key={skill.name}
                className="absolute w-[120px] h-[120px] rounded-xl shadow-lg flex flex-col justify-center items-center text-white font-semibold backdrop-blur-md border border-white/20 overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  transform: `rotateY(${angle}deg) translateZ(350px)`,
                }}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-12 h-12 object-contain mb-2"
                />
                <span className="text-sm">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillsCarousel;
