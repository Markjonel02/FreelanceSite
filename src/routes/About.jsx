import design3 from "../assets/images/design3.svg";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Blob2 from "../assets/images/Blob2.svg";
import { Faq } from "../components/Faq";
import Aboutsection from "../components/About/Aboutsection";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.set(imageRef.current, { transformOrigin: "center" });
    // Define the scroll-based animation
    gsap.to(imageRef.current, {
      scale: 1.3,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center w-full h-screen">
        <div className="absolute top-10 left-0">
          <img src={Blob2} alt="" className="opacity-30" />
        </div>
        <div className="absolute top-0 right-0">
          <img src={Blob2} alt="" className="opacity-20" />
        </div>
        <div className=" lg:order-1">
          <h1
            className="font-Lato-Black mx-5 sm:mx-10 lg:mx-10 my-20 text-center lg:text-left text-2xl sm:text-3xl lg:text-2xl text-black"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            Welcome to
            <span className="block text-blue-primary text-3xl sm:text-5xl lg:text-7xl md:text-6xl">
              Project <span className="text-dark-primary">Hub.</span>
            </span>
            <span className="block text-lg sm:text-xl lg:text-2xl xl:text-3xl text-black mt-3 font-Lato-Light">
              Launchpad for project excellence. Empowering teams to thrive.
              Where projects ascend, collaboration soars!
            </span>
          </h1>
        </div>

        <div className="w-screen h-screen flex items-center justify-center lg:order-2">
          <div className="flex justify-center">
            <img
              ref={imageRef}
              src={design3}
              alt=""
              data-aos="fade-left"
              data-aos-duration="2500"
              className="hidden sm:block justify-center items-center"
            />
          </div>
        </div>
      </div>
      <Aboutsection />
      <Faq />
    </>
  );
};

export default About;
