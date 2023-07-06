import styles from './css/techIcon.module.scss';

const Techicon = ({ TechIcon, TechName, noLeftPadding }) => {
  return (
    <>
      <div className={`${styles.s__container} ${noLeftPadding && 'ps-0'}`}>
        <div className={`${styles.s__icon}`} id="icon">
          {TechIcon}
        </div>
        <div className={styles.s__title}> {TechName}</div>
      </div>
    </>
  );
};

export default Techicon;
