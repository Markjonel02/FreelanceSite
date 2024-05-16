import React, { useEffect, useRef } from "react";

const InfiniteSlider = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const speed = 50; // Speed in pixels per second

  useEffect(() => {
    const slider = sliderRef.current;

    // Clone slides
    const slides = [...slider.children];
    const cloneSlides = () => {
      const sliderWidth = slider.clientWidth;
      let totalWidth = 0;
      while (totalWidth < sliderWidth * 2) {
        slides.forEach((slide) => {
          const clone = slide.cloneNode(true);
          slider.appendChild(clone);
          totalWidth += slide.clientWidth;
        });
      }
    };

    // Start animation
    const startAnimation = () => {
      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const offset = (speed * elapsed) / 1000;
        slider.style.transform = `translateX(-${offset}px)`;
        if (offset >= slider.scrollWidth / 2) {
          startTime = null;
          slider.style.transform = `translateX(0)`;
        }
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    };

    cloneSlides();
    startAnimation();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div ref={sliderRef} className="flex whitespace-nowrap">
        <div className="slide p-4 bg-red-400 m-2 inline-block ">img</div>
        <div className="slide p-4 bg-green-400 m-2 inline-block ">Slide 2</div>
        <div className="slide p-4 bg-blue-400 m-2 inline-block ">Slide 3</div>
        <div className="slide p-4 bg-yellow-400 m-2 inline-block">Slide 4</div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
