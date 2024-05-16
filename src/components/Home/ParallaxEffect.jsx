import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        className="min-h-screen h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500"
      >
        <div className="p-8 bg-white bg-opacity-20 rounded-lg shadow-lg text-4xl font-bold text-white">
          Parallax Section 1
        </div>
      </div>
      <div
        ref={addToRefs}
        className="min-h-screen h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600"
      >
        <div className="p-8 bg-white bg-opacity-20 rounded-lg shadow-lg text-4xl font-bold text-white">
          Parallax Section 2
        </div>
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
