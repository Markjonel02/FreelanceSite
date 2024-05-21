import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Parallaxvid from "../../assets/videos/Parallax.mp4";
import Hero from "./Hero";
gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = () => {
  const containerRef = useRef(null);
  const parallaxRefs = useRef([]);

  parallaxRefs.current = [];

  useEffect(() => {
    parallaxRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !parallaxRefs.current.includes(el)) {
      parallaxRefs.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="space-y-0">
      <div
        ref={addToRefs}
        className="min-h-screen h-screen flex items-center justify-center "
      >
        <video autoPlay loop muted className="w-full h-full absolute">
          <source src={Parallaxvid} type="video/mp4" />
        </video>
      </div>
      <div
        ref={addToRefs}
        className="min-h-screen h-screen flex items-center justify-center "
      >
        <Hero />
      </div>
      <div
        ref={addToRefs}
        className="min-h-screen h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500"
      >
        <div className="p-8 bg-white bg-opacity-20 rounded-lg shadow-lg text-4xl font-bold text-white">
          Parallax Section 3
        </div>
      </div>
      <div
        ref={addToRefs}
        className="min-h-screen h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-400"
      >
        <div className="p-8 bg-white bg-opacity-20 rounded-lg shadow-lg text-4xl font-bold text-white">
          Parallax Section 4
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
