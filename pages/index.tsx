import type { AxiosResponse } from "axios";
import Head from "next/head";
import { InferGetServerSidePropsType } from "next";
import LatestShows from "../src/components/latest-shows";
import type { RecentShowDetail } from "../src/interfaces/api-interfaces";
import axios from "axios";
import styles from "../styles/home-page.module.css";

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <title>Home Page: TV Bland</title>
        <meta name="description" content="TV Bland Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bannertop}></div>
      <main className={styles.main}>
        <div className={styles.title}>TV Bland</div>
        <p className={styles.description}>
          TV Show and web series database. <br />
          Create personalised schedules. Episode guide, cast, crew, and
          character information.
        </p>
        <h2 className={styles.latestshows}>Latest Added Shows</h2>
        <LatestShows movies={data} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export async function getServerSideProps() {
  const API_ENDPOINT = process.env.TVMAZE_ENDPOINT;
  const res: AxiosResponse<RecentShowDetail[]> = await axios.get(
    `${API_ENDPOINT}/schedule`
  );
  return { props: { data: res.data } };
}

export default Home;
