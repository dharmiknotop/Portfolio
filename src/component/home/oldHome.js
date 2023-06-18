import { gsap } from 'gsap/dist/gsap';
import { useState, useEffect, useContext, useRef, Fragment } from 'react';
import Typewriter from 'typewriter-effect';
import styles from './css/home.module.scss';

const Home = () => {
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap
      .timeline()
      .fromTo(
        '.firstLine',
        {
          autoAlpha: 0,
          y: '-100%',
          duration: 1,
        },
        {
          autoAlpha: 1,
          y: '0%',
          duration: 1,
        }
      )
      .fromTo(
        '.secondLine',
        {
          autoAlpha: 0,
          y: '-100%',
          duration: 1,
        },
        {
          autoAlpha: 1,
          y: '0%',
          duration: 1,
        },
        '-=0.6'
      )
      .fromTo(
        '.thirdLine',
        {
          autoAlpha: 0,
          y: '-100%',
          duration: 1,
        },
        {
          autoAlpha: 1,
          y: '0%',
          duration: 1,
        },
        '-=0.7'
      )
      .fromTo(
        '.slideDown',
        {
          y: '0%',
        },
        {
          ease: 'SlowMo.ease.config(0.7, 0.7, false)',
          y: '-100%',
          duration: 1,
        },
        '+=.5'
      )
      .to(
        '.slideUp',
        {
          y: '-100%',
          duration: 1,
        },
        '-=0.8'
      )
      .fromTo(
        '.borders',
        {
          autoAlpha: 0,
          duration: 1,
        },
        {
          autoAlpha: 1,
          ease: 'SlowMo.ease.config(0.7, 0.7, false)',
          duration: 1,
        },
        '-=0.5'
      )
      .fromTo(
        '.myImg',
        {
          autoAlpha: 0,
          duration: 1,
        },
        {
          autoAlpha: 1,
        },
        '<+=.2'
      )
      .fromTo(
        '.name',
        {
          autoAlpha: 0,
          y: '100',
          duration: 0,
        },
        {
          autoAlpha: 1,
          y: '0',
          duration: 1,
        },
        '<'
      )
      .fromTo(
        '.nameIs',
        {
          autoAlpha: 0,
          y: '100',
          duration: 0,
        },
        {
          autoAlpha: 1,
          y: '0',
          duration: 1,
        },
        '<'
      )
      .fromTo(
        '.typeWriter',
        {
          autoAlpha: 0,
          duration: 1,
        },
        {
          autoAlpha: 1,
          ease: 'SlowMo.ease.config(0.7, 0.7, false)',
          duration: 1,
        },
        '-=0.5'
      );
  }, []);
  return (
    <Fragment>
      <div className={`${styles.slider} slideDown`}>
        <div className={`${styles.slider__centerTxt} slideUp`}>
          <div className="firstLine">
            Welcome to <br />
          </div>
          <div className={`${styles.title} secondLine`}>
            &lt;<span className={`${styles.name}`}> Dharmik </span> /&gt;
          </div>
          <div className="thirdLine"> Portfolio website.</div>
        </div>
      </div>
      <div className={`${styles.s}`}>
        <div className={`${styles.s__container}`}>
          <div>
            <span className={`${styles.s__subTitle} nameIs`}>
              Hi, my Name is
            </span>
          </div>
          <h2 className={`${styles.s__nameTxt} name`}>Dharmik Upadhyay</h2>
          <div className={`${styles.s__typingEffectContainer} typeWriter`}>
            <span>I{`'`}m a</span>

            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                strings: ['Software Engineer', 'Web developer'],
                delay: 40,
              }}
            />
          </div>
          {/* <span className="gray My-Info">
              I am Enthusiast in DevOps, Open Source Projects and Software
              Development. Currently Studying in 3rd sem of Information
              Technology In government polytechnic.
            </span> */}
        </div>

        <div className={`${styles.s__imageOuterContainer}`}>
          <div className={`${styles.s__imageContainer} borders`}>
            <div className={`${styles.s__myImg} myImg`}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
