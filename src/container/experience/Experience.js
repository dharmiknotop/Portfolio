import { Fragment, useState } from "react";
import styles from "./css/experience.module.scss";

import SectionHeading from "@component/sectionHeading/SectionHeading";

import { experience } from "@data/sectionHeading";
import experienceData from "@data/experience";
import ExpDetails from "@component/experience/ExpDetails";

const Experience = () => {
  const [experienceTab, setExperienceTab] = useState("provewayJob"); // decides which experience tab to show

  return (
    <div className={styles.s}>
      <SectionHeading {...experience} />
      <div className={`container ${styles.expCompaniesContainerOuter}`}>
        <div className="row justify-content-center">
          <div className="col-0 col-lg-1"></div>
          <div className="col-12 col-lg-2">
            <ul className={styles.expCompaniesContainer}>
              <li
                className={`${
                  experienceTab === "provewayJob" &&
                  styles.expCompaniesContainer__activeTxt
                } ${styles.expCompaniesContainer__txt}`}
                onClick={() => {
                  setExperienceTab("provewayJob");
                }}
              >
                Proveway
              </li>
              <li
                className={`${
                  experienceTab === "edufuJob" &&
                  styles.expCompaniesContainer__activeTxt
                } ${styles.expCompaniesContainer__txt}`}
                onClick={() => {
                  setExperienceTab("edufuJob");
                }}
              >
                Edufu
              </li>
              <li
                className={`${
                  experienceTab === "edufuInternship" &&
                  styles.expCompaniesContainer__activeTxt
                } ${styles.expCompaniesContainer__txt}`}
                onClick={() => {
                  setExperienceTab("edufuInternship");
                }}
              >
                Edufu (Internship)
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-6">
            <div className={styles.expTxtContainer}>
              {experienceData.map((item) => {
                return item.id === experienceTab && <ExpDetails item={item} />;
              })}
              {/* {experienceTab === "edufuInternship" && <EdufuInternship />}
              {experienceTab === "edufuJob" && <EdufuJob />}
              {experienceTab === "provewayJob" && <ProvewayJob />} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
