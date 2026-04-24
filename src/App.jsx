import React from "react";
import { useLoader } from "./context/LoaderContext";
import Loader from "./components/ui/Loader";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contacts";

const App = () => {
  const { loading } = useLoader();
  return (
    <>
      {loading && <Loader />}
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Contact/>
    </>
  );
};

export default App;
