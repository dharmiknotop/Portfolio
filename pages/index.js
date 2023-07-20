import { Fragment } from 'react';
import styles from '../styles/index.module.scss';

import Navbar from '../src/container/navbar/Navbar';
import Home from '../src/container/home/Home';
import About from '../src/container/about/About';
import Experience from '../src/container/experience/Experience';
import Projects from '../src/container/projects/Project';
import Contact from '../src/container/contact/Contact';

export default function Index() {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.s__containerOuter}>
        <div className={styles.s__container}>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </Fragment>
  );
}
