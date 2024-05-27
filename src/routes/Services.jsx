import video from "../assets/videos/4352742-hd_1920_1080_25fps.mp4";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    // ScrollTrigger animation
    gsap.to("#scroll-section", {
      scrollTrigger: {
        trigger: "#scroll-section",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        toggleActions: "play none none none",
      },
      scale: 0.1,
      opacity: 0,
      ease: "power2.out",
    });
  }, []);
  return (
    <>
      <div className="relative w-full h-screen overflow-x-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <video autoPlay loop muted className="object-cover w-full h-full">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div
          className="relative z-10 flex items-center mx-8 w-full h-full font-Lato-Black capitalize"
          id="scroll-section"
        >
          <div className="flex flex-col ">
            <h1
              className="text-Light-Red text-3xl xl:text-8xl md:text-5xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Uniting Ideas
            </h1>
            <h2
              className="text-Light-Red mt-2 text-3xl xl:text-8xl md:text-5xl"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Accelerating
            </h2>
            <h2
              className="text-Light-Red mt-2 text-3xl xl:text-8xl md:text-5xl mb-10"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              Success
            </h2>
            <div
              className="flex items-center font-Lato-Light text-Lighter-Blue text-4xl"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <span className="bg-red-500 h-16 w-2 mr-4"></span>
              <div>
                <h1>Your Satisfaction,</h1>
                <h1>Our Mission</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
