import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import { projects } from "../utils/constants";
import { Tilt } from "react-tilt";
import { gt, globe } from "../assets";

const ProjectCard = (project: any, index: any) => {
  const { name, description, tags, image, source_code_link } = project;

  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className=" dark:bg-gray-800 bg-gray-400 p-5 rounded-2xl sm:w-[360px] w-full scroll-pt-10"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-5">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full hover:bg-green-700 justify-center flex items-center cursor-pointer"
            >
              <img
                src={globe}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() =>
                window.open("https://github.com/sundayjava", "_blank")
              }
              className="black-gradient w-10 h-10 rounded-full justify-center flex items-center cursor-pointer"
            >
              <img
                src={gt}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-gray-800 dark:text-gray-300 font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap justify-center items-center gap-2">
          {tags.map((tag: any) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

const Project = () => {
  return (
    <motion.section
    id="project"
      variants={staggerContainer("", "")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-8 sm:px-28 xl:px-20 lg:px-24 flex flex-col items-center justify-center px-4 "
    >
      <motion.div variants={textVariant("")}>
        <p className="sm:text-[28px] text-[20px] dark:text-gray-300 text-gray-900 font-poppins font-bold uppercase tracking-wider">
          My Work
        </p>
      </motion.div>
      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-center text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to repository and live demos in it. It reflects my ability to
          solve complex problems, work with differnt technologies, and manage
          projects effectively
        </motion.p>
      </div>
      <div className="mt-10 flex flex-wrap gap-7 justify-center items-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Project;
