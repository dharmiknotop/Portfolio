import { Fragment, useState } from "react";
import styles from "./css/experience.module.scss";

import Fade from "react-reveal/Fade";

import { IoMdArrowDropright } from "react-icons/io";
import { BsArrowReturnRight } from "react-icons/bs";

import SectionHeading from "@component/sectionHeading/SectionHeading";
import { experience } from "@data/sectionHeading";

const Experience = () => {
  const [experienceTab, setExperienceTab] = useState("provewayJob");

  const EdufuInternship = () => {
    return (
      <Fragment>
        <Fade>
          <div className={styles.expContainer}>
            <p className={styles.expContainer__companyName}>
              Front-end Developer
            </p>
            <h4 className={styles.expContainer__timePeriod}>
              April - June 2022
            </h4>
            <div className={styles.expContainer__bulletPointContainer}>
              <div className={styles.expContainer__bulletPointSvgContainer}>
                <IoMdArrowDropright color="cyan" />
              </div>
              <div className={styles.expContainer__bulletPoint}>
                {" "}
                Worked with a senior developer as a <span> intern </span>to
                build a platform which makes student&apos;s life easier by
                <span> providing jobs,colleges and school admission</span> , an
                ambitious startup from<span> bangalore</span>.
              </div>
            </div>
            <div className={styles.expContainer__bulletPointContainer}>
              <div className={styles.expContainer__bulletPointSvgContainer}>
                <IoMdArrowDropright color="cyan" />
              </div>
              <div className={styles.expContainer__bulletPoint}>
                Up skilled my skill of writing<span> clean code</span>, learned
                <span> scss </span>, <span> coding practices</span>,{" "}
                <span>figma</span>,<span> testing </span>.
              </div>
            </div>
            <div className={styles.expContainer__bulletPointContainer}>
              <div className={styles.expContainer__bulletPointSvgContainer}>
                <IoMdArrowDropright color="cyan" />
              </div>
              <div className={styles.expContainer__bulletPoint}>
                Engineered the most of the section in the{" "}
                <span>college dashboard</span>,<span> home page </span>,{" "}
                <span>log in sing up modal box </span> and many more pages.
              </div>
            </div>
          </div>
        </Fade>
      </Fragment>
    );
  };

  const EdufuJob = () => {
    return (
      <Fragment>
        <Fade>
          <div className={styles.expContainer}>
            <p className={styles.expContainer__companyName}>
              Front-end Developer
            </p>
            <h4 className={styles.expContainer__timePeriod}>
              June 2022 - May 2023{" "}
            </h4>
            <div className={styles.expContainer__bulletPointContainer}>
              <div className={styles.expContainer__bulletPointSvgContainer}>
                <IoMdArrowDropright color="cyan" />
              </div>
              <div className={styles.expContainer__bulletPoint}>
                {" "}
                Joined edufu as a <span> front-end engineer </span>to build a
                pages primarily using <span> Javascript</span>,{" "}
                <span>React</span>, <span>Scss</span> .
              </div>
            </div>
            <div className={styles.expContainer__bulletPointContainer}>
              <div className={styles.expContainer__bulletPointSvgContainer}>
                <IoMdArrowDropright color="cyan" />
              </div>
              <div className={styles.expContainer__bulletPoint}>
                Manually tested sites in<span> various browsers</span> and
                <span> mobile devices </span>to ensure cross-browser{" "}
                <span>compatibility </span>
                and <span> responsiveness</span>
              </div>
            </div>
            <div className={styles.expContainer__bulletPointContainer}>
              <div className={styles.expContainer__bulletPointSvgContainer}>
                <IoMdArrowDropright color="cyan" />
              </div>
              <div className={styles.expContainer__bulletPoint}>
                Proposed and implemented<span> scalable solutions </span>to
                issues and Communicated with <span> senior engineer </span>and{" "}
                <span> designer</span> on a daily basis.
              </div>
            </div>
          </div>
        </Fade>
      </Fragment>
    );
  };

  const ProvewayJob = () => {
    return (
      <Fragment>
        <Fade>
          <div className={styles.expContainer}>
            <p className={styles.expContainer__companyName}>
              Software Enginner
            </p>
            <h4 className={styles.expContainer__timePeriod}>
              Aug 2022 - Present{" "}
            </h4>
            <div className={styles.expContainer__bulletPointContainer}>
              <div className={styles.expContainer__bulletPointSvgContainer}>
                <IoMdArrowDropright color="cyan" />
              </div>
              <div className={styles.expContainer__bulletPoint}>
                Joined Proveay as a <span> Software engineer </span>, a product
                based company <span> SaaS-based </span> organization that powers
                the <span> #1 Shopify App </span> for syncing all the tracking
                details with <span>payment gateways.</span>
              </div>
            </div>
            <div className={styles.expContainer__bulletPointContainer}>
              <div className={styles.expContainer__bulletPointSvgContainer}>
                <IoMdArrowDropright color="cyan" />
              </div>
              <div className={styles.expContainer__bulletPoint}>
                Added <span> new features </span> which lead to increase in the
                <span> user installs </span>,<span> performace</span> and
                <span> easily accessible.</span>
              </div>
            </div>

            <div className={styles.expContainer__bulletPointContainer}>
              <div className={styles.expContainer__bulletPointSvgContainer}>
                <IoMdArrowDropright color="cyan" />
              </div>
              <div className={styles.expContainer__bulletPoint}>
                The tech stack : <span> ReactJs, </span>
                <span> MongoDb, </span>
                <span> ExpressJs, </span>
                <span> NodeJs, </span>
                <span> TailwindCss, </span>
                <span> GraphQl. </span>
              </div>
            </div>
          </div>
        </Fade>
      </Fragment>
    );
  };

  return (
    <div className={styles.s}>
      <SectionHeading {...experience} />
      <div className={`container ${styles.expCompaniesContainerOuter}`}>
        <div className="row justify-content-center">
          <div className="col-0 col-lg-1"></div>
          <div className="col-12 col-lg-2">
            <ul className={styles.expCompaniesContainer}>
              <li
                className={`${
                  experienceTab === "provewayJob" &&
                  styles.expCompaniesContainer__activeTxt
                } ${styles.expCompaniesContainer__txt}`}
                onClick={() => {
                  setExperienceTab("provewayJob");
                }}
              >
                Proveway
              </li>
              <li
                className={`${
                  experienceTab === "edufuJob" &&
                  styles.expCompaniesContainer__activeTxt
                } ${styles.expCompaniesContainer__txt}`}
                onClick={() => {
                  setExperienceTab("edufuJob");
                }}
              >
                Edufu
              </li>
              <li
                className={`${
                  experienceTab === "edufuInternship" &&
                  styles.expCompaniesContainer__activeTxt
                } ${styles.expCompaniesContainer__txt}`}
                onClick={() => {
                  setExperienceTab("edufuInternship");
                }}
              >
                Edufu
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-6">
            <div className={styles.expTxtContainer}>
              {experienceTab === "edufuInternship" && <EdufuInternship />}
              {experienceTab === "edufuJob" && <EdufuJob />}
              {experienceTab === "provewayJob" && <ProvewayJob />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
