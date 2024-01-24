import { technologies } from "../utils/constants";
import { staggerContainer } from "../utils/motion";
import BallCanvas from "./canvas/Ball";
import {motion} from 'framer-motion'

const Skills = () => {
  return (
    <motion.section
    id="skill"
    variants={staggerContainer("","")}
    initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.17 }}
    className="mb-10 lg:mx-10 mx-2 rounded-[10px] relative bg-gray-700 flex py-8 flex-col gap-7 items-center scroll-pt-10"
    >
      <h1 className="text-[24px] font-black font-comfortaa uppercase text-gray-300">Tech Stack</h1>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </motion.section>
  );
};

export default Skills;
