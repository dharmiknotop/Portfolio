import React from 'react';
import Link from 'next/link';
import styles from './css/navbar.module.scss';

import profileImg from './img/profileImg.jpeg';

const Navbar = () => {
  return (
    <div>
      <header className={styles.nav}>
        {' '}
        <div className={`${styles.s__profileContainer} logo`}>
          <img className={styles.s__profile} src={profileImg.src} alt="" />
          <div
            className={`${styles.nav__title} ${styles.nav__navbar_brand} navbar-brand `}
          >
            &lt;<span className={`${styles.nav__name}`}>Dharmik</span> /&gt;
          </div>
        </div>
        <nav>
          <ul className={`${styles.nav__ulContainer}`}>
            <li className={styles.nav__liItem}>
              <Link href="/">
                <a className={`${styles.nav__itemLink} navItem1`}>Home</a>
              </Link>
            </li>
            <li className={styles.nav__liItem}>
              <Link href="/">
                <a className={`${styles.nav__itemLink} navItem2`}>About</a>
              </Link>
            </li>
            <li className={styles.nav__liItem}>
              <Link href="/">
                <a className={`${styles.nav__itemLink} navItem3`}>Projects</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
