import Reading from "../../assets/images/Reading.svg";
import nopage from "../../assets/images/nopage.svg";
import Blob2 from "../../assets/images/Blob2.svg";
export const Nopage = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="flex justify-center item-center">
        <img
          src={Blob2}
          alt=""
          className="absolute opacity-40 w-full h-full animate-pulse"
          data-aos-offset="300"
        />
      </div>
      <img src={Blob2} alt="" className="absolute opacity-25" />
      <div className="background flex items-center justify-center h-full">
        <img
          src={nopage}
          alt=""
          className="max-w-full h-auto"
          data-aos="fade"
          data-aos-duration="1500"
        />
      </div>
      <div className="absolute top-44 left-1/3 transform -translate-x-1/3">
        <h1
          className="text-4xl sm:text-6xl md:text-7xl xl:text-9xl font-Lato-Black text-blue-primary"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          Page <span className="text-Dark-primary">not</span>
        </h1>
      </div>
      <div className="absolute bottom-64 right-32 transform -translate-y-1/">
        <h1
          className="text-4xl sm:text-6xl md:text-7xl xl:text-9xl font-Lato-Black text-Dark-primary"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          Found
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={Reading}
          alt=""
          className="absolute top-24 md:top-36  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          data-aos="fade-up"
          data-aos-duration="2000"
        />
      </div>
    </div>
  );
};
