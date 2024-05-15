// ParallaxEffect.jsx
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "../Home/Banner";
gsap.registerPlugin(ScrollTrigger);

const ParallaxEffect = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".parallax-item");

    sections.forEach((section) => {
      // Container parallax animation
      gsap.fromTo(
        section,
        { y: "50vh", opacity: 0, scale: 0.9 },
        {
          y: "0",
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          duration: 1.5,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 15%",
            scrub: true,
            markers: false, // Set to true to see the start and end markers
          },
        }
      );

      // Inner content parallax animation
      const content = section.querySelector(".parallax-content");
      gsap.fromTo(
        content,
        { y: "30vh", opacity: 0 },
        {
          y: "0",
          opacity: 1,
          ease: "power2.out",
          duration: 1.5,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 25%",
            scrub: true,
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div
      className="parallax-container relative overflow-hidden"
      style={{ height: "300vh" }}
    >
      <Banner />
      <div
        className="parallax-item absolute inset-0 flex items-center justify-center bg-green-500 rounded-lg"
        style={{ height: "100vh", top: "100vh" }}
      >
        <div className="parallax-content text-center">
          <h1 className="text-white text-4xl mb-4">Second Layer</h1>
          <p className="text-white text-lg">
            This is some content on the second layer.
          </p>
        </div>
      </div>
      <div
        className="parallax-item absolute inset-0 flex items-center justify-center bg-red-500"
        style={{ height: "100vh", top: "200vh" }}
      >
        <div className="parallax-content text-center">
          <h1 className="text-white text-4xl mb-4">Third Layer</h1>
          <p className="text-white text-lg">
            This is some content on the third layer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxEffect;
