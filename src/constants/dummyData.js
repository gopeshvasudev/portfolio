import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { LuServerCrash } from "react-icons/lu";
import { MdDesignServices } from "react-icons/md";
import { TbHeartRateMonitor } from "react-icons/tb";

export const socialMediaIcons = [
  {
    href: "https://linkedin.com/in/gopeshvasudev",
    icon: GrLinkedinOption,
  },
  {
    href: "https://github.com/gopeshvasudev",
    icon: FaGithub,
  },
  {
    href: "https://instagram.com/gopeshvasudev/",
    icon: AiFillInstagram,
  },
  {
    href: "https://twitter.com/gopeshvasudev",
    icon: FaTwitter,
  },
];

export const specializationCardData = [
  {
    title: "Web Design",
    description:
      "Creating modern and user-friendly website designs using tools like Figma. I focus on making designs that look great and are easy to use",
    icon: MdDesignServices,
  },
  {
    title: "Frontend Development",
    description:
      "Building websites and apps that work on all devices using React, HTML, CSS, and JavaScript. I make sure everything looks good and runs smoothly.",
    icon: TbHeartRateMonitor,
  },
  {
    title: "Full-Stack Development",
    description:
      "Developing complete applications with the MERN stack (MongoDB, Express, React, Node.js). I handle everything from the database to the user interface.",
    icon: LuServerCrash,
  },
];

export const languageCardData = [
  {
    imageUrl: "../assets/lang/javascript.webp",
    text: "Javascript",
  },
  {
    imageUrl: "../assets/lang/react.webp",
    text: "React",
  },
  {
    imageUrl: "../assets/lang/nodejs.webp",
    text: "Node js",
  },
  {
    imageUrl: "../assets/lang/express.webp",
    text: "Express js",
  },
  {
    imageUrl: "../assets/lang/mongodb.webp",
    text: "Mongo DB",
  },
  {
    imageUrl: "../assets/lang/mysql.webp",
    text: "My SQL",
  },
  {
    imageUrl: "../assets/lang/gsap.webp",
    text: "Gsap",
  },
];

export const projectCardsData = [
  {
    image: "../assets/projects/netflixgg.webp",
    name: "NetflixGG",
    tags: ["Dynamic", "Movie Showcasing"],
    route: "netflixgg",
  },
  {
    image: "../assets/projects/skinny.webp",
    name: "Skinny Dipped",
    tags: ["Animated", "Modern", "Punchy"],
    route: "skinny-dipped",
  },
  {
    image: "../assets/projects/harley.webp",
    name: "Harley Davidson",
    tags: ["Animated", "Minimal", "Futuristic"],
    route: "harley-davidson",
  },
];
