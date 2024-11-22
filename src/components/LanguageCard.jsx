import React from "react";

const LanguageCard = ({ imageUrl, text }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="language-card w-[160px] h-[220px] rounded-full border-2 border-zinc-600 flex items-center justify-center overflow-hidden p-5 hover:border-green-400 duration-300">
        <img
          src={imageUrl}
          alt={text}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="text-lg font-light">{text}</h3>
    </div>
  );
};

export default LanguageCard;
