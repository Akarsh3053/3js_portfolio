import {
  pydev,
  backend,
  creator,
  web,
  javascript,
  cpp,
  html,
  css,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Selenium",
    icon: selenium,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "Python",
    icon: python,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
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
