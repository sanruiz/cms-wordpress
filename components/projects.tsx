import { FunctionComponent } from "react";
import Project from "./project";

interface node {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    featuredImage: {
      node: {
        sourceUrl: string
      }
    };
    author: [Object];
  }

const Projects = ({posts}) => {
    return ( 
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            
        {posts.map(({ node }) => (
            <div className="" >
            <Project {...node}  />
            </div>
        ))}
        </div>
     );
}
 
export default Projects;