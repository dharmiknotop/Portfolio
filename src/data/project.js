import weChatImg from "./img/weChatProject.JPG";
import e_commerceImg from "./img/ecommerceProject.JPG";
import LyricsProject from "./img/lyristProject.jpg";

import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiFirebase,
  SiRedux,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiGraphql,
  SiTailwindcss,
} from "react-icons/si";

export let weChatProject = {
  name: "We-Chat App",
  info: "Chatting website where you can talk to other registered users with excellent features. Tech stach used for this is: ",
  image: weChatImg,
  link: "https://wechat-app.vercel.app",

  techIcon: [
    { name: "NextJs", icon: <SiNextdotjs /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Recoil", icon: <SiRedux /> },
    { name: "Mongodb", icon: <SiMongodb /> },
  ],
};

export let eCommerceProject = {
  name: "E-commerce Website",
  info: "An e-commrece website which can take payments, Can register Users, Has a Cart. Tech Stack used for this is:",
  image: e_commerceImg,
  link: "https://e-commerce-frontend-grb0.onrender.com/",

  techIcon: [
    { name: "ReactJs", icon: <FaReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Nodejs", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Mongodb", icon: <SiMongodb /> },
  ],
};

export let lyristProjectsda = {
  name: "Lyrist App",
  info: "Website to get lyrics for your favourite song. A simple web application I created to have hands on practice with GraphQl",
  image: LyricsProject,
  link: "https://lyrist-pi.vercel.app/",

  techIcon: [
    { name: "NextJs", icon: <SiNextdotjs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Nodejs", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "GraphQl", icon: <SiGraphql /> },
  ],
};
