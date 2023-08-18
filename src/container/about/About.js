import { useEffect } from 'react';
import styles from './css/about.module.scss';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';

import TechSkill from '@component/techSkill/TechSkill';
import { mySkills } from '@data/mySkills';

import SectionHeading from '@component/sectionHeading/SectionHeading';
import { about } from '@data/sectionHeading';

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
      '#aboutMeTitle',
      {
        transform: 'scale(0, 0)',
      },
      {
        transform: 'scale(1.3, 1.3)',
        duration: 0.5,
      }
    )
      .to('#aboutMeTitle', {
        transform: 'scale(1, 1)',
        duration: 0.5,
      })
      .fromTo(
        '#aboutMeDesc',
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
      <SectionHeading {...about} />

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
                {mySkills.map((item) => {
                  return (
                    <TechSkill
                      link={item.link}
                      icon={item.icon}
                      name={item.name}
                      key={item.name}
                    />
                  );
                })}
              </div>
            </div>
          </div>{' '}
        </div>
      </div>
    </div>
  );
};

export default About;
