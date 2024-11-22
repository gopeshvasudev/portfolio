import React from "react";

const LanguageCard = ({ imageUrl, altText }) => {
  return (
    <div className="language-card w-[190px] h-[260px] rounded-full border border-zinc-600 flex items-center justify-center overflow-hidden p-5 hover:border-green-400 duration-300">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default LanguageCard;
