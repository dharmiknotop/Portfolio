import LeftAligned from "@component/leftAlignedProject/Project";
import RightAligned from "@component/rightAlignedProject/Project";

import SectionHeading from "@component/sectionHeading/SectionHeading";

import { project } from "@data/sectionHeading";
import {
  eCommerceProject,
  lyristProjectsda,
  weChatProject,
} from "@data/project";

const Projectscreen = () => {
  return (
    <div id="projects">
      <SectionHeading {...project} />

      <LeftAligned {...weChatProject} />
      <RightAligned {...eCommerceProject} />
      <LeftAligned {...lyristProjectsda} />
    </div>
  );
};

export default Projectscreen;
