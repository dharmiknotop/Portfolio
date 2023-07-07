import React from 'react';
import LeftSideProject from './Projects/Projects';
import RightProjects from './Projects/rightSideProject/RightProject';
import styles from './css/projectScreen.module.scss';

import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { FaRegLightbulb } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';

import e_commerceImg from './Projects/img/ecommerceProject.JPG';
import weChatImg from './Projects/img/weChatProject.JPG';

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
        projectName="We-Chat App"
        projectInfo="Chatting website where you can talk to other registered users with excellent features. Tech stach used for this is: "
        projectImage={weChatImg}
        projectLink={'https://wechat-app.vercel.app'}
        projectIcon={<SiNextdotjs />}
        projectIcon1={<SiFirebase />}
        projectIcon2={<SiMongodb />}
        projectIcon3={<SiRedux />}
        iconName="NextJs"
        iconName1="Firebase"
        iconName2="Mongodb"
        iconName3="Recoil"
      />
      <RightProjects
        projectName="E-commerce Website"
        projectInfo="An e-commrece website which can take payments, Can register Users, Has a Cart. Tech Stack used for this is:"
        projectImage={e_commerceImg}
        projectLink={'https://e-commerce-frontend-grb0.onrender.com/'}
        projectIcon={<FaReact />}
        projectIcon1={<FaNodeJs />}
        projectIcon2={<SiMongodb />}
        projectIcon3={<SiRedux />}
        iconName="react"
        iconName1="Nodejs"
        iconName2="Mongodb"
        iconName3="Redux"
      />
    </div>
  );
};

export default Projectscreen;
