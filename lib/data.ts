import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import reviewMeApp from "@/public/review-me-app.png";
import chat from "@/public/chat.png";
import shooter from "@/public/shooter.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ReviewMeApp",
    description:
      "I worked as a full-stack developer on this startup project. Users can register, create posts, interact and so on.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Clerk", "shadcn"],
    imageUrl: reviewMeApp,
    link: "https://review-me-app.vercel.app/",
  },
  {
    title: "ChatApp",
    description:
      "A chat app that allows multiple users to chat in real-time. It uses Socket.io",
    tags: ["React", "TypeScript", "Node.js", "Bootstrap", "Socket.io", "SQL"],
    imageUrl: chat,
    link: "https://frontend-chat-sigma.vercel.app/",
  },
  {
    title: "ShooterGame",
    description:
      "A shooter game that allows users to shoot and kill enemies. All the scores are being recorded on a leaderboard. Players can rejoin anytime they want!",
    tags: ["React", "Node.js", "SQL", "Bootsstrap", "Socket.io"],
    imageUrl: shooter,
    link: "https://shooter-76iv.onrender.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
