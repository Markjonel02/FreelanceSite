import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { LoadPageProvider } from "./context/LazyContext.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { PrimeReactProvider } from "primereact/api";

const AosInitializer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return null;
};

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <PrimeReactProvider>
        <LoadPageProvider>
          <AosInitializer />
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </LoadPageProvider>
      </PrimeReactProvider>
    </React.StrictMode>
  </BrowserRouter>
);
