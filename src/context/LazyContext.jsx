import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

export const LazyContext = createContext();
export const useLazyContext = () => {
  const context = useContext(LazyContext);
  if (!context) {
    throw new Error("useLazyContext must be used within a LoadPageProvider");
  }
  return context;
};
export const LoadPageProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  }, []);

  return (
    <LazyContext.Provider value={{ isLoading }}>
      {children}
    </LazyContext.Provider>
  );
};

LoadPageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
