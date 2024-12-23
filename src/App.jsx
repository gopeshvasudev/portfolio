import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const lenis = new Lenis({
        el: scrollRef.current,
        smooth: true,
        direction: "vertical",
        gestureDirection: "vertical",
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef}>
      <Outlet />
    </div>
  );
};

export default App;
