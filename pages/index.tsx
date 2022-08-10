import Head from "next/head";
import { InferGetServerSidePropsType } from "next";
import LatestShows from "../src/components/latest-shows";
import type { MovieData } from "../src/components/latest-shows";
import defaultstyles from "../styles/default-layout.module.css";
import homestyles from "../styles/home-page.module.css";

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={defaultstyles.container}>
      <Head>
        <title>Home Page: TV Bland</title>
        <meta name="description" content="TV Bland Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={defaultstyles.bannertop}></div>
      <main className={defaultstyles.main}>
        <div className={defaultstyles.title}>TV Bland</div>
        <p className={defaultstyles.description}>
          TV Show and web series database. <br />
          Create personalised schedules. Episode guide, cast, crew, and
          character information.
        </p>
        <h2 className={homestyles.latestshows}>Latest Added Shows</h2>
        <LatestShows movies={data} />
      </main>
      <footer className={defaultstyles.footer}></footer>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.tvmaze.com/schedule");
  const data: MovieData[] = await res.json();
  return { props: { data } };
}

export default Home;
