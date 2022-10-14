import { FunctionComponent } from "react";
import ProjectPreview from "./project-preview";

const Projects = ({ posts }) => {
  return (
    <div className="grid gap-8 grid-cols-1 pt-4 pb-8 md:grid-cols-2">
      {posts.map(({ node }) => (
        <ProjectPreview {...node} key={node.slug} />
      ))}
    </div>
  );
};

export default Projects;
