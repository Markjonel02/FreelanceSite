import Purple from "../assets/images/PurpleBg.svg";
import Phone from "../assets/images/phone.svg";
import BubbleAnimation from "../components/Contact/BubbleAnimation";
import Contactform from "../components/Contact/Contactform";

import React, { useRef } from "react";
import { gsap } from "gsap";

const Contactus = () => {
  const buttonRef = useRef(null);
  const bgRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(bgRef.current, {
      scaleX: 1,
      transformOrigin: "left",
      duration: 0.5,
      ease: "power3.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(bgRef.current, {
      scaleX: 0,
      transformOrigin: "left",
      duration: 0.5,
      ease: "power3.inOut",
    });
  };
  return (
    <>
      <div className="relative flex flex-col justify-start items-center md:flex-row">
        <div className="lefttext absolute z-50 mx-8   text-center md:text-left md:order-1">
          <h1
            className="text-3xl xl:text-7xl md:text-6xl sm:text-4xl font-Lato-Black top text-white "
            data-aos="fade-right"
            data-aos-duration="1800"
            data-aos-offset="300"
          >
            Contact Us
          </h1>
          <p
            className="mt-2 text-xl xl:text-2xl font-Lato-Light text-white mb-8"
            data-aos="fade-right"
            data-aos-duration="2200"
          >
            Feel free to reach out to us for any inquiries or questions.
          </p>

          <a
            href="#contact"
            className="relative z-10 text-white text-xl text-center font-Lato-Regular border hover:text-Dark-Purple py-4 px-8 rounded-lg overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={buttonRef}
            data-aos="fade-right"
            data-aos-duration="2200"
          >
            <span
              ref={bgRef}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white to-white  transform scale-x-0 rounded-lg"
              style={{ zIndex: -1 }}
            ></span>
            Send a message
          </a>
        </div>

        <div className="background relative z-10 w-full h-screen md:w-auto md:flex-1">
          <img src={Purple} alt="" className="object-cover w-full h-full" />
        </div>
        <div
          className="right-elem absolute flex justify-center items-center top-20 right-0 z-20 md:order-2"
          data-aos="fade-up"
          data-aos-duration="2500"
          data-aos-offset="300"
        >
          <BubbleAnimation />
          <img
            src={Phone}
            alt="Phone"
            className="phone-img w-full h-full ease-in"
          />
        </div>
      </div>
      <Contactform id="contact" />
    </>
  );
};

export default Contactus;
