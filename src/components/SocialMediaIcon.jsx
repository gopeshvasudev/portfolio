import React from "react";

const SocialMediaIcon = ({href, icon}) => {
    const Icon = icon;
  return (
    <a href={href} target="_blank">
      <div className="icon w-12 h-12 flex items-center justify-center border-2 border-zinc-700 rounded-full text-2xl hover:border-green-400 duration-300">
        <Icon />
      </div>
    </a>
  );
};

export default SocialMediaIcon;
