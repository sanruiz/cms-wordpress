import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Tags from "../../components/tags";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import { useState } from "react";

export default function Post({ post, posts }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  const [darkMode, setDarkMode] = useState(false);

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const htmlTitle = `${post?.title} | Next.js Blog with ${CMS_NAME}`;

  return (
    <Layout>
      <Head>
        <title>{htmlTitle}</title>
        <meta
          property="og:image"
          content={post.featuredImage?.node.sourceUrl}
        />
      </Head>
      <div className={darkMode ? "dark" : ""}>
        <main className="bg-gray-50 px-10 md:px-20 lg:px-40 dark:bg-slate-800 dark:text-gray-400">
          <Container>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            {router.isFallback ? (
              <PostTitle>Loading…</PostTitle>
            ) : (
              <>
                <article>
                  <PostHeader
                    title={post.title}
                    coverImage={post.featuredImage}
                    date={post.date}
                    author={post.author}
                    categories={post.categories}
                  />
                  <PostBody content={post.content} />
                  <footer>
                    {post.tags.nodes.length > 0 && <Tags tags={post.tags} />}
                  </footer>
                </article>

                <SectionSeparator />
                {morePosts.length > 0 && <MoreStories posts={morePosts} />}
              </>
            )}
          </Container>
        </main>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};
