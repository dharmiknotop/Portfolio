import { Fragment, useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
import { useState } from 'react';
import Image from 'next/image';
import styles from './css/projects.module.scss';
import TechIcon from './Techicon';

const LeftSideProject = ({
  projectName,
  projectInfo,
  projectImage,
  projectLink,
  projectIcon,
  projectIcon1,
  projectIcon2,
  projectIcon3,
  iconName,
  iconName1,
  iconName2,
  iconName3,
}) => {
  const [state, setState] = useState('true');

  const ChangeTheState = () => {
    setState('false');
  };

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      '.ProjectAnimation',
      {
        y: -50,
        autoAlpha: 0,
        duration: 1,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.Project',
          //   markers: true,
          start: 'top center',
          triggerActions: 'play none none reverse',
          end: 'bottom bottom ',
        },
      }
    );
    gsap.fromTo(
      '.overlay-right',
      {
        x: -50,
        autoAlpha: 0,
        duration: 1,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.Project',
          // markers: true,
          start: 'top center',
          triggerActions: 'play none none reverse',
          end: 'bottom bottom ',
        },
      }
    );
  }, []);

  return (
    <div className={`${styles.s} Project`}>
      <div className="row">
        <div className="col-6">
          <div className={`${styles.s__container} ProjectAnimation`}>
            <h2 className={styles.s__projectTitle}>
              <a
                className={styles.s__link}
                href={projectLink}
                rel="noreferrer"
                target="_blank"
              >
                {projectName}
              </a>
            </h2>

            <div className={styles.s__projectDescContainer}>
              <h4 className={styles.s__projectDesc}>{projectInfo}</h4>
              <div className="d-flex">
                <TechIcon
                  noLeftPadding={true}
                  TechIcon={projectIcon}
                  TechName={iconName}
                />
                <TechIcon
                  noLeftPadding={false}
                  TechIcon={projectIcon1}
                  TechName={iconName1}
                />
                <TechIcon
                  noLeftPadding={false}
                  TechIcon={projectIcon2}
                  TechName={iconName2}
                />
                <TechIcon
                  noLeftPadding={false}
                  TechIcon={projectIcon3}
                  TechName={iconName3}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className={styles.s__secondSectionContainer}>
            <a href={projectLink} rel="noreferrer" target="_blank">
              <div className={`${styles.s__imgContainer} overlay-right`}>
                <div className={styles.s__overlay}></div>
                <div className={styles.s__borderedOverlay}></div>
                <Image
                  src={projectImage}
                  className={styles.s__img}
                  layout={`fill`}
                  alt="project image"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideProject;
