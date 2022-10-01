import styles from "./css/rightNavbar.module.scss";

import { FiLinkedin } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const RightNavbar = () => {
  return (
    <>
      <div className={`${styles.s__container}`}>
        <div className="item">
          <FiLinkedin size={20} />
        </div>
        <div className="item">
          <FaTwitter size={20} />
        </div>
        <div className="item">
          <AiFillGithub size={20} />
        </div>
        <div className="item">
          <FaTwitter size={20} />
        </div>
        <div id="verticaline"></div>
      </div>
    </>
  );
};

export default RightNavbar;
