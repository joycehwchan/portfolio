import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "TabiNow",
    description: "A few clicks to generate and customize travel itineraries.",
    link: "https://tabinow.tours/",
    github: "https://github.com/joycehwchan/tabinow",
    category: "web",
    used: "HTML/Sass, Javascript, Ruby on Rails, Devise, Pundit, APIs, Cloudinary, Mapbox, Figma",
  },
  {
    id: 2,
    image: Work2,
    title: "MinaNoka",
    description: "Rent a farming field to experience rural Japan.",
    link: "",
    github: "https://github.com/joycehwchan/minanoka",
    category: "web",
    used: "HTML/CSS, Bootstrap, Ruby on Rails, Devise, Cloudinary, Mapbox, Figma",
  },
  {
    id: 3,
    image: Work3,
    title: "Memory Game",
    description: "Click on all characters only once!",
    link: "https://joycehwchan.github.io/memory-game/",
    github: "https://github.com/joycehwchan/memory-game",
    category: "fun",
    used: "React, CSS",
  },
  {
    id: 4,
    image: Work4,
    title: "OnTrack",
    description: "Find the right mentor to get your career On Track.",
    link: "https://www.figma.com/proto/1EKelARAwncltUYDV1bhyF/OnTrack?node-id=69%3A2604&scaling=scale-down&page-id=69%3A2574&starting-point-node-id=69%3A2604&hide-ui=1",
    github: "",
    category: "design",
    used: "Figma",
  },
  {
    id: 5,
    image: Work5,
    title: "Muvie",
    description: "Buy and share digital movie tickets with your friends.",
    link: "https://www.figma.com/proto/0v75ojAIQkhzLjeSeVL1HO/Muvie?node-id=401%3A5069&scaling=scale-down&starting-point-node-id=615%3A14010&hide-ui=1",
    github: "",
    category: "design",
    used: "Figma",
  },
];

export const projectsNav = [
  { name: "all" },
  { name: "web" },
  { name: "design" },
  { name: "fun" },
];
