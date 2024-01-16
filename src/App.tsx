import { useState } from "react";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Hero/>
        <Project/>
      </div>
    </div>
  );
};

export default App;
