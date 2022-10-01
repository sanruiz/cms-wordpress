import { FunctionComponent } from "react";
import Project from "./project";


const Projects = ({posts}) => {
    return ( 
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            
        {posts.map(({ node }) => (
            <div className="" >
            <Project {...node}  key={node.slug} />
            </div>
        ))}
        </div>
     );
}
 
export default Projects;