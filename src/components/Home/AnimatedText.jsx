// src/components/AnimatedText.js
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blob from "../../assets/images/blob.gif";
gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { x: "100%" },
      {
        x: "0%",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center ">
      <img src={blob} alt="" className="absolute" />
      <div className="overflow-hidden">
        <h1
          ref={textRef}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-Lato-Thin text-Dark-primary text-center custom-text-shadow"
        >
          Crafting Unique Websites, Tailored to You.
        </h1>
      </div>
    </div>
  );
};

export default AnimatedText;
