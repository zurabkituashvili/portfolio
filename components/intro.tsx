"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={"https://i.ibb.co/XtRwsZs/IMG-3282.jpg"}
              alt="myimage"
              width="192"
              height="192"
              quality="99"
              priority={true}
              className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-6xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.9,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Zurab.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience building{" "}
        <span className="font-bold">high-quality, scalable applications</span>{" "}
        using <span className="underline">React (Next.js)</span> and{" "}
        <span className="font-bold">JavaScript/TypeScript</span>. Although I
        have experience in <span className="font-bold">many </span>other fields{" "}
        as well. If you're looking for a{" "}
        <span className="font-bold">talented and dedicated developer</span>,
        look no further!
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center
       justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href={"#contact"}
          className=" group bg-gray-900 text-white px-7
          py-3 flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110
         hover:bg-gray-950 active:scale-105
         transition"
        >
          contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
          focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href="/Zurab_Kituashvili_CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]
          focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition 
          cursor-pointer border border-black/10"
          href="https://www.linkedin.com/in/zurab-kituashvili-b61aa9273/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]
        focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition
         cursor-pointer border border-black/10"
          href="https://github.com/zurabkituashvili"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
