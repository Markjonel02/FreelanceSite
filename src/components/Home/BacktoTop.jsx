import React from "react";
import { useEffect, useState } from "react";
import { Ripple } from "primereact/ripple";
const BacktoTop = () => {
  const [Scrollvisible, setScrollvisible] = useState(false);
  useEffect(() => {
    const backToTop = () => {
      if (window.scrollY > 300) {
        setScrollvisible(true);
      } else {
        setScrollvisible(false);
      }
    };
    window.addEventListener("scroll", backToTop);
    return () => {
      window.addEventListener("scroll", backToTop);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {Scrollvisible && (
        <div
          className=" p-ripple fixed bottom-4 right-4 z-50 cursor-pointer"
          onClick={scrollToTop}
        >
          <button className=" p-ripple flex items-center  justify-center w-12 h-12 bg-Lighter-Blue rounded-full animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
            <Ripple />
          </button>
        </div>
      )}
    </>
  );
};

export default BacktoTop;
