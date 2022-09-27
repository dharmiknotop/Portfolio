import { useState, useEffect, useRef, Fragment } from 'react'
import TechStack from '../../container/Techstack'
import { FaUserAlt } from 'react-icons/fa'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import styles from './css/about.module.scss'

const About = () => {
  gsap.registerPlugin(ScrollTrigger)
  const Tl = useRef()
  useEffect(() => {
    gsap.fromTo(
      '.aboutMeTitle',
      {
        y: -50,
        autoAlpha: 0,
        duration: 1,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 2,
        scrollTrigger: {
          trigger: '.myImg',
          markers: true,
          start: 'bottom center',
          triggerActions: 'play none none reverse',
          end: 'bottom bottom ',
        },
      },
    )
    gsap.fromTo(
      '.aboutMeContainer',
      {
        x: 100,
        autoAlpha: 0,
      },
      {
        duration: 1,
        autoAlpha: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.myImg',
          // markers: true,
          start: 'bottom center',
          triggerActions: 'play none none reverse',
          end: 'bottom bottom ',
        },
      },
      '<',
    )
  }, [])

  return (
    <div>
      <div>
        <h1 className={`${styles.heading} aboutMeTitle`}>
          <FaUserAlt color="cyan" size={30} style={{ marginRight: '1.5rem' }} />
          About Me
        </h1>

        <div
          className={styles.s}
          style={{ fontSize: '1.4rem', fontWeight: '800' }}
        >
          <div className={`${styles.s__aboutMeContainer} aboutMeContainer `}>
            <h2 className={`${styles.s__knowMeSectionTitle} `}>
              Get to know me!
            </h2>
            <p>
              I am a <span>Frontend Web Developer </span> at <span>Edufu</span>.
              building the Front-end of the Website and Web Applications that
              leads to the success of the overall product.
            </p>
            <p>
              I am currently Doing diploma in{' '}
              <span>Gandhinagar Government Polytechnic </span>
              college. I live in Mehsana, Gujrat and currently 18 year old.
            </p>
            <p>
              I'm open to <span>Job</span> opportunities where I can contribute,
              <span> learn</span> and <span>grow</span>. If you have a good
              opportunity that matches my skills and experience then don't
              hesitate to <span>contact</span> me.
            </p>
          </div>
          <div className={`${styles.s__skillsOuterContainer}`}>
            <h2 className={`${styles.s__skillsSectionTitle} `}>My skills</h2>

            <div className={`${styles.s__skillsContainer}`}>
              <TechStack name="HTML" />
              <TechStack name="CSS" />
              <TechStack name="JavaScript" />
              <TechStack name="React" />
              <TechStack name="SASS" />
              <TechStack name="Github" />
              <TechStack name="Express" />
              <TechStack name="NextJs" />
              <TechStack name="Firebase" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
