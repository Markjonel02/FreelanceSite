import { useEffect, useState } from "react";
import Anim from "../assets/images/Anim.gif";
import Blob from "../assets/images/Blob.svg";
import ParallaxEffect from "../components/Home/ParallaxEffect";
import AnimatedText from "../components/Home/AnimatedText";
import Banner from "../components/Home/Banner";
import ImgSlider from "../components/Home/ImgSlider";
import Blob2 from "../assets/images/Blob2.svg";
import { Ripple } from "primereact/ripple";

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
    windowWidth <= 800 ? "text-Dark-primary" : "text-blue-primary  ";

  return (
    <>
      <div className="relative flex items-center  md:flex-row flex-col justify-center w-full h-full p-4">
        {/* Left side content */}
        <div className="order-2 md:order-1 text-container w-full md:w-1/2 mb-20 flex xl:justify-center items-center">
          <div className="flex justify-center flex-col text-center md:text-left">
            <div className="text-4xl md:text-5xl lg:text-6xl font-Lato-Black mb-5">
              <img
                src={Blob2}
                alt=""
                className="absolute right-0 top-0 opacity-25"
              />
              <h1 data-aos="fade-right" data-aos-duration="1000">
                Welcome to
              </h1>
              <span
                className="text-blue-primary Capitalize"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                Project <span className={SelectedSpancolor}>Hub</span>
              </span>
            </div>
            <div
              className="text-4xl md:text-5xl lg:text-6xl font-Lato-Light mb-5 "
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <p className="text-lg md:text-xl lg:text-xl mb-auto">
                Where ideas ignite! Collaborate, organize, and conquer.
              </p>
              <p className="text-lg md:text-xl lg:text-xl mt-auto">
                Let{"'"}s make your projects happen
              </p>
            </div>
            <div className="relative p-ripple">
              <button
                className=" border  border-blue-primary px-10 py-4 rounded-lg font-Lato-Regular text-xl hover:bg-blue-primary hover:text-Light-secondary "
                data-aos="fade-right"
                data-aos-duration="2500"
              >
                Get Started
                <Ripple />
              </button>
            </div>
          </div>
        </div>

        <div className="relative  w-1/2 ">
          <div className="order-1  relative">
            <div className="relative mb-10">
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
      <AnimatedText />
      <Banner />
      <ParallaxEffect />
      <ImgSlider />
    </>
  );
};

export default Home;
