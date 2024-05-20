import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { LoadPageProvider } from "./context/LazyContext.jsx";
const AosInitializer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return null;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <LoadPageProvider>
        <AosInitializer />
        <PrimeReactProvider>
          <App />
        </PrimeReactProvider>
      </LoadPageProvider>
    </React.StrictMode>
  </BrowserRouter>
);
