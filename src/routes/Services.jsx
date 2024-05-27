import video from "../assets/videos/4352742-hd_1920_1080_25fps.mp4";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Servicebanner from "../components/Services/Servicebanner";
import Servicecard from "../components/Services/Servicecards";
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
      <div className="relative w-full h-screen overflow-x-hidden scroll-smooth">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <video autoPlay loop muted className="object-cover w-full h-screen">
            <source src={video} type="video/mp4" />
          </video>{" "}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-black opacity-20 blur-sm"></div>
        </div>

        <div
          className="relative z-10 flex items-center mx-8 w-full h-full font-Lato-Black capitalize"
          id="scroll-section"
        >
          <div className="flex flex-col  ">
            <h1
              className="text-blue-primary text-3xl xl:text-8xl md:text-5xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Uniting Ideas
            </h1>
            <h2
              className="text-blue-primary mt-2 text-3xl xl:text-8xl md:text-5xl "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Accelerating
            </h2>
            <h2
              className="text-blue-primary mt-2 text-3xl xl:text-8xl md:text-5xl mb-10"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              Success
            </h2>
            <div
              className="flex items-center font-Lato-Light text-Lighter-Blue "
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <span className="bg-Light-Red h-16 w-2 mr-4"></span>
              <div>
                <h1 className="text-2xl xl:text-4xl md:text-3xl ">
                  Your Satisfaction,
                </h1>
                <h1 className="text-2xl xl:text-4xl md:text-3xl">
                  Our Mission
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Servicebanner />
      <Servicecard />
    </>
  );
};

export default Services;
