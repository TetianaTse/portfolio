import {
  IoMdLaptop,
  IoIosColorPalette,
  IoIosGitBranch,
  IoLogoHtml5,
  IoMdHome,
  IoLogoJavascript,
  IoMdPerson,
  IoMdApps,
  IoIosOptions
} from "react-icons/io";

export const Socials = [
  {
    key: 10,
    name: "GitHub",
    src: "/assets/github.svg",
    link: "https://github.com/TetianaTse",
  },
  {
    key: 11,
    name: "Linkedin",
    src: "/assets/linkedin.svg",
    link: "https://www.linkedin.com/in/tetiana-tsegichko-71a033164/",
  },
  {
    key: 12,
    name: "Telegram",
    src: "/assets/telegram.svg",
    link: "https://t.me/tetianatsegichko",
  },
  {
    key: 14,
    name: "Instagram",
    src: "/assets/instagram.svg",
    link: "https://www.instagram.com/tetianatsegichko",
  },
];

export const NavLinks = [
  {
    key: 1,
    name: "Home",
    icon: IoMdHome,
    link: "/",
  },
  {
    key: 2,
    name: "About me",
    icon: IoMdPerson,
    link: "/about-me",
  },
  {
    key: 3,
    name: "Projects",
    icon: IoMdApps,
    link: "/my-projects",
  },
];

export const ProImages = [
  {
    src: "/assets/projects/01.jpg",
    link: "https://github.com/TetianaTse/gta6",
  },
  {
    src: "/assets/projects/02.jpg",
    link: "https://tetianatse.github.io/growfy/",
  },
  {
    src: "/assets/projects/03.jpg",
    link: "https://tetianatse.github.io/HomeServices_adaptive/dist/",
  },
  {
    src: "/assets/projects/04.jpg",
    link: "https://github.com/TetianaTse/web_store",
  },
];

export const ProImages2 = [
  {
    src: "/assets/projects/05.jpg",
    link: "https://tetianatse.github.io/wedding/",
  },
  {
    src: "/assets/projects/06.jpg",
    link: "https://github.com/TetianaTse/todos_app",
  },
  {
    src: "/assets/projects/07.jpg",
    link: "https://github.com/TetianaTse/StarWars",
  },
  {
    src: "/assets/projects/08.jpg",
    link: "https://github.com/TetianaTse/netflix",
  },
];


export const ServiceData = [
  {
    icon: IoLogoJavascript,
    title: "Programming languages",
    content: ["JavaScript", "TypeScript", "Python"],
    backgroundImage: "/assets/space/01.webp",
  },
  {
    icon: IoMdLaptop,
    title: "Libraries and frameworks",
    content: ["React", "Next.js", "Redux", "Redux toolkit"],
    backgroundImage: "/assets/space/02.webp",
  },
  {
    icon: IoLogoHtml5,
    title: "Layout and stylization",
    content: ["HTML", "CSS", "SASS/SASS"],
    backgroundImage: "/assets/space/03.webp",
  },
  {
    icon: IoIosGitBranch,
    title: "Project management and design",
    content: ["Git/Github", "Figma"],
    backgroundImage: "/assets/space/04.webp",
  },
  {
    icon: IoIosColorPalette,
    title: "CSS frameworks",
    content: ["TailwindCSS", "AntDesign", "Bootstrap"],
    backgroundImage: "/assets/space/05.webp",
  },
  {
    icon: IoIosOptions,
    title: "Assembly & Automation Systems",
    content: ["Vite", "Webpack", "Gulp"],
    backgroundImage: "/assets/space/06.webp",
  },
];