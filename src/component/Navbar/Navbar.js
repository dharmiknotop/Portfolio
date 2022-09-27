import React from 'react'
import Link from 'next/link'
import styles from './css/navbar.module.scss'
const Navbar = () => {
  return (
    <div>
      <header>
        {' '}
        <div className={`${styles.title} ${styles.navbar_brand} navbar-brand `}>
          &lt;<span className={`${styles.name}`}>Dharmik</span> /&gt;
        </div>
        <nav>
          <ul>
            <li className="">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="">
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li className="">
              <Link href="/">
                <a>Projects</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
