import MyInfoCard from "./MyInfoCard";
import MainContainer from "./MainContainer";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const Body = () => {
  const scrollRef = useRef(null); // Reference for the scroll container

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main
      ref={scrollRef}
      className="main relative w-full bg-zinc-900 text-white flex flex-col md:flex-row px-5 lg:px-8 gap-16"
    >
      <MyInfoCard />
      <MainContainer />
    </main>
  );
};

export default Body;
