"use client";

import Link from "next/link";
import SocialIcons from "@src/components/Socials/SocialIcons";
import { Button } from "@src/components/ui/button";
import { motion } from "framer-motion";
import LottieAnimation from "@src/components/Header/LottieAnimation";

type Props = {};

const motionProps = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { type: "spring", damping: 10, stiffness: 200, duration: 0.4 },
};

export default function Header({}: Props) {
  return (
    <div className="flex w-full justify-around my-10 lg:my-32">
      <div className="flex flex-col justify-between">
        <div>
          <motion.div className="text-2xl flex" {...motionProps}>
            <motion.div>Hi there!</motion.div>
            <motion.div
              className="text-2xl ml-2"
              animate={{ rotate: 60 }}
              transition={{
                ease: "linear",
                duration: 0.5,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <span role="img" aria-label="Wave">
                👋
              </span>
            </motion.div>
          </motion.div>
          <motion.h1
            className="head_text"
            {...motionProps}
            transition={{ delay: 0.1 }}
          >
            I&apos;m <span className="sweep-hover-animation">Rudrodip Sarker</span>
          </motion.h1>
          <motion.p
            className="desc"
            {...motionProps}
            transition={{ delay: 0.2 }}
          >
            I love creating web and mobile apps,{" "}
            <a
              href="https://github.com/rudrodip/student-management-api"
              target="_blank"
              className="gray_gradient underline_animation"
            >
              backend systems
            </a>
            , python scripts for automation, and even getting into{" "}
            <a
              href="https://github.com/rudrodip/AquaRover"
              target="_blank"
              className="gray_gradient underline_animation"
            >
              embedded system programming
            </a>{" "}
            with c++ and{" "}
            <a
              href="https://youtu.be/uYZytPxzjsk"
              target="_blank"
              className="gray_gradient underline_animation"
            >
              robotics
            </a>
            ! Right now, I&apos;m learning about machine learning and AI,
            specifically neural networks.
          </motion.p>
        </div>
        <motion.div
          className="text-2xl"
          {...motionProps}
          transition={{ delay: 0.3 }}
        >
          <motion.div>
            <Button asChild variant="outline">
              <Link href="/#contact">Get in touch</Link>
            </Button>
          </motion.div>
          <SocialIcons />
        </motion.div>
      </div>
      <div className="svg absolute -z-10 opacity-10 lg:relative lg:z-0 lg:opacity-100">
        <LottieAnimation />
      </div>
    </div>
  );
}
