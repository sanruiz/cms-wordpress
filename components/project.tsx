import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import Date from "./date";

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

function Project({ title, slug, featuredImage }: node) {
  return (
    <div className="overflow-hidden rounded-lg text-center">
      <div>
      {featuredImage && (
          <CoverImage title={title} coverImage={featuredImage} slug={slug} />
        )}
      </div>
      <h3 className="text-xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
      {/* <div
        className="mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      /> */}
    </div>
  );
}

export default Project;
