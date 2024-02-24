import {
  email,
  fb,
  gt,
  ig,
  ln,
  wt,
  x,
  java,
  springboot,
  others,
  javascript,
  typescript,
  tailwind,
  reactjs,
  book,
  expense,
  findme,
  goggl,
  hoob,
  portfolio,
  node
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "About me",
  },
  {
    id: "skill",
    title: "Skills",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const contactinfo = [
  { pic: email, url: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sundaydavidudoekong@gmail.com" },
  { pic: fb, url: "https://web.facebook.com/bianca.sunny.397/" },
  { pic: gt, url: "https://github.com/sundayjava" },
  { pic: ig, url: "https://www.instagram.com/sundaydavidudoekong/" },
  { pic: ln, url: "https://www.linkedin.com/in/sunday-udoekong-951369266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { pic: wt, url: "https://wa.me/message/OHCJXEQFXCUOB1" },
  { pic: x, url: "https://x.com/Sunday_David_U?t=LImnpTdP5uy4-oRw90M8vA&s=09" },
];

export const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: "Springboot",
    icon: springboot,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Others",
    icon: others,
  },
];

export const projects = [
  {
    name: "Goggl",
    description:
      "Web application that generate up-to-date news all over the world, and also support search functionality using Rapi-API",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapid api",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: goggl,
    source_code_link: "https://news-app-rapidapi.vercel.app",
  },
  {
    name: "Book Library",
    description:
      "Web-based platform that allows users to search for books using api, and manage books in the shelf, providing a convenient and efficient solution for e-library systems.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "context api",
        color: "pink-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "okta",
        color: "pink-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://book-shop-lib.vercel.app/",
  },
  {
    name: "Hoobank",
    description:
      "A simple design that showcase the features of a small bank called hoobank. It has all the components and design like the card section etc. It is just a UI/UX",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Others",
        color: "pink-text-gradient",
      },
    ],
    image: hoob,
    source_code_link: "https://react-responsive-ui.vercel.app",
  },
  {
    name: "3D Portfolio",
    description:
      "A simple design that describe someones proffession using three js and other components",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://3d-portfolio-eight-lake.vercel.app",
  },
  {
    name: "Expense tracker",
    description:
      "A comprehensive we application that allows users to track their day-to-day expenses, and also offers acurated statistic chart for comparison.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "context-api",
        color: "pink-text-gradient",
      },
    ],
    image: expense,
    source_code_link: "https://daily-expense-check.vercel.app",
  },
  {
    name: "Nodejs Auth Server",
    description:
      "A comprehensive server application that allows users to register and login to their platform, and also offers acurated statistic chart for comparison.",
    tags: [
      {
        name: "Node",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Json web token",
        color: "pink-text-gradient",
      },
    ],
    image: node,
    source_code_link: "https://airclickpay-server.onrender.com",
  },
];
