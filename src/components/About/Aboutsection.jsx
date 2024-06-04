import Code from "../../assets/images/code.svg";
const Aboutsection = () => {
  return (
    <>
      <div className="relative">
        <img src={Code} alt="Your Image" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-3">
          <div className="text-white text-center">
            <h2 className="text-3xl font-Lato-Black xl:text-6xl mb-2">
              Who we are?
            </h2>
            <div className="flex flex-col md:flex-row justify-center ">
              <div className="md:w-1/2">
                <p className="text-lg md:text-xl xl:text-2xl lg:text-xl">
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
