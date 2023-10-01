"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  // const { ref } = useSectionInView("About");
  return (
    <motion.section
      // ref={ref}
      className="max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        As a highly skilled computer science student, I have extensive
        experience in{" "}
        <span className="font-medium">
          JavaScript, TypeScript, React/React Native, CSS, HTML, Tailwind,
          Bootstrap and more
        </span>
        . I am also familiar with{" "}
        <span className="font-medium">
          Python, Java, Expo, OCaml, MySQL, and Verilog
        </span>
        .{" "}
        <span className="underline">
          I am currently seeking a challenging role
        </span>{" "}
        where I can apply my skills and knowledge to develop innovative
        solutions and work collaboratively with top experts in the field. I am
        known for my{" "}
        <span className="font-medium">analytical problem-solving skills</span>{" "}
        and my ability to deliver results on time. I have a track record of
        developing{" "}
        <span className="font-medium">high-quality, scalable applications</span>{" "}
        that meet the needs of users and businesses alike. In addition, I
        possess{" "}
        <span className="font-medium">exceptional communication skills</span>{" "}
        and am able to work effectively in both team and individual settings. If
        you are looking for a talented and dedicated developer to join your
        team, I would love to hear from you!
      </p>
    </motion.section>
  );
}
