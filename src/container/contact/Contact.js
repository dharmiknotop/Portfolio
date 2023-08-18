import styles from './css/contact.module.scss';

import { BsTelephone } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';

const Contact = () => {
  return (
    <div className={styles.s}>
      <h1 className={styles.s__title}>Contact me on : </h1>{' '}
      <div className={styles.s__container}>
        <div className={`${styles.s__item}`}>
          <BsTelephone className={styles.s__icon} color="lightGreen " />{' '}
          8487923230
        </div>
        <div className={`${styles.s__item}`}>
          <CgMail className={styles.s__icon} color="white " />{' '}
          dhardharmik7@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Contact;
