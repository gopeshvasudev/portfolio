import { PiHouseLineBold } from "react-icons/pi";
import PageTitle from "./PageTitle";
import { FaRegUser } from "react-icons/fa";

const MainContainer = () => {
  return (
    <div className="container w-full md:w-[72%]">
      <section className="page1 w-full h-screen flex flex-col justify-evenly items-center md:items-start">
        <PageTitle titleName="Introduce" titleIcon={<PiHouseLineBold />} />

        <h1 className="text-4xl text-center md:text-start md:text-[5.5vw] leading-[1.1] font-light">
          Say Hi from <span className="text-green-400 font-light">Gopesh</span>,{" "}
          <br />
          Frontend & Full Stack <br />
          Developer
        </h1>

        <p className="font-light text-center md:text-start text-zinc-300">
          I design and code beautifully simple things and I love what i do.{" "}
          <br />
          Just simple like that!
        </p>
      </section>

      <section className="page2 w-full h-screen flex flex-col items-center md:items-start justify-evenly">
        <PageTitle titleName="About" titleIcon={<FaRegUser />} />

        <div>
          <h2 className="text-3xl md:text-[4vw] text-center md:text-start font-light mb-10 leading-[1.2]">
            Building Digital Experiences <br /> That{" "}
            <span className="text-green-400 font-light">Matter</span>
          </h2>

          <p className="px-3 sm:px-10 md:px-0 md:w-8/12 text-center md:text-start leading-[2] font-light text-zinc-300">
            As a passionate frontend and full-stack developer, I craft seamless
            digital experiences, blending clean code with intuitive design. I
            thrive on solving challenges, learning new technologies, and
            delivering impactful solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MainContainer;
