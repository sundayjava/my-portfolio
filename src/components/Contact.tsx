import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../utils/motion";
import { useRef, useState } from "react";
import EarthCanvas from "./canvas/Earth";
import emailjs from "@emailjs/browser";
import StarsCanvas from "./canvas/ProfileCanvas";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_xg4n1bl",
          "template_a73hetf",
          formRef.current,
          "mUzHOzVIVAtiej1jg"
        )
        .then((result) => {
          console.log(result.text);
          alert("Email successfully Sent!");
          setLoading(false);
          if (formRef.current) {
            formRef.current.reset();
          }
        })
        .catch((error) => {
          setLoading(false);
          if (formRef.current) {
            formRef.current.reset();
          }
          console.error("Email sending failed:", error);
        })
        .finally(() => {
          setLoading(false);
          if (formRef.current) {
            formRef.current.reset();
          }
        });
    }
  };

  return (
    <motion.section
      id="contact"
      variants={staggerContainer("", "")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="lg:px-28 relative pb-10 z-20 xl:px-20 lg:mt-10 px-6 flex justify-center"
    >
      <div className="xl:flex-row  flex-col-reverse flex gap-10 overflow-hidden justify-center">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-1 dark:bg-gray-700 bg-gray-400 p-8 flex-col rounded-2xl justify-center flex w-full"
        >
          <h1 className="text-[3rem] text-gray-900 font-black font-comfortaa dark:text-gray-200 mb-[1rem] text-center mt-10">
            Contact Me
          </h1>
          <span className="p-[8px] font-[300]">
            Please fill out the form below to discuss any job opportunities
          </span>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8 z-10"
          >
            <input
              className="text-sm py-3 px-5 w-full bg-gray-800 dark:bg-gray-500 max-w-[40rem] m-[0.5rem 1rem] text-white border-none outline-none rounded-[0.5rem] dark:bg-gray-700 bg-gray-400"
              type="text"
              placeholder="Your Name"
              name="from_name"
            />
            <input
              className="text-sm py-3 px-5 w-full bg-gray-800 dark:bg-gray-500 max-w-[40rem] m-[0.5rem 1rem] text-white border-none outline-none rounded-[0.5rem] dark:bg-gray-700 bg-gray-400"
              type="email"
              placeholder="Your Email"
              name="from_email"
            />
            <textarea
              name="message"
              rows={5}
              className="text-sm py-3 px-5 w-full bg-gray-800 dark:bg-gray-500 max-w-[40rem] m-[0.5rem 1rem] text-white border-none outline-none rounded-[0.5rem] dark:bg-gray-700 bg-gray-400"
              placeholder="your Message"
            />

            <button
              type="submit"
              value="send"
              className="px-6 py-2 text-gray-900 font-semibold font-comfortaa dark:text-white border-2 border-gray-900 dark:border-gray-400 rounded-[10px]"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
          <StarsCanvas />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
