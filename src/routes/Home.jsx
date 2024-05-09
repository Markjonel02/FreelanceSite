import { useEffect, useState } from "react";

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
      <div className="relative flex flex-col md:flex-row justify-center w-full h-full">
        {/* Left side content */}
        <div className="order-2 md:order-1 text-container w-full md:w-1/2 h-full">
          <div className="flex justify-center  items-center  md:h-full">
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-Lato-Black">
                <h1>Welcome to</h1>
                <span className="text-blue-primary Capitalize">
                  Project <span className={SelectedSpancolor}>Hub</span>
                </span>
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-Lato-Light">
                <div className="flex flex-col mt-5">
                  <p className="text-lg md:text-xl lg:text-xl mb-auto">
                    Where ideas ignite! Collaborate, organize, and conquer.
                  </p>
                  <p className="text-lg md:text-xl lg:text-xl mt-auto">
                    <span className="block md:inline">
                      Let's make your projects happen
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
