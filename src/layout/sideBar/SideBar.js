import styles from './css/sideBar.module.scss';

import Link from 'next/link';

import { FiLinkedin } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';

const SideBar = () => {
  return (
    <div className={`${styles.s__socialMediaContainer} socialMediaContainer`}>
      <Link href="https://www.linkedin.com/in/dharmik-upadhyay-453797222/">
        <a className={styles.s__socialIcon}>
          <FiLinkedin />
        </a>
      </Link>
      <Link href="https://twitter.com/CodeDhardev">
        <a className={styles.s__socialIcon}>
          <FaTwitter />
        </a>
      </Link>
      <Link href="https://github.com/dharmiknotop">
        <a className={styles.s__socialIcon}>
          <AiFillGithub />
        </a>
      </Link>
      <Link href="https://leetcode.com/dharmikupadhyaydev/">
        <a className={styles.s__socialIcon}>
          <SiLeetcode />
        </a>
      </Link>
    </div>
  );
};

export default SideBar;
