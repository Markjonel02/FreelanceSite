import NavbarWithMegaMenu from "./Navigation";
import MainContainer from "./MainContainer";
import { Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Contactus from "../routes/Contactus";
const App = () => {
  const Classname = ["bg-blue-gray-50", "w-full", "h-screen"].join(" ");
  return (
    <>
      <div className="navigation">
        <NavbarWithMegaMenu />
      </div>
      <div className="main">
        <MainContainer className={Classname}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contactus />}></Route>
          </Routes>
        </MainContainer>
      </div>
    </>
  );
};

export default App;
