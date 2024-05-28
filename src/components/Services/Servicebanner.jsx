import bannersection from "../../assets/images/Bannersection.svg";
import Blob2 from "../../assets/images/Blob2.svg";
const Servicebanner = () => {

  return (
    <>
      <div className="relative scroll-smooth">
        <div className="flex flex-col items-center justify-center lg:flex-row md:flex-col lg:items-center md:justify-center lg:justify-around p-5  ">
          <img
            src={Blob2}
            alt="blob"
            className="absolute left-0 top-10 lg:top-20 opacity-40 duration-2000 hidden lg:block w-1/2 lg:w-auto"
          />

          <img
            src={Blob2}
            alt="blob"
            className="absolute -right-0 top-20 opacity-30 duration-2000 hidden lg:block"
          />

          <img
            src={bannersection}
            alt="banner"
            className="w-full lg:w-auto mb-20"
            data-aos="fade-up"
            data-aos-duration="1500"
          />

          <div className="w-full lg:w-1/2 border-red-500">
            <h3
              className="text-3xl xl:text-5xl md:text-4xl mb-10 font-Lato-Bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Why Choose
              <span className="text-blue-primary font-Lato-Bold ">
                {" "}
                ProjectHub
              </span>{" "}
              for Your Development Projects?
            </h3>
            <p
              className="text-xl font-Lato-Light xl:text-2xl md:text-xl"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Your One-Stop Solution for Programming Projects. With support for
              various languages and frameworks, collaborate seamlessly, track
              progress effortlessly, and deliver outstanding results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicebanner;
