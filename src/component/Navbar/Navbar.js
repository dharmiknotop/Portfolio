import React from 'react';
import Link from 'next/link';
import styles from './css/navbar.module.scss';
const Navbar = () => {
  return (
    <div>
      <header className={styles.nav}>
        {' '}
        <div
          className={`${styles.nav__title} ${styles.nav__navbar_brand} navbar-brand `}
        >
          &lt;<span className={`${styles.nav__name}`}>Dharmik</span> /&gt;
        </div>
        <nav>
          <ul className={`${styles.nav__ulContainer}`}>
            <li className={styles.nav__liItem}>
              <Link href="/">
                <a className={styles.nav__itemLink}>Home</a>
              </Link>
            </li>
            <li className={styles.nav__liItem}>
              <Link href="/">
                <a className={styles.nav__itemLink}>About</a>
              </Link>
            </li>
            <li className={styles.nav__liItem}>
              <Link href="/">
                <a className={styles.nav__itemLink}>Projects</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
