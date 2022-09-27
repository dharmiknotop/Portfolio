import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import styles from './css/contact.module.scss'
const Contact = () => {
  return (
    <div className={styles.s}>
      <h1 className={styles.s__title}>Contact me on : </h1>{' '}
      <div className={styles.s__container}>
        {' '}
        <div className={`${styles.s__item}`}>
          <BsTelephone color="lightGreen " style={{ paddingRight: '1rem' }} />{' '}
          8487923230
        </div>
        <div className={`${styles.s__item}`}>
          <CgMail color="white " style={{ paddingRight: '1rem' }} />{' '}
          dhardharmik7@gmail.com
        </div>
      </div>
    </div>
  )
}

export default Contact
