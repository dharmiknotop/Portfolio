import weChatImg from './img/weChatProject.JPG';
import e_commerceImg from './img/ecommerceProject.JPG';

import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';

export let weChatProject = {
  name: 'We-Chat App',
  info: 'Chatting website where you can talk to other registered users with excellent features. Tech stach used for this is: ',
  image: weChatImg,
  link: 'https://wechat-app.vercel.app',
  icon: <SiNextdotjs />,
  icon1: <SiFirebase />,
  icon2: <SiMongodb />,
  icon3: <SiRedux />,
  iconName: 'NextJs',
  iconName1: 'Firebase',
  iconName2: 'Mongodb',
  iconName3: 'Recoil',
};

export let eCommerceProject = {
  name: 'E-commerce Website',
  info: 'An e-commrece website which can take payments, Can register Users, Has a Cart. Tech Stack used for this is:',
  image: e_commerceImg,
  link: 'https://e-commerce-frontend-grb0.onrender.com/',
  icon: <FaReact />,
  icon1: <FaNodeJs />,
  icon2: <SiMongodb />,
  icon3: <SiRedux />,
  iconName: 'react',
  iconName1: 'Nodejs',
  iconName2: 'Mongodb',
  iconName3: 'Redux',
};
