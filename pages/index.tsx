import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import type { AxiosResponse } from "axios";
import Error from "next/error";
import Head from "next/head";
import LatestShows from "../src/components/latest-shows";
import type { RecentShowDetail } from "../src/interfaces/api-interfaces";
import axios from "axios";
import styles from "../styles/home-page.module.css";

const Home = ({
  data,
  errorCode,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (errorCode) return <Error statusCode={errorCode} />;

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
        {data && <LatestShows movies={data} />}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

interface Props {
  data: RecentShowDetail[] | null;
  errorCode: number | null;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const API_ENDPOINT = process.env.TVMAZE_ENDPOINT;
  try {
    const res: AxiosResponse<RecentShowDetail[]> = await axios.get(
      `${API_ENDPOINT}/schedule`
    );
    return {
      props: {
        data: res.data,
        errorCode: null,
      },
    };
  } catch (error: any) {
    return {
      props: {
        data: null,
        errorCode: 500,
      },
    };
  }
};

export default Home;
