import React, { useState } from "react";
import ProjectTag from "./ProjectTag";

const ProjectCard = ({ data }) => {
  const [cardOnHoverEffect, setCardOnHoverEffect] = useState(false);
  const { image, name, tags } = data;

  return (
    <div className="project-card w-full flex flex-col gap-2 items-start">
      <figure
        className="project-image w-full xl:max-w-3xl h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden relative"
        onMouseEnter={() => setCardOnHoverEffect(true)}
        onMouseLeave={() => setCardOnHoverEffect(false)}
      >
        <img src={image} alt={name} className="w-full h-full object-cover" />

        <div className="hover-card w-full h-full absolute top-0 left-0 z-50 hidden md:flex items-end justify-start pb-5 pl-5 pointer-events-none">
          <div className="tags flex items-center gap-3">
            {tags?.map((tag) => (
              <ProjectTag
                key={tag}
                tagName={tag}
                onHoverState={cardOnHoverEffect}
              />
            ))}
          </div>
        </div>
      </figure>

      <h2 className="text-xl lg:text-2xl font-light">{name}</h2>
    </div>
  );
};

export default ProjectCard;
