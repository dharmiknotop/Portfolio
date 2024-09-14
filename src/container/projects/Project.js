import SectionHeading from "@component/sectionHeading/SectionHeading";
import Project from "@component/projects/Project";

import { project } from "@data/sectionHeading";
import { projectData } from "@data/project";

const Projectscreen = () => {
  return (
    <div id="projects">
      <SectionHeading {...project} />

      {projectData.map((item, idx) => {
        return <Project key={idx} {...item} />;
      })}
    </div>
  );
};

export default Projectscreen;
