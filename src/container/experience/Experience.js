import { Fragment, useState } from 'react';
import styles from './css/experience.module.scss';

import Fade from 'react-reveal/Fade';

import { IoMdArrowDropright } from 'react-icons/io';

import SectionHeading from '@component/sectionHeading/SectionHeading';
import { experience } from '@data/sectionHeading';

const Experience = () => {
  const [experienceTab, setExperienceTab] = useState('secondExp');

  const FirstExperience = () => {
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
                {' '}
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
                <span> scss </span>, <span> coding practices</span>,{' '}
                <span>figma</span>,<span> testing </span>.
              </div>
            </div>
            <div className={styles.expContainer__bulletPointContainer}>
              <div className={styles.expContainer__bulletPointSvgContainer}>
                <IoMdArrowDropright color="cyan" />
              </div>
              <div className={styles.expContainer__bulletPoint}>
                Engineered the most of the section in the{' '}
                <span>college dashboard</span>,<span> home page </span>,{' '}
                <span>log in sing up modal box </span> and many more pages.
              </div>
            </div>
          </div>
        </Fade>
      </Fragment>
    );
  };
  const SecondExperience = () => {
    return (
      <Fragment>
        <Fade>
          <div className={styles.expContainer}>
            <p className={styles.expContainer__companyName}>
              Front-end Developer
            </p>
            <h4 className={styles.expContainer__timePeriod}>
              June 2022 - Present{' '}
            </h4>
            <div className={styles.expContainer__bulletPointContainer}>
              <div className={styles.expContainer__bulletPointSvgContainer}>
                <IoMdArrowDropright color="cyan" />
              </div>
              <div className={styles.expContainer__bulletPoint}>
                {' '}
                Joined edufu as a <span> front-end engineer </span>to build a
                pages primarily using <span> Javascript</span>,{' '}
                <span>React</span>, <span>Scss</span> .
              </div>
            </div>
            <div className={styles.expContainer__bulletPointContainer}>
              <div className={styles.expContainer__bulletPointSvgContainer}>
                <IoMdArrowDropright color="cyan" />
              </div>
              <div className={styles.expContainer__bulletPoint}>
                Manually tested sites in<span> various browsers</span> and
                <span> mobile devices </span>to ensure cross-browser{' '}
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
                issues and Communicated with <span> senior engineer </span>and{' '}
                <span> designer</span> on a daily basis.
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
                  experienceTab === 'secondExp' &&
                  styles.expCompaniesContainer__activeTxt
                } ${styles.expCompaniesContainer__txt}`}
                onClick={() => {
                  setExperienceTab('secondExp');
                }}
              >
                Edufu
              </li>
              <li
                className={`${
                  experienceTab === 'firstExp' &&
                  styles.expCompaniesContainer__activeTxt
                } ${styles.expCompaniesContainer__txt}`}
                onClick={() => {
                  setExperienceTab('firstExp');
                }}
              >
                Edufu
              </li>{' '}
            </ul>
          </div>

          <div className="col-12 col-lg-6">
            <div className={styles.expTxtContainer}>
              {experienceTab === 'firstExp' && <FirstExperience />}
              {experienceTab === 'secondExp' && <SecondExperience />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
