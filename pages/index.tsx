import Head from "next/head";
import { InferGetServerSidePropsType } from "next";
import LatestShows from "../src/components/latest-shows";
import type { MovieData } from "../src/components/latest-shows";
import styles from "../styles/Home.module.css";

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page: TV Bland</title>
        <meta name="description" content="TV Bland Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bannertop}></div>
      <main className={styles.main}>
        <h1 className={styles.title}>TV Bland</h1>
        <p className={styles.description}>
          TV Show and web series database. <br />
          Create personalised schedules. Episode guide, cast, crew, and
          character information.
        </p>
        <LatestShows movies={data} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.tvmaze.com/schedule");
  const data: MovieData[] = await res.json();
  return { props: { data } };
}

export default Home;
