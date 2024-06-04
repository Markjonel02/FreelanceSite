import Code from "../../assets/images/code.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Aboutsection = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    const imageElement = imageRef.current;
    const textElement = textRef.current;

    gsap.fromTo(
      imageElement,
      {
        y: 0,
      },
      {
        y: "-30%",
        scrollTrigger: {
          trigger: imageElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      textElement,
      {
        y: 0,
      },
      {
        y: "30%",
        scrollTrigger: {
          trigger: textElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <>
      <div className="relative w-full h-full scroll-smooth">
        <img src={Code} alt="Your Image" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-3">
          <div ref={textRef} className="text-white text-center">
            <h2
              className="text-3xl font-Lato-Black xl:text-6xl mb-4 tracking-wide"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Who we are?
            </h2>
            <div
              className="flex flex-col md:flex-row justify-center "
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="md:w-1/2">
                <p className="text-lg md:text-xl xl:text-2xl lg:text-2xl font-Lato-Light">
                  At{" "}
                  <span className="font-Lato-Black text-blue-primary">
                    ProjectHub
                  </span>
                  , we’re not just developers, we’re dreamers, creators, and
                  problem solvers. Our passion lies in transforming ideas into
                  elegant, functional, and impactful digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutsection;
