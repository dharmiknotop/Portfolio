import React, { Fragment } from 'react';
import Home from './home/Home';
import About from './aboutSection/About';
import ProjectScreen from './ProjectScreen';
import Contact from './contact/Contact';
import Navbar from './Navbar/Navbar';
import Experience from './experienceSection/MyExperience';
import styles from './css/homeScreen.module.scss';

const Homescreen = () => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.s__containerOuter}>
        <div className={styles.s__container}>
          <Home />
          <About />
          <Experience />
          <ProjectScreen />
          <Contact />
        </div>
      </div>
    </Fragment>
  );
};

export default Homescreen;
