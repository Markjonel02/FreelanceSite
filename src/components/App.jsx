import NavbarWithMegaMenu from "./Navigation";
import MainContainer from "./MainContainer";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <div className="navigation">
        <NavbarWithMegaMenu />
      </div>
      <div className="main">
        <MainContainer>
          <Routes>
            <Route></Route>
          </Routes>
        </MainContainer>
      </div>
    </>
  );
};

export default App;
