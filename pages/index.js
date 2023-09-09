import { Fragment } from "react";
import styles from "../styles/index.module.scss";

import Navbar from "layout/navbar/Navbar";
import Home from "@container/home/Home";
import About from "@container/about/About";
import Experience from "@container/experience/Experience";
import Projects from "@container/projects/Project";
import Contact from "@container/contact/Contact";

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
