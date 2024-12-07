import type { Experience } from "@/types";

export const experiencesConfig: Experience[] = [
  {
    title: "Full Stack Web Developer",
    employmentType: "Freelancer",
    company: {
      name: "Personal Portfolio",
      url: "https://parthdev.vercel.app",
    },
    location: { name: "Remote" },
    start: "March, 2023",
    end: "Present",
    description: [
      "Created a web-based application for a tours and travels company using modern web technologies like JavaScript, TypeScript, React, and Angular.",
      "Integrated security features and high-level authentication, including Google Sign-In functionality.",
      "Developed a personal portfolio website to showcase skills and projects using advanced UI libraries such as Aceternity UI and Magic UI.",
      "Familiar with AWS and Docker for deploying and managing applications.",
    ],
  },
  {
    title: "Database Developer Intern",
    employmentType: "Internship",
    company: {
      name: "Infonaya Softwares",
      url: "https://infonaya.com",
    },
    location: { name: "Remote" },
    start: "2022",
    end: "2023",
    description: [
      "Managed and maintained relational databases, ensuring optimal performance, security, and data integrity.",
      "Developed and optimized database structures, schemas, and queries to meet business requirements.",
      "Implemented backup and recovery strategies to safeguard data and minimize downtime.",
      "Conducted regular database performance tuning and optimization to improve efficiency and scalability.",
      "Collaborated with cross-functional teams to analyze database requirements and implement solutions aligned with business objectives.",
    ],
  },
];
