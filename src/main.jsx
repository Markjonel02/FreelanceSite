import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const AosInitializer = () => {
  useEffect(() => {
    AOS.init();
    // Optionally you can specify dependencies array if necessary
    // Example: AOS.init({ once: true }); // or any other options
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return null; // Since this is just for initialization, return null
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <AosInitializer />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
