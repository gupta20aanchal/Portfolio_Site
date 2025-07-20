import React from 'react';
import { Github } from 'lucide-react';
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiGithub,
  SiMysql
} from 'react-icons/si';

export const portfolioData = {
  name: "Aanchal Gupta",
  title: "Software Developer & Technical Writer",
  shortBio: "I build elegant and efficient solutions for the web, blending development expertise with clear communication.",
  about: " Frontend Developer with practical experience in building responsive web and mobile applications using React and React Native. Adept at crafting user-centric interfaces and delivering scalable, maintainable code across platforms. Through multiple internships, I've contributed to real-world projects and strengthened my skills in JavaScript, C++, HTML, CSS, and Python. Also experienced in technical writing, translating complex ideas into clear, engaging content. Passionate about continuous learning and building impactful digital products.",
  contact: {
    email: "aanchalgupta675@gmail.com",
    linkedin: "https://www.linkedin.com/in/aanchal03gupta/",
    github: "https://github.com/gupta20aanchal",
    location: "Jaipur, India"
  },
  skills: [
    { name: 'JavaScript', icon: <SiJavascript className="w-16 h-16" /> },
    { name: 'React', icon: <SiReact className="w-16 h-16" /> },
    { name: 'React Native', icon: <SiReact className="w-16 h-16" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="w-16 h-16" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="w-16 h-16" /> },
    { name: 'Python', icon: <SiPython className="w-16 h-16" /> },
    { name: 'C++', icon: <SiCplusplus className="w-16 h-16" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-16 h-16" /> },
    { name: 'Firebase', icon: <SiFirebase className="w-16 h-16" /> },
    { name: 'Git', icon: <SiGit className="w-16 h-16" /> },
    { name: 'GitHub', icon: <SiGithub className="w-16 h-16" /> },
    { name: 'MySQL', icon: <SiMysql className="w-16 h-16" /> },
  ],
  experience: [
    {
      role: "Frontend Developer",
      company: "EniacWorld Media Pvt. Ltd.",
      period: "2025",
      description: "Applied front-end and back-end skills using HTML, CSS, JavaScript, React, Node.js, Express, and integrated databases to enhance website functionality.",
    },
    {
      role: "React Developer Intern",
      company: "Celebal Technologies",
      period: "2023",
      description: "Learned and independently built multiple projects using React, solidifying my understanding of modern frontend development.",
    },
    {
      role: "Web Developer Intern",
      company: "DentalHiFi",
      period: "2023",
      description: "Contributed to significant website improvements using React, focusing on enhancing functionality and user experience.",
    },
     {
      role: "Web Developer Intern",
      company: "Bharat Intern",
      period: "2022",
      description: "Honed my frontend skills by developing responsive layouts and user interfaces from scratch.",
    },
    {
      role: "Technical Content Writer Intern",
      company: "Unstop",
      period: "2022",
      description: "Authored over 15 informative articles on various technology topics, simplifying complex subjects for a wide audience.",
    },
  ],
  education: [
    {
      degree: "B.Tech, Computer Science",
      institution: "Jaipur Engineering College and Research Center",
      period: "2021 — 2025",
      details: [
          "CGPA: 8.71", 
          "Coursework: Data Structures, Algorithms, Web Development, Databases"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Subodh Public School",
      period: "2019 — 2021",
      details: [
          "Percentage: 90",
          "Group: Science and Mathematics"
      ]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Subodh Public School",
      period: "2009 — 2019",
      details: [
           "Percentage: 90"
      ]
    }
  ],
  projects: [
    {
      title: "Text Utils",
      description: "A feature-rich React application designed for real-time text analysis and transformation. It offers functionalities such as case conversion, whitespace optimization, clipboard operations, and dynamic text metrics including word count and estimated reading time, all wrapped in an intuitive and responsive interface.",
      tags: ["React", "Redux", "Tailwind CSS"],
      liveUrl: "https://textutils-wheat-eight.vercel.app/"
    },
    {
      title: "InsightBoard",
      description: "A dynamic and responsive data dashboard built to visualize key performance metrics and insights in real time. Designed with an intuitive UI, it presents data through interactive charts, tables, and filters, enabling users to make data-driven decisions effortlessly.",
      tags: ["React.js", "Chart.js / Recharts", "Tailwind CSS", "Node.js", "MongoDB"],
      liveUrl: "https://dashboarding-umber.vercel.app/dashboard",
    },
     {
      title: "To-Do-List",
      description: "A responsive To-Do List web application using HTML, CSS, and JavaScript to help users manage their daily tasks efficiently. The app allows users to add, delete, and mark tasks as complete in real-time, enhancing productivity through a simple and intuitive interface.",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://to-do-list-kohl-iota-12.vercel.app/",
    },
    {
      title: "FourierSketch",
      description: "FourierSketch is a creative visualization project that uses the power of Fourier Series to generate intricate, animated drawings from user-defined paths. By decomposing complex shapes into rotating vectors, it offers an engaging and mathematical way to reconstruct sketches through epicycles",
      tags: ["JavaScript", "HTML5 Canvas", "CSS3", " Math.js"],
      liveUrl: "https://fourierdrawings.vercel.app/",
    }
  ],
};
