"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const prompts = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const TerminalUI = () => {
  return (
    <div className="border rounded hover:border-2 font-mono w-full p-5">
      <div id="menu" className="flex">
        <span
          id="red"
          className="relative lg:w-4 lg:h-4 w-3 h-3 rounded-full bg-gray-400 hover:bg-red-500 transition-all delay-75"
        ></span>
        <span
          id="red"
          className="relative lg:w-4 lg:h-4 w-3 h-3 rounded-full ml-2 bg-gray-500 hover:bg-yellow-400 transition-all delay-75"
        ></span>
        <span
          id="red"
          className="relative lg:w-4 lg:h-4 w-3 h-3 rounded-full ml-2 bg-zinc-600 hover:bg-green-500 transition-all delay-75"
        ></span>
      </div>
      <motion.div
        id="propmts"
        className="my-4 lg:my-16 break-words text-sm md:text-md lg:text-lg backdrop-filter-none"
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.p variants={prompts}>$ Parth.currentLocation</motion.p>
        <motion.p variants={prompts}>"Anand, Gujarat, India"</motion.p>
        <br />
        <motion.p variants={prompts}>$ Parth.contactInfo</motion.p>
        <motion.p variants={prompts} className="gray-gradient">
          [
          <a
            className="underline_animation"
            href="mailto:cparth495@gmail.com"
          >
            "cparth495@gmail.com"
          </a>
          ,
          <a
            className="underline_animation"
            href="https://www.linkedin.com/in/parthchauhan0702/"
            target="_blank"
          >
            {" "}
            "LinkedIn"
          </a>
          ,
          <a
            className="underline_animation"
            href="https://github.com/parthcodehub"
            target="_blank"
          >
            {" "}
            "Github"
          </a>
          ]
        </motion.p>
        <br />
        <motion.p variants={prompts}>$ Parth.interests</motion.p>
        <motion.p variants={prompts} className="">
          [ "Programming", "Deep Learning", "Mathematics", "Physics", "AI", "Web Development", "Software Engineering" ]
        </motion.p>
        <br />
        <motion.p variants={prompts}>$ Parth.skills</motion.p>
        <motion.p variants={prompts} className="">
          ["Python", "JavaScript", "TypeScript", "React", "React Native", "Next.js", "Flutter & Dart", "ExpressJS", "Firebase", "Tailwind CSS", "Git & GitHub"]
        </motion.p>
        <br />
        <motion.p variants={prompts}>$ Parth.currentInstitution</motion.p>
        <motion.p variants={prompts}>"Diploma , Anand, Gujarat, India"</motion.p>
      </motion.div>
    </div>
  );
};

TerminalUI.displayName = "TerminalUI";
export default TerminalUI;
