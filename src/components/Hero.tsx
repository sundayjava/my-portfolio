import { Tilt } from "react-tilt";
import StarsCanvas from "./canvas/ProfileCanvas";
import TypewriterComponent from "typewriter-effect";
import dav from "../assets/dav1.jpg";
import pdf from "../assets/cv.pdf";
import { contactinfo } from "../utils/constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:flex lg:items-center lg:justify-center lg:flex-row sm:px-28 xl:px-20 lg:px-24 flex flex-col-reverse items-center justify-center px-4 lg:py-0 py-4"
    >
      <div className="flex-1 mt-10 lg:mt-20 flex flex-col items-center justify-center h-screen">
        <h1 className="sm:text-[30px] lg:text-[24px] xs:text-[26px] text-[19px]">
          I`m{" "}
          <span className="dark:text-gray-200 text-gray-700 font-poppins font-black">
            Sunday David U.
          </span>
        </h1>
        <p className="flex items-center gap-7 font-semibold">
          <TypewriterComponent
            options={{
              wrapperClassName: "text-[18px] font-comfortaa font-Comfortaa",
              autoStart: true,
              delay: 50,
              loop: true,
              strings: [
                "Fullstack Software Engineer",
                "Technical writter",
                "CMS Developer",
              ],
            }}
          />
        </p>
        <p className="mt-5 font-comfortaa lg:px-14 px-0 font-light text-[16px] leading-7 lg:text-justify text-center dark:text-gray-200 text-gray-900">
          Sunday is a versatile and results-driven Software Engineer with a passion for crafting scalable, high-performance applications. With hands-on experience in both frontend and backend development, he brings ideas to life through clean, maintainable, and efficient code. His core expertise spans across modern web and mobile technologies, including <b>Next.js, React.js, Vue.js, Nuxt.js, Node.js, React Native (CLI/Expo), and WordPress</b>.
        </p>
        <p className="mt-7 font-comfortaa lg:px-14 px-0 font-light text-[16px] leading-7 lg:text-justify text-center dark:text-gray-200 text-gray-900">
          Sunday is also highly proficient in tools and frameworks such as <b>Tailwind CSS, Git, Firebase, MongoDB, Express.js, and REST APIs</b>, enabling him to build full-stack applications from the ground up. He is fluent in programming languages like <b>JavaScript, TypeScript, and Rust</b>, and thrives in collaborative environments, having worked with cross-functional teams to deliver high-impact products across diverse industries.  
        </p>
        <p className="mt-7 font-comfortaa lg:px-14 px-0 font-light text-[16px] leading-7 lg:text-justify text-center dark:text-gray-200 text-gray-900">
          Guided by a problem-solving mindset and a drive for innovation, Sunday is committed to creating solutions that are not just functional, but meaningful and cost-effective. He’s eager to contribute his experience and energy to teams building next-generation digital experiences in fast-paced, forward-thinking environments.
        </p>

        <div className="flex justify-start items-center sm:gap-10 gap-3 mt-4 sm:mt-8 lg:mt-10">
          <a href="#contact">
            <button className="px-6 py-2 bg-gray-900 dark:bg-gray-600 text-white rounded-[10px]">
              Hire me
            </button>
          </a>
          <button
            className="px-6 py-2 text-gray-900 font-semibold font-comfortaa dark:text-white border-2 border-gray-900 dark:border-gray-400 rounded-[10px]"
            onClick={() => window.open(pdf, "_blank")}
          >
            Resume
          </button>
        </div>
      </div>

      <Tilt className="flex-1 flex justify-center items-center h-full w-full lg:mt-0 mt-16">
        <div className="bg-gray-700 rounded-[15px] sm:w-[75%] lg:w-[95%] xl:w-[90%] sm:h-[550px] h-[400px] w-full relative">
          <img
            src={dav}
            alt="david-sunday"
            className="z-10 absolute object-cover top-0 left-0 right-0 bottom-0 m-auto dark:bg-gray-900 bg-gray-600 pt-3 w-[280px] h-[260px] rounded-[20px] img-anime"
          />
          <div className="z-20 absolute sm:bottom-40 bottom-28 rounded-[9px] sm:left-32 xl:left-60 left-32 lg:left-38 bg-gray-900 px-3 py-2 cursor-pointer flex gap-x-3 gap-y-2 items-center">
            {contactinfo.map((contact, index) => (
              <a href={contact.url} target="_blank" key={index}>
                <img
                  src={contact.pic}
                  alt={`link${contact.url}`}
                  className=" w-[12px] h-[13px] sm:w-[14px] sm:h-[14px] cursor-pointer"
                />
              </a>
            ))}
          </div>
          <StarsCanvas />
        </div>
      </Tilt>
    </section>
  );
};

export default Hero;
