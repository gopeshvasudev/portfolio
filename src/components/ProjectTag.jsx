import React from "react";

const ProjectTag = ({ tagName, onHoverState }) => {
  return (
    <div
      className={`tag px-4 py-2 shadow-xl rounded-full bg-white text-black duration-300 ${
        onHoverState && "bg-black text-green-400"
      }`}
    >
      {tagName}
    </div>
  );
};

export default ProjectTag;
