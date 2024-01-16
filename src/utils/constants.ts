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
  quote,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
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
    name: "Findme",
    description:
      "Web application that facilitate real-time communication between users, create rooms or classes and add others users for a group communication as well",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chatengine.io",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: findme,
    source_code_link: "https://findme-chat.netlify.app",
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
    name: "Quote generator",
    description:
      "A small web application that uses adviceslip api to fetch advices every time the website is launch. It also serve as a daily motivation that helps users to boost their daily activities by giving the heart touching quote",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      }
    ],
    image: quote,
    source_code_link: "https://quote-gen-daily.vercel.app",
  },
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
];
