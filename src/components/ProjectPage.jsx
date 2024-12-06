import React, { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { PiHouseLineBold } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import projectsData from "../constants/projectsData";
import TechnologyTag from "./TechnologyTag";

const ProjectPage = () => {
  const { projectName } = useParams();

  const filteringData = projectsData?.filter(
    (data) => data.route === projectName
  );

  const filterData = filteringData?.[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main w-full bg-zinc-900 text-white">
      <header className="w-full min-h-[10vh] flex items-center justify-between px-5 py-2 gap-5">
        <div className="left">
          <h1 id="project-text-stroke" className="text-2xl 2xl:text-4xl">
            Gopesh Vasudev
          </h1>
        </div>

        <div className="right">
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-xl 2xl:text-3xl cursor-pointer duration-300 hover:bg-black hover:text-green-400">
            <Link to={"/"}>
              <PiHouseLineBold />
            </Link>
          </div>
        </div>
      </header>

      <section className="hero w-full min-h-[80vh] pt-20 px-5 lg:mb-5">
        <h1 className="text-5xl 2xl:text-7xl font-bold text-center md:text-start mb-5">
          {filterData.title}
        </h1>

        <figure className="w-full h-[50vh] sm:h-[60vh] md:h-screen bg-zinc-800 rounded-xl overflow-hidden">
          <img
            src={filterData.image}
            alt={filterData.title}
            className="w-full h-full object-cover"
          />
        </figure>
      </section>

      <section className="project-info w-full min-h-screen flex flex-col md:flex-row justify-center items-start gap-10 p-10">
        <div className="left w-full md:w-[40%] py-3 px-10">
          <h3 className="text-xl text-green-400 flex items-center justify-center gap-1">
            Overview
            <span className="text-white hover:rotate-90 duration-300">
              <MdArrowOutward />
            </span>
          </h3>
        </div>
        <div className="right w-full md:w-[60%] p-1 flex flex-col items-center md:items-start justify-between gap-10">
          <p className="text-sm md:text-base lg:text-lg w-full md:w-[80%] text-center md:text-start leading-6 md:leading-8 font-light">
            {filterData.overview}
          </p>

          <div className="technologies-container flex flex-wrap justify-center md:justify-start gap-2">
            {filterData?.technologies?.map((tag) => (
              <TechnologyTag key={tag} name={tag} />
            ))}
          </div>

          <a
            href={filterData.deployedUrl}
            target="_blank"
            className="border-b hover:text-green-400 duration-300 mt-10"
          >
            Launch Project
          </a>
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;
