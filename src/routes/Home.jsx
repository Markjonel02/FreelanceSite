import { useEffect, useState } from "react";
import Anim from "../assets/images/Anim.gif";
import Blob from "../assets/images/Blob.svg";
const Home = () => {
  /* change the span color when window width is less than 800 */
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handlewidth = () => {
      setwindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handlewidth);

    return () => {
      window.addEventListener("resize", handlewidth);
    };
  }, []);

  const SelectedSpancolor =
    windowWidth <= 800 ? "text-Dark-primary" : "text-blue-primary";

  return (
    <>
      <div className="relative flex items-center  md:flex-row flex-col justify-center w-full h-full p-4">
        {/* Left side content */}
        <div className="order-2 md:order-1 text-container w-full md:w-1/2 mb-20 flex xl:justify-center items-center">
          <div className="flex justify-center flex-col text-center md:text-left">
            <div className="text-4xl md:text-5xl lg:text-6xl font-Lato-Black">
              <h1>Welcome to</h1>
              <span className="text-blue-primary Capitalize">
                Project <span className={SelectedSpancolor}>Hub</span>
              </span>
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-Lato-Light mt-5">
              <p className="text-lg md:text-xl lg:text-xl mb-auto">
                Where ideas ignite! Collaborate, organize, and conquer.
              </p>
              <p className="text-lg md:text-xl lg:text-xl mt-auto">
                Let's make your projects happen
              </p>
            </div>
          </div>
        </div>

        <div className="relative  w-1/2 ">
          <div className="order-1 border relative">
            <div className="relative mb-20">
              {/* Background Blob */}
              <img
                className="w-full h-auto"
                src={Blob}
                alt=""
                data-aos="fade-up"
                data-aos-duration="1500"
              />
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              {/* Absolute Centered Element */}
              <img
                className="max-w-full max-h-full"
                src={Anim}
                alt=""
                data-aos="fade-right"
                data-aos-duration="2500"
                data-aos-offset="300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
