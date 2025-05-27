import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track the scroll position
    const handleScroll = () => {
      // Show the button if the user has scrolled down 100 pixels or more
      setIsVisible(window.scrollY > 100);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling animation
    });
  };

  return (
    <div className={!darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Hero />
        <Skills />
        <Project />
        <Contact />
        <Footer />
        <div>
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="bg-white text-gray-900 font-bold text-[14px] scroll-smooth p-5 rounded-[100%]"
              style={{ position: "fixed", bottom: "20px", right: "20px" }}
            >
              Top
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
