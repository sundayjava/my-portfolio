import { Tilt } from "react-tilt";
import StarsCanvas from "./canvas/ProfileCanvas";
import TypewriterComponent from "typewriter-effect";
import dav from "../assets/dav.png";
import pdf from "../assets/cv.pdf";
import { contactinfo } from "../utils/constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:flex lg:items-center lg:justify-center lg:flex-row sm:px-28 xl:px-20 lg:px-24 flex flex-col-reverse items-center justify-center px-4 lg:py-0 py-4"
    >
      <div className="flex-1 mt-10 lg:mt-0 flex flex-col items-center justify-center h-screen">
        <h1 className="sm:text-[30px] lg:text-[24px] xs:text-[26px] text-[19px]">
          I`m{" "}
          <span className="dark:text-yellow-900 text-gray-700 font-poppins font-black">
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
                "Springboot Backend Developer",
                "NextJs Developer",
                "ReactJs Developer",
                "Nodejs Developer",
                "Wordpress Developer",
              ],
            }}
          />
        </p>
        <p className="mt-5 font-comfortaa lg:px-14 px-0 font-light text-[16px] leading-7 lg:text-justify text-center dark:text-gray-200 text-gray-900">
          Sunday is a versatile and highly skilled Software Engineer, adept at
          building, and designing scalable and performant systems. Proven
          ability to translate architectures and designs into clean, and
          maintainable code using{" "}
          <b>Nextjs, Reactjs, Springboot, Nodejs & Wordpress </b>. Sunday has a
          strong track record of designing, building, deploying and hosting web,
          and backend services. He has collaborated with cross-functional teams
          to deliver high-quality products for manay companies.
        </p>
        <p className=" mt-7 font-comfortaa lg:px-14 px-0 font-light text-[16px] leading-7 lg:text-justify text-center dark:text-gray-200 text-gray-900">
          Sunday is well-versed in various programming languages like
          Javascript, Typescript, Java and other frameworks. His philosophy
          centers on creating innovative and cost-effective software solutions
          that go beyond just building software. Eager to apply experience in a
          fast-paced atmosphere and contribute to a company developing unique
          goods
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
            className="z-10 absolute top-0 left-0 right-0 bottom-0 m-auto dark:bg-gray-900 bg-gray-600 pt-3 w-[280px] h-[260px] rounded-[20px] img-anime"
          />
          <div className="z-20 absolute sm:bottom-40 bottom-28 rounded-[9px] sm:left-32 xl:left-56 left-32 lg:left-38 bg-gray-900 px-3 py-2 cursor-pointer flex gap-x-3 gap-y-2 items-center">
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
