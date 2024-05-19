import React, { useEffect, useRef } from "react";

import jspng from "../../assets/images/js.png";
import bootstrap from "../../assets/images/bootstrap.png";
import mysql from "../../assets/images/mysql.png";
import postgre from "../../assets/images/postgre.png";
import physics from "../../assets/images/physics.png";
import php from "../../assets/images/php.png";
import PropTypes from "prop-types";
import csharp from "../../assets/images/c-sharp.png";
import python from "../../assets/images/python.png";
import Django from "../../assets/images/django_line_logo_icon_146560.svg";
import Asp from "../../assets/images/file_type_asp_icon_130741.svg";
import Css from "../../assets/images/file_type_css_icon_130661.svg";
import Html from "../../assets/images/file_type_html_icon_130541.svg";
import jquery from "../../assets/images/jquery_original_wordmark_logo_icon_146447.svg";
import Tailwind from "../../assets/images/tailwindcss_logo_icon_167923.svg";
import Vuejs from "../../assets/images/vuejs_original_wordmark_logo_icon_146305.svg";

const Img = [
  { src: jspng, text: "JavaScript" },
  { src: bootstrap, text: "Bootstrap" },
  { src: mysql, text: "MySQL" },
  { src: postgre, text: "Postgre" },
  { src: physics, text: "React Js" },
  { src: php, text: "PHP" },
  { src: csharp, text: "C#" },
  { src: python, text: "Python" },
  { src: Django, text: "Django" },
  { src: Asp, text: "Asp" },
  { src: Css, text: "Css" },
  { src: Html, text: "Html" },
  { src: jquery, text: "JQuery" },

  { src: Tailwind, text: "Tailwind" },

  { src: Vuejs, text: "Vuejs" },
];

Img.propTypes = {
  text: PropTypes.string,
  src: PropTypes.string,
};

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
    <div className="overflow-hidden w-full mb-20">
      <div ref={sliderRef} className="flex whitespace-nowrap  font-Lato-Light">
        {Img.map((item, index) => (
          <div className="flex whitespace-nowrap font-Lato-Light" key={index}>
            <div className="slide p-4 m-2 w-24 h-24 flex flex-col items-center justify-center">
              <img src={item.src} alt="" className="w-20 h-20 mb-2" />
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
