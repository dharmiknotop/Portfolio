import { Fragment } from 'react';
import styles from '../styles/index.module.scss';

import Navbar from '../src/component/Navbar/Navbar';
import Home from '../src/component/home/Home';
import About from '../src/component/aboutSection/About';
import Experience from '../src/component/experienceSection/Experience';
import Projectscreen from '../src/component/ProjectScreen';
import Contact from '../src/component/contact/Contact';

export default function Index() {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.s__containerOuter}>
        <div className={styles.s__container}>
          <Home />
          <About />
          <Experience />
          <Projectscreen />
          <Contact />
        </div>
      </div>
    </Fragment>
  );
}
