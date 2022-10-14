import PostPreview from "./post-preview";
import ProjectPreview from "./project-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter leading-tight">
        More Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 pb-32">
        {posts.map(({ node }) => (
          <ProjectPreview {...node} key={node.slug} />
        ))}
      </div>
    </section>
  );
}
