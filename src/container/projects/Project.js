import styles from './css/project.module.scss';

import LeftSideProject from './leftAlignedProject/Project';
import RightProjects from './rightAlignedProject/Project';

import e_commerceImg from './img/ecommerceProject.JPG';
import weChatImg from './img/weChatProject.JPG';

import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { FaRegLightbulb } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';

const Projectscreen = () => {
  return (
    <div id="projects">
      <h1 className={styles.s__heading}>
        <FaRegLightbulb
          color="cyan"
          style={{ marginRight: '1rem' }}
          size={30}
        />
        My Projects
      </h1>

      <h1 className={`${styles.s__desc}`}>
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </h1>
      <LeftSideProject
        name="We-Chat App"
        info="Chatting website where you can talk to other registered users with excellent features. Tech stach used for this is: "
        image={weChatImg}
        link={'https://wechat-app.vercel.app'}
        icon={<SiNextdotjs />}
        icon1={<SiFirebase />}
        icon2={<SiMongodb />}
        icon3={<SiRedux />}
        iconName="NextJs"
        iconName1="Firebase"
        iconName2="Mongodb"
        iconName3="Recoil"
      />
      <RightProjects
        name="E-commerce Website"
        info="An e-commrece website which can take payments, Can register Users, Has a Cart. Tech Stack used for this is:"
        image={e_commerceImg}
        link={'https://e-commerce-frontend-grb0.onrender.com/'}
        icon={<FaReact />}
        icon1={<FaNodeJs />}
        icon2={<SiMongodb />}
        icon3={<SiRedux />}
        iconName="react"
        iconName1="Nodejs"
        iconName2="Mongodb"
        iconName3="Redux"
      />
    </div>
  );
};

export default Projectscreen;
