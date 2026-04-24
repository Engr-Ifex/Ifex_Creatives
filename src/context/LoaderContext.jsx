import { createContext, useContext, useEffect, useState } from "react";

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(true); // ✅ start as true

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // ⏱️ adjust timing here

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};