import Head from "next/head";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TV Bland</title>
        <meta name="description" content="TV Bland Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>TV Bland</h1>

        <p className={styles.description}>
          TV Show and web series database. Create personalised schedules.
          Episode guide, cast, crew, and character information.
        </p>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
