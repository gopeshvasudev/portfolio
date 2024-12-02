import React from "react";
import { PiHouseLineBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const ProjectPage = () => {
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

      <section className="hero w-full min-h-[80vh] py-10 px-5 lg:mb-5">
        <h1 className="text-5xl 2xl:text-7xl font-light text-center md:text-start mb-5">
          Skinny <span className="text-green-400 font-light">Dipped</span>
        </h1>

        <figure className="w-full h-[50vh] sm:h-[60vh] md:h-screen bg-zinc-800 rounded-xl overflow-hidden">
          <img
            src="../assets/projects/skinny.webp"
            alt="Skinny dipped"
            className="w-full h-full object-cover"
          />
        </figure>
      </section>

      <section className="project-info w-full min-h-screen flex justify-center">
        <p className="text-lg sm:text-xl md:text-2xl 2xl:text-5xl px-4 lg:px-10 text-center w-full lg:w-[70%] leading-[2] font-light">
          "One and Zero: Reimagine Round 2" is a web development project focused
          exclusively on redesigning and reimagining the UI (User Interface) of
          an existing company’s website. The goal is to create a visually
          modern, highly intuitive, and aesthetically pleasing design while
          maintaining the static nature of the content. This project emphasizes
          creativity, simplicity, and the power of UI to make a lasting impact
          without relying on dynamic features or data.
        </p>
      </section>
    </main>
  );
};

export default ProjectPage;
