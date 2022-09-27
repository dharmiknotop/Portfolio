import React, { Fragment } from 'react'
import { BsBriefcaseFill } from 'react-icons/bs'
import { IoMdArrowDropright } from 'react-icons/io'
import { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import styles from './css/experience.module.scss'
const MyExprience = () => {
  const [experience, setExperience] = useState('secondExp')

  return (
    <div className="">
      <h1 className={styles.heading}>
        <BsBriefcaseFill
          color="cyan"
          size={30}
          style={{ marginRight: '1rem' }}
        />
        My Experience
      </h1>
      <div className={styles.expCompaniesContainerOuter}>
        <ul className={styles.expCompaniesContainer}>
          <li
            className={
              experience === 'secondExp' &&
              styles.expCompaniesContainer__activeTxt
            }
            onClick={() => {
              setExperience('secondExp')
            }}
          >
            Edufu
          </li>
          <li
            className={
              experience === 'firstExp' &&
              styles.expCompaniesContainer__activeTxt
            }
            onClick={() => {
              setExperience('firstExp')
            }}
          >
            Edufu
          </li>{' '}
          {/* <li
              className={experience === 'firstExp' ? 'active' : null}
              onClick={() => {
                setExperience('secondExp')
              }}
            >
              ThirdExp
            </li>
            <li
              className={experience === 'firstExp' ? 'active' : null}
              onClick={() => {
                setExperience('secondExp')
              }}
            >
              FourthExp
            </li> */}
        </ul>
        <div className="">
          {experience === 'firstExp' ? (
            <>
              <FirstExperience />
            </>
          ) : null}
          {experience === 'secondExp' ? (
            <>
              <SecondExperience />
            </>
          ) : null}
          {/* {experience === 'true' ? (
              <>
                <ThirdExperience />
              </>
            ) : null}
            {experience === 'true' ? (
              <>
                <FourthExperience />
              </>
            ) : null} */}
        </div>
      </div>
    </div>
  )
}

const FirstExperience = () => {
  return (
    <Fragment>
      <Fade>
        <div className={styles.expContainer}>
          <p className={styles.expContainer__companyName}>
            Front-end Developer
          </p>
          <h4 className={styles.expContainer__timePeriod}>April - June 2022</h4>
          <div className={styles.expContainer__bulletPointContainer}>
            <div className={styles.expContainer__bulletPointSvgContainer}>
              <IoMdArrowDropright color="cyan" />
            </div>
            <div className={styles.expContainer__bulletPoint}>
              {' '}
              Worked with a senior developer as a <span> intern </span>to build
              a platform which makes student's life easier by
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
  )
}
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
              pages primarily using <span> Javascript</span>, <span>React</span>
              , <span>Scss</span> .
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
              Proposed and implemented<span> scalable solutions </span>to issues
              and Communicated with <span> senior engineer </span>and{' '}
              <span> designer</span> on a daily basis.
            </div>
          </div>
        </div>
      </Fade>
    </Fragment>
  )
}
const ThirdExperience = () => {
  return (
    <>
      <Fade>
        {' '}
        <div className="ExpDiv">
          <p>My Third Internship was at this place.</p>
          <p className="d-flex">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
          <p className="d-flex">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
          <p className="d-flex">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
        </div>
      </Fade>
    </>
  )
}
const FourthExperience = () => {
  return (
    <>
      <Fade>
        <div className="ExpDiv">
          <p>My Fourth Internship was at this place.</p>
          <p className="d-flex">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
          <p className="d-flex">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
          <p className="d-flex">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
        </div>
      </Fade>
    </>
  )
}
export default MyExprience
