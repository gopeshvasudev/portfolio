import { PiHouseLineBold, PiShapesBold } from "react-icons/pi";
import PageTitle from "./PageTitle";
import { FaRegUser } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import SpecializationCard from "./SpecializationCard";
import LanguageCard from "./LanguageCard";
import {
  languageCardData,
  projectCardsData,
  specializationCardData,
} from "../constants/dummyData";
import { RiSuitcaseLine } from "react-icons/ri";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const MainContainer = () => {
  return (
    <div className="container w-full md:w-[72%]">
      <section className="page1 w-full min-h-[60vh] flex flex-col justify-evenly items-center md:items-start gap-16 mt-20">
        <PageTitle titleName="Introduce" titleIcon={<PiHouseLineBold />} />

        <div className="overflow-hidden">
          <motion.h1
            initial={{
              y: "100%",
              opacity: 0,
            }}
            whileInView={{
              y: "0%",
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            className="text-4xl text-center md:text-start md:text-[5.5vw] leading-[1.1] font-light overflow-hidden"
          >
            Say Hi To <span className="text-green-400 font-light">Gopesh</span>,
            <br />
            Frontend & Full Stack <br />
            Developer
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: "0%", transition: { duration: 1 } }}
            className="font-light text-center md:text-start text-zinc-300"
          >
            I design and code beautifully simple things and I love what i do.{" "}
            <br />
            Just simple like that!
          </motion.p>
        </div>
      </section>

      <section className="page2 w-full min-h-[60vh] flex flex-col items-center md:items-start justify-evenly gap-16 mt-20">
        <PageTitle titleName="About" titleIcon={<FaRegUser />} />

        <div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{
                y: "100%",
                opacity: 0,
              }}
              whileInView={{
                y: "0%",
                opacity: 1,
                transition: { duration: 0.8 },
              }}
              className="text-3xl md:text-[4vw] text-center md:text-start font-light mb-10 leading-[1.2]"
            >
              Building Digital Experiences <br /> That
              <span className="text-green-400 font-light">Matter</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            className="px-3 sm:px-10 md:px-0 md:w-8/12 text-center md:text-start leading-[2] font-light text-zinc-300"
          >
            As a passionate frontend and full-stack developer, I craft seamless
            digital experiences, blending clean code with intuitive design. I
            thrive on solving challenges, learning new technologies, and
            delivering impactful solutions.
          </motion.p>
        </div>
      </section>

      <section className="page3 w-full min-h-screen flex flex-col items-center md:items-start mt-20">
        <PageTitle titleName="Services" titleIcon={<GrServices />} />

        <div className="overflow-hidden">
          <motion.h2
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%",
              transition: { duration: 0.8 },
            }}
            className="text-3xl md:text-[4vw] text-center md:text-start font-light leading-[1.2] mt-12 mb-5"
          >
            My
            <span className="text-green-400 font-light"> Specializations</span>
          </motion.h2>
        </div>

        <div className="specialization-card-container w-full flex flex-col gap-10">
          {specializationCardData?.map((data, index) => (
            <SpecializationCard
              key={index}
              title={data.title}
              description={data.description}
              icon={data.icon}
            />
          ))}
        </div>
      </section>

      <section className="page4 w-full min-h-screen flex flex-col items-center md:items-start pt-20">
        <PageTitle titleName={"My Skills"} titleIcon={<PiShapesBold />} />

        <div className="overflow-hidden">
          <motion.h2
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%",
              transition: { duration: 0.8 },
            }}
            className="text-3xl md:text-[4vw] text-center md:text-start font-light leading-[1.2] mt-12 mb-6"
          >
            My
            <span className="text-green-400 font-light"> Expertise</span>
          </motion.h2>
        </div>

        <div className="languages-card w-full flex flex-wrap justify-center md:justify-start gap-10">
          {languageCardData?.map((data) => (
            <LanguageCard
              key={data.text}
              imageUrl={data.imageUrl}
              text={data.text}
            />
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="page5 w-full min-h-screen flex flex-col items-center md:items-start pt-20 pb-2"
      >
        <PageTitle titleName={"Portfolio"} titleIcon={<RiSuitcaseLine />} />

        <div className="overflow-hidden">
          <motion.h2
            initial={{
              opacity: 0,
              y: "100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0%",
              transition: { duration: 0.8 },
            }}
            className="text-3xl md:text-[4vw] text-center md:text-start font-light leading-[1.2] mt-12 mb-6"
          >
            Featured
            <span className="text-green-400 font-light"> Projects</span>
          </motion.h2>
        </div>

        <div className="project-card-container w-full flex flex-col gap-10">
          {projectCardsData?.map((data) => (
            <Link key={data.name} to={`/project/${data.route}`}>
              <ProjectCard data={data} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContainer;
