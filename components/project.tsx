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

function Project(post: post) {
  return (
    <div className="overflow-hidden rounded-lg pb-4 text-center">
      <div>
        {post.featuredImage && (
          <CoverImage
            title={post.title}
            coverImage={post.featuredImage}
            slug={post.slug}
          />
        )}
      </div>
      <h3 className="text-xl mb-0 leading-snug">
        <Link href={`/posts/${post.slug}`}>
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: post.title }}
          ></a>
        </Link>
      </h3>
      <ul>{post.tags.nodes?.length > 0 && <Tags tags={post.tags} />}</ul>
      {/* <div
        className="mb-4"
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      /> */}
    </div>
  );
}

export default Project;
