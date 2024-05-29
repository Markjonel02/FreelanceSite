import NavbarWithMegaMenu from "./Navigation";
import MainContainer from "./MainContainer";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import BacktoTop from "./Home/BacktoTop";
import Loader from "./Home/Loader";
import { useLazyContext } from "../context/LazyContext";
import Home from "../routes/Home";
import Contactus from "../routes/Contactus";
import Footer from "../components/Footer";
import Services from "../routes/Services";
import News from "./Api/News";
const App = () => {
  const { isLoading } = useLazyContext();
  const Classname = [
    "bg-gray-50",
    "overflow-x-hidden",
    "w-full",
    "h-full",
    "antialiased",
    "scroll-smooth",
    "scrollbar-thin",
    "scrollbar-thumb-transparent",
  ].join(" ");

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {isLoading ? (
        <>
          <div className="navigation">
            <NavbarWithMegaMenu />
          </div>
          <div className="main">
            <MainContainer className={Classname}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contactus />} />
                <Route path="/news" element={<News />} />
              </Routes>
              <Footer />
            </MainContainer>
          </div>
          <BacktoTop />
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </>
  );
};

export default App;
