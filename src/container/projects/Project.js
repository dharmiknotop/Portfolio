import LeftAligned from './leftAlignedProject/Project';
import RightAligned from './rightAlignedProject/Project';

import SectionHeading from '@component/sectionHeading/SectionHeading';

import { project } from '@data/sectionHeading';
import { eCommerceProject, weChatProject } from '@data/project';

const Projectscreen = () => {
  return (
    <div id="projects">
      <SectionHeading {...project} />

      <LeftAligned {...weChatProject} />
      <RightAligned {...eCommerceProject} />
    </div>
  );
};

export default Projectscreen;
