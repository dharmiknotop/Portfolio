import styles from './css/techIcon.module.scss';

const TechIcon = ({ TechIcon, TechName }) => {
  return (
    <>
      <div className={styles.s__container}>
        <div className={styles.s__icon} id="icon">
          {TechIcon}
        </div>
        <div className={styles.s__title}> {TechName}</div>
      </div>
    </>
  );
};

export default TechIcon;
