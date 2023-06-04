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
    <div className="container">
      <h1 className={styles.heading}>
        <FaRegLightbulb
          color="cyan"
          style={{ marginRight: '1rem' }}
          size={30}
        />
        My Projects
      </h1>
      <br />
      <br />
      <LeftSideProject
        projectName="We-Chat App"
        projectInfo="chatting website where you can talk to other registered users "
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
        projectInfo="An e-commrece website which can take payments, Can register Users, Has a Cart. Tech Stack used"
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
