import React from "react";
import { motion } from "motion/react";

const LanguageCard = ({ imageUrl, text }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 },
        }}
        className="language-card w-[140px] h-[200px] md:w-[160px] md:h-[220px] rounded-full border-2 border-zinc-600 flex items-center justify-center overflow-hidden p-5 hover:border-green-400 duration-300"
      >
        <img
          src={imageUrl}
          alt={text}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <h3 className="text-lg font-light">{text}</h3>
    </div>
  );
};

export default LanguageCard;
