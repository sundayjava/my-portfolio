import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../utils/motion";
import { useRef, useState } from "react";
import EarthCanvas from "./canvas/Earth";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (formRef.current) {
      setLoading(true)
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
          e.target.reset();
        })
        .catch((error) => {
          setLoading(false);
          console.error("Email sending failed:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <motion.section
      variants={staggerContainer("", "")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="lg:px-28 xl:px-20 px-6"
    >
      <div className="xl:flex-row flex-col-reverse flex gap-10 overflow-hidden justify-center">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-1 bg-black-100 p-8 flex-col rounded-2xl justify-center flex w-full"
        >
          <h1 className="text-[3rem] mb-[1rem]">Contact Me</h1>
          <span className="p-[1rem] font-[300]">
            Please fill out the form below to discuss any job opportunities
          </span>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <input
              className="text-sm w-full max-w-[40rem] m-[0.5rem 1rem] text-white border-none rounded-[0.5rem] dark:bg-gray-700 bg-gray-400"
              type="text"
              placeholder="Your Name"
              name="from_name"
            />
            <input
              className="text-sm w-full max-w-[40rem] m-[0.5rem 1rem] text-white border-none rounded-[0.5rem] dark:bg-gray-700 bg-gray-400"
              type="email"
              placeholder="Your Email"
              name="from_email"
            />
            <textarea
              name="message"
              rows={5}
              className="text-sm w-full max-w-[40rem] m-[0.5rem 1rem] text-white border-none rounded-[0.5rem] dark:bg-gray-700 bg-gray-400"
              placeholder="your Message"
            />
            <button
              type="submit"
              value="send"
              className=" bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
