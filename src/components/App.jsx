import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { auth } from "../firebase"; // Import your initialized Firebase auth

import NavbarWithMegaMenu from "./Navigation";
import MainContainer from "./MainContainer";
import BacktoTop from "./Home/BacktoTop";
import Loader from "./Home/Loader";
import Home from "../routes/Home";
import Contactus from "../routes/Contactus";
import Footer from "../components/Footer";
import Services from "../routes/Services";
import About from "../routes/About";
import Inquiries from "../routes/Inquiries";

import { Nopage } from "./404/Nopage";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Set the user object
      } else {
        setUser(null); // No user signed in
      }
      setIsLoading(false); // Done loading
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const classNames = [
    "bg-gray-50",
    "overflow-x-hidden",
    "w-full",
    "h-full",
    "antialiased",
    "scroll-smooth",
    "scrollbar-thin",
    "scrollbar-thumb-transparent",
  ].join(" ");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="main">
      <div className="navigation">
        <NavbarWithMegaMenu />
      </div>
      <MainContainer className={classNames}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/about" element={<About />} />
          {user && user.email === "itsmepiglet05@gmail.com" ? (
            <Route path="/inquiries" element={<Inquiries />} />
          ) : (
            <Route path="/inquiries" element={<Nopage />} />
          )}
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer />
      </MainContainer>
      <BacktoTop />
    </div>
  );
};

export default App;
