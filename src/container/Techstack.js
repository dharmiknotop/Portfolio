import Link from 'next/link';
import styles from './css/techStack.module.scss';

const Techstack = ({ name, icon, link }) => {
  return (
    <Link href={link}>
      <a className={styles.s__container}>
        <div className={styles.s__logo}>{icon}</div>

        <div>{name}</div>
      </a>
    </Link>
  );
};

export default Techstack;
