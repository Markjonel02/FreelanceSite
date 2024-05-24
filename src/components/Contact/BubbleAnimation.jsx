// BubbleAnimation.js

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BubbleAnimation = () => {
  const bubbleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(bubbleRef.current, {
      y: "-100%",
      duration: 5,
      ease: "power1.inOut",
      opacity: 0,
    }).to(bubbleRef.current, {
      y: "0%",
      duration: 0,
      opacity: 1,
    });

    return () => {
      tl.kill(); // Clean up GSAP timeline on unmount
    };
  }, []);

  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
      <div
        ref={bubbleRef}
        className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
      ></div>
    </div>
  );
};

export default BubbleAnimation;
