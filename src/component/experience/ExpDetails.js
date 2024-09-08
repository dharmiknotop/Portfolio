import styles from "./css/expDetails.module.scss";

import Fade from "react-reveal/Fade";

import { IoMdArrowDropright } from "react-icons/io";

const ExpDetails = ({ item }) => {
  return (
    <Fade>
      <div className={styles.expContainer}>
        <p className={styles.expContainer__companyName}>{item.title}</p>
        <h4 className={styles.expContainer__timePeriod}>{item.timeFrame}</h4>

        {item.points.map((message, idx) => {
          return (
            <div
              key={idx}
              className={styles.expContainer__bulletPointContainer}
            >
              <div className={styles.expContainer__bulletPointSvgContainer}>
                <IoMdArrowDropright color="cyan" />
              </div>
              <div
                className={styles.expContainer__bulletPoint}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            </div>
          );
        })}
      </div>
    </Fade>
  );
};

export default ExpDetails;
