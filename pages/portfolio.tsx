import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import srrImage from "../public/srr.jpg";
import responsive from "../public/responsive.png";
import security from "../public/security.png";
import ecommerce from "../public/ecommerce.png";
import { useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import Card from "../components/card";
import Layout from "../components/layout";
import { GetStaticProps } from "next";
import { getAllPostsForHome, getPostAndMorePosts } from "../lib/api";
import Header from "../components/header";
import Projects from "../components/projects";

interface card {
  title: string;
  text: string;
  img: StaticImageData;
}

export default function Portfolio({ allPosts: { edges } }) {
  const [darkMode, setDarkMode] = useState(false);

  const cards: card[] = [
    {
      title: "Responsive Design",
      text: "Responsive Web Design makes your web page look good on all devices (desktops, tablets, and phones).",
      img: responsive,
    },
    {
      title: "E-Commerce",
      text: "Your e-Commerce website is ready to launch and start building your business in as little as two weeks!",
      img: ecommerce,
    },
    {
      title: "Maintenance & Security.",
      text: "Incredible support and maintenance for your sites.",
      img: security,
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Santiago Ramirez Portfolio</title>
        <meta
          property="og:title"
          content="Santiago Ramirez - Project Manager - Web Developer - Entrepreneur"
        />
        <meta
          property="og:description"
          content="Santiago Ramirez Ruiz - Personal Webpage, services Web developer, php developer, Project manager"
        />
        <meta property="og:image" content="https://sanruiz.co/img/10.jpeg" />
        <meta property="og:url" content="https://sanruiz.co" />
        <meta property="og:type" content="website" />
      </Head>

      <div className={darkMode ? "dark" : ""}>
        <main className="bg-gray-50 px-10 md:px-20 lg:px-40 dark:bg-slate-800 dark:text-gray-400">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <section className="md:max-w-lg mx-auto">
            <div className="text-center p-10">
              <div className="relative mx-auto overflow-hidden rounded-full my-10 w-60 h-60 xl:h-96 xl:w-96 ">
                <Image src={srrImage} layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-2xl text-cyan-700 py-2 font-medium md:text-6xl">
                Fullstack Developer
              </h3>
              <p className="text-base py-5 leading-8 text-gray-800  dark:text-gray-400 md:text-xl">
                Freelancer providing services for programing and content needs.
                Join me down and let's get work!
              </p>
            </div>

            <div className="text-5xl flex justify-center gap-10 py-3">
              <a href="https://github.com/sanruiz" target="_blank">
                <AiOutlineGithub />
              </a>
              <a href="https://www.linkedin.com/in/sanruiz" target="_blank">
                <AiOutlineLinkedin />
              </a>
              <a href="https://twitter.com/sanruiz" target="_blank">
                <AiOutlineTwitter />
              </a>
            </div>
          </section>

          <section className="md:max-w-5xl mx-auto">
            <div className="lg: flex flex-col md:flex-row justify-between gap-10 my-10">
              {cards.map((card) => (
                <Card {...card} key={card.title} />
              ))}
            </div>
          </section>

          <section className="md:max-w-5xl mx-auto">
            <h3 className="text-3xl py-1"> Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              Since the begining of my journey as a freelance developer, I've
              done remote work for{" "}
              <span className="text-cyan-600">agencies</span>, consulted for{" "}
              <span className="text-cyan-600">startups</span> and collaborated
              with talented people to create digital products for both business
              and consumer use.
            </p>

            <Projects posts={edges} />
          </section>
        </main>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
