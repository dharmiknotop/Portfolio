import { useState, useEffect, useRef, Fragment } from 'react';
import TechStack from '../../container/Techstack';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
import styles from './css/about.module.scss';

import { FaUserAlt } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { SiExpress } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.homeContainer',
        start: 'bottom center',
        end: '+=800 ',
        invalidateOnRefresh: true,
      },
    });
    tl.fromTo(
      '.aboutMeTitle',
      {
        transform: 'scale(0, 0)',
      },
      {
        transform: 'scale(1.3, 1.3)',
        duration: 0.5,
      }
    )
      .to('.aboutMeTitle', {
        transform: 'scale(1, 1)',
        duration: 0.5,
      })
      .fromTo(
        '.aboutMeDesc',
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
        },
        '>'
      )
      .fromTo(
        '.getToKnowMe',
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
        },
        '>'
      )

      .fromTo(
        '.aboutMeContent',
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
        },
        '>'
      )
      .fromTo(
        '.aboutMeContent1',
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
        },
        '-=0.8'
      )
      .fromTo(
        '.aboutMeContent2',
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
        },
        '-=0.8'
      )
      .fromTo(
        '.mySkill',
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
        },
        '>'
      )
      .fromTo(
        '.skillsContainer',
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
        },
        '>'
      );
    return () => tl.scrollTrigger.kill();
  }, []);

  return (
    <div className={styles.s} id="about">
      <h1 className={`${styles.s__heading} aboutMeTitle`}>
        <FaUserAlt color="cyan" size={30} className={styles.s__heading__icon} />
        About Me
      </h1>

      <h1 className={`${styles.s__desc} aboutMeDesc`}>
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={`${styles.s__aboutMeContainer} aboutMeContainer `}>
              <h2 className={`${styles.s__knowMeSectionTitle} getToKnowMe`}>
                Get to know me!
              </h2>
              <p className="aboutMeContent">
                I am a <span>Frontend Web Developer </span> at{' '}
                <span>Edufu</span>. building the Front-end of the Website and
                Web Applications that leads to the success of the overall
                product.
              </p>
              <p className="aboutMeContent1">
                I am currently Doing diploma in{' '}
                <span>Gandhinagar Government Polytechnic </span>
                college. I live in Mehsana, Gujrat and currently 18 year old.
              </p>
              <p className="aboutMeContent2">
                I&apos;m open to <span>Job</span> opportunities where I can
                contribute,
                <span> learn</span> and <span>grow</span>. If you have a good
                opportunity that matches my skills and experience then
                don&apos;t hesitate to <span>contact</span> me.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={`${styles.s__skillsOuterContainer}`}>
              <h2 className={`${styles.s__skillsSectionTitle} mySkill`}>
                My skills
              </h2>

              <div className={`${styles.s__skillsContainer} skillsContainer`}>
                <TechStack
                  link="https://www.w3schools.com/html/"
                  icon={<AiFillHtml5 />}
                  name="HTML"
                />
                <TechStack
                  link="https://www.w3schools.com/css/"
                  icon={<FaCss3Alt />}
                  name="CSS"
                />
                <TechStack
                  link="https://www.w3schools.com/js/"
                  icon={<IoLogoJavascript />}
                  name="JavaScript"
                />
                <TechStack
                  link="https://legacy.reactjs.org/docs/getting-started.html"
                  icon={<FaReact />}
                  name="React"
                />
                <TechStack
                  link="https://sass-lang.com/"
                  icon={<FaSass />}
                  name="SASS"
                />
                <TechStack
                  link="https://git-scm.com/"
                  icon={<AiFillGithub />}
                  name="Git"
                />
                <TechStack
                  link="https://expressjs.com/"
                  icon={<SiExpress />}
                  name="Express"
                />
                <TechStack
                  link="https://nextjs.org/"
                  icon={<SiNextdotjs />}
                  name="NextJs"
                />
                <TechStack
                  link="https://firebase.google.com/"
                  icon={<SiFirebase />}
                  name="Firebase"
                />
              </div>
            </div>
          </div>{' '}
        </div>
      </div>
    </div>
  );
};

export default About;
