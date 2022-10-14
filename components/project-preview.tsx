import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import Date from "./date";
import Tags from "./tags";

interface post {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  tags: {
    nodes: [{ name: string }];
  };
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  author: [Object];
}

function ProjectPreview(post: post) {
  return (
    <div
      data-projectpreview={post.title}
      className=" shadow-lg rounded-lg pb-4 text-center dark:shadow-slate-900"
    >
      <div>
        {post.featuredImage && (
          <CoverImage
            title={post.title}
            coverImage={post.featuredImage}
            slug={post.slug}
          />
        )}
      </div>
      <h3 className="text-md font-medium mb-0 leading-snug">
        <Link href={`/posts/${post.slug}`}>
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: post.title }}
          ></a>
        </Link>
      </h3>
      {post.tags.nodes?.length > 0 && <Tags tags={post.tags} />}
    </div>
  );
}

export default ProjectPreview;
