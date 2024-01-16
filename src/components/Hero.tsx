import { Tilt } from "react-tilt";
import StarsCanvas from "./canvas/ProfileCanvas";
import TypewriterComponent from "typewriter-effect";
import dav from '../assets/dav.png'

const Hero = () => {
  return (
    <div className="lg:flex lg:items-center lg:justify-center lg:flex-row sm:px-28 xl:px-20 lg:px-24 flex flex-col-reverse items-center justify-center px-6 lg:py-0 py-4">
      <div className="flex-1 mt-10 lg:mt-0 flex flex-col items-center justify-center h-screen">
        <h1 className="sm:text-[30px] lg:text-[24px] xs:text-[26px] text-[19px]">
          I`m{" "}
          <span className="dark:text-yellow-900 text-gray-700 font-poppins font-black">
            Sunday David U.
          </span>
        </h1>
        <p className="flex items-center gap-7 font-semibold">
          -
          <TypewriterComponent
            options={{
              wrapperClassName: "text-[18px] font-comfortaa font-Comfortaa",
              autoStart: true,
              delay: 50,
              loop: true,
              strings: [
                "Software Engineer",
                "Fullstack Software Engineer",
                "ReactJs Developer",
                "Springboot Backend Developer",
                "Flutter Mobile Developer",
              ],
            }}
          />
        </p>
        <p className="mt-5 font-comfortaa lg:px-14 px-0 font-light text-[16px] leading-7 lg:text-justify text-center dark:text-gray-200 text-gray-900">
          Sunday is an experienced Software Engineer with years of experience in
          the Computer Software Industry. He specializes in{" "}
          <b>Reactjs, Springboot & Flutter/Dart </b> with a background in web
          technologies. Sunday has a strong track record of designing, building,
          deploying and hosting web, mobile, and other platform applications. He
          has collaborated with cross-functional teams to deliver high-quality
          products.
        </p>
        <p className=" mt-7 font-comfortaa lg:px-14 px-0 font-light text-[16px] leading-7 lg:text-justify text-center dark:text-gray-200 text-gray-900">
          Sunday is well-versed in various programming languages like
          Javascript, Typescript, Java and other frameworks, and is focused on
          Reactjs, Springboot & Flutter/Dart. His philosophy centers on creating
          innovative and cost-effective software solutions that go beyond just
          building software.
        </p>
      </div>
    
        <Tilt className="flex-1 flex justify-center items-center h-full w-full lg:mt-0 mt-16">
          <div className="bg-gray-700 rounded-[15px] lg:w-[95%] xl:w-[90%] sm:h-[550px] h-[400px] w-full relative">
            <img
            src={dav}
            alt="david-sunday"
            className="z-10 absolute top-0 left-0 right-0 bottom-0 m-auto dark:bg-gray-900 bg-gray-600 pt-3 w-[350px] h-[290px] rounded-[20px] img-anime"
            />
            <div className="z-20 absolute bottom-40 left-48 bg-gray-900 px-3 py-1 cursor-pointer">
              Facebook Whats
            </div>
            <StarsCanvas />
          </div>
        </Tilt>
      
    </div>
  );
};

export default Hero;
