import { Fragment } from 'react';

import styles from './css/sectionHeading.module.scss';

const SectionHeading = (props) => {
  const { icon, title, description, titleId = '', descId = '' } = props;
  return (
    <Fragment>
      <h1 className={styles.s__heading} id={titleId}>
        <div className={styles.s__icon}>{icon}</div>
        {title}
      </h1>
      <h1 className={styles.s__description} id={descId}>
        {description}
      </h1>
    </Fragment>
  );
};

export default SectionHeading;
