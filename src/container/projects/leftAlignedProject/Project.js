import { useEffect } from 'react';
import styles from '../css/alignedProject.module.scss';

import Image from 'next/image';
import TechIcon from '../../../component/Techicon';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';

const LeftSideProject = ({
  name,
  info,
  image,
  link,
  icon,
  icon1,
  icon2,
  icon3,
  iconName,
  iconName1,
  iconName2,
  iconName3,
}) => {
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
    <div className={`${styles.s} container Project`}>
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className={`${styles.s__container} ProjectAnimation`}>
            <h2 className={styles.s__projectTitle}>
              <a
                className={styles.s__link}
                href={link}
                rel="noreferrer"
                target="_blank"
              >
                {name}
              </a>
            </h2>

            <div className={styles.s__projectDescContainer}>
              <h4 className={styles.s__projectDesc}>{info}</h4>
              <div className={styles.s__iconContainer}>
                <TechIcon
                  noLeftPadding={true}
                  TechIcon={icon}
                  TechName={iconName}
                />
                <TechIcon
                  noLeftPadding={false}
                  TechIcon={icon1}
                  TechName={iconName1}
                />
                <TechIcon
                  noLeftPadding={false}
                  TechIcon={icon2}
                  TechName={iconName2}
                />
                <TechIcon
                  noLeftPadding={false}
                  TechIcon={icon3}
                  TechName={iconName3}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className={styles.s__secondSectionContainer}>
            <a href={link} rel="noreferrer" target="_blank">
              <div className={`${styles.s__imgContainer} overlay-right`}>
                <div className={styles.s__overlay}></div>
                <div className={styles.s__borderedOverlay}></div>
                <Image
                  src={image}
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
