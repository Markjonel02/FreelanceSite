// BubbleAnimation.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BubbleAnimation = () => {
  const bubblesRef = useRef([]);

  useEffect(() => {
    const bubbles = bubblesRef.current;

    bubbles.forEach((bubble, index) => {
      const tl = gsap.timeline({ repeat: -1, delay: index * 1 });

      gsap.set(bubble, {
        y: "150px",
        x: gsap.utils.random(-10, 10) + "vw",
        scale: 0,
        opacity: 0.2,
      });

      tl.to(
        bubble,
        {
          y: gsap.utils.random(30, 80) + "%",
          x: gsap.utils.random(-10, 10) + "vw",
          scale: 1,
          opacity: 1,
          duration: gsap.utils.random(1, 3),
          ease: "power1.out",
        },
        0
      ).to(
        bubble,
        {
          y: "-110%",
          duration: gsap.utils.random(5, 10),
          ease: "power1.in",
          opacity: 1.2,
        },
        "+=2"
      );
    });

    return () => {
      bubbles.forEach((bubble) => {
        gsap.killTweensOf(bubble);
      });
    };
  }, []);

  return (
    <div className="absolute justify-center z-50 top[-200px]">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (bubblesRef.current[index] = el)}
          className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-300 to-pink-100 absolute"
          style={{ bottom: "0%" }}
        ></div>
      ))}
    </div>
  );
};

export default BubbleAnimation;
