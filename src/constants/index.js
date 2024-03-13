import {
  pydev,
  backend,
  creator,
  web,
  javascript,
  cpp,
  typescript,
  next,
  reactjs,
  selenium,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  docker,
  photopix,
  linux,
  insight,
  flappyAI,
  IRIS,
  AutoBot,
  OwlDone,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Python Programming",
    icon: pydev,
  },
  {
    title: "AI & Data Analysis",
    icon: backend,
  },
  {
    title: "Cyber Security",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Selenium",
    icon: selenium,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "OwlDone",
    description:
      "OwlDone is a next and react-based web app that can be used as a collaborative SAAS platform for project management and task planning, increasing team's productivity.",
    tags: [
      {
        name: "next-JS",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: OwlDone,
    source_code_link: "https://github.com/Akarsh3053/OwlDone",
  },
  {
    name: "AutoBot",
    description:
      "This interactive Web-based AutoML app can train machine learning models with minimum effort, allowing users to develop Machine Learning apps quickly.",
    tags: [
      {
        name: "AutoML",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "PyCaret",
        color: "pink-text-gradient",
      },
    ],
    image: AutoBot,
    source_code_link: "https://github.com/Akarsh3053/AutoBot",
  },
  {
    name: "IRIS",
    description:
      "It is a Computer Vision application that can be used to  deploy Computer vision tools that can harness the power of existing camera systems by automating tracking and logging.",
    tags: [
      {
        name: "computer-vision",
        color: "blue-text-gradient",
      },
      {
        name: "YOLO v8",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: IRIS,
    source_code_link: "https://github.com/Akarsh3053/IRIS",
  },
  {
    name: "Insight",
    description:
      "A collection of OSINT tools written in python that can be used through python-CLI for profiling and foot-printing, these tools can streamline process of information gathering.",
    tags: [
      {
        name: "web-scrapping",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "OSINT",
        color: "pink-text-gradient",
      },
    ],
    image: insight,
    source_code_link: "https://github.com/Akarsh3053/INSIGHT",
  },
  {
    name: "PhtoPIX",
    description:
      "PhotoPIX is a visually stunning and user-friendly front-end for phtography portfolio. The website features a sleek and modern design with a minimalist aesthetic UI.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: photopix,
    source_code_link: "https://github.com/Akarsh3053/PhotoPIX",
  },
  {
    name: "Flappy Bird AI",
    description:
      "An artificial intelligence agent that can learn to play the popular mobile game Flappy Bird using the NEAT algorithm, using neural networks that control the in-game character.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
      {
        name: "NEAT-python",
        color: "pink-text-gradient",
      },
    ],
    image: flappyAI,
    source_code_link: "https://github.com/Akarsh3053/Flappy-Bird-AI",
  },
];

export { services, technologies, projects };
