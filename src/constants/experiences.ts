type Experience = {
  title: string,
  company_name: string,
  icon: string,
  date: string,
  points: string[]
}

const experiences = [
  {
    title: "Python Programming",
    company_name: "Self-Learning",
    icon: "/assets/logo/rds.png",
    date: "September 2019 - January 2020",
    points: [
      "Began my programming journey with Python, focusing on fundamental concepts and problem-solving.",
    ],
  },
  {
    title: "Exploring Programming Languages",
    company_name: "Self-Learning",
    icon: "/assets/logo/rds.png",
    date: "February 2020 - December 2020",
    points: [
      "Explored C++ programming language to deepen my understanding of algorithmic problem solving.",
      "Took my first steps into web development with HTML, CSS, and JavaScript, focusing on front-end development.",
    ],
  },
  {
    title: "Projects and Skill Development",
    company_name: "Personal Projects",
    icon: "/assets/logo/rds.png",
    date: "January 2021 - January 2022",
    points: [
      "Built 'CovidCare', a React Native app providing essential COVID-19 information.",
      "Developed a Communication Through Visible Light (CTVL) device using Arduino and MicroPython for effective data communication.",
      "Mastered OpenCV through computer vision projects involving object detection and facial recognition.",
      "Created creative projects such as a Discord bot, text-to-speech conversion, and personal assistant applications.",
    ],
  },
  {
    title: "Diving into Robotics and Websites",
    company_name: "Personal Projects",
    icon: "/assets/logo/rds.png",
    date: "January 2022 - December 2022",
    points: [
      "Designed a production-level website for the college science club, improving online visibility and engagement.",
      "Delved into robotics, embedded systems programming, and Telegram bots to enhance automation projects.",
      "Built Flutter and React Native apps for seamless control of robotics projects.",
      "Worked on mathematical visualization projects to explain complex concepts interactively.",
    ],
  },
  {
    title: "Advanced Projects and Systems",
    company_name: "Personal Projects",
    icon: "/assets/logo/rds.png",
    date: "January 2023 - Present",
    points: [
      "Developed a Student Management System for my college administration, streamlining various processes.",
      "Engineered an intelligent learning bot powered by GPT-4 for advanced problem-solving and learning assistance.",
      "Explored self-driving car simulations using genetic algorithms to build autonomous systems.",
      "Studied deep learning through PyTorch and applied it to real-world AI applications.",
      "Created and deployed end-to-end MERN stack applications, honing full-stack development skills.",
      "Created 'TopsNet', an open-source project using the Zenodo API, leveraging AI to simplify complex research papers and enhance collaboration.",
    ],
  },
];

export { experiences };
export type { Experience };
