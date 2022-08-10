import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import Head from "next/head";
import Image from "next/image";
import defaultstyles from "../../styles/default-layout.module.css";
import showdetailpage from "../../styles/show-detail-page.module.css";

const Show = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { name, rating, image, summary } = data;

  return (
    <div className={defaultstyles.container}>
      <Head>
        <title>TV Bland: Show Detail Page</title>
        <meta
          name="description"
          content="Detail about specific TV shows with ratings"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={defaultstyles.bannertop} />
      <main className={defaultstyles.main}>
        <h1 className={defaultstyles.title}>TV Bland</h1>
        <div className={showdetailpage.summary}>
          <Image
            alt="movie poster"
            src={image?.medium || "https://via.placeholder.com/150"}
            width="300px"
            height="450px"
          />
          <div>
            <h2>{name}</h2>
            <div>rating: {rating?.average || "N/A"}</div>
            <div dangerouslySetInnerHTML={{ __html: summary }} />
          </div>
        </div>
      </main>
      <footer className={defaultstyles.footer}></footer>
    </div>
  );
};

interface APIMovieDetail {
  image: {
    medium: string;
    original: string;
  };
  id: number;
  averageRuntime: number;
  summary: string;
  rating: {
    average: number;
  };
  name: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id || "";
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data: APIMovieDetail = await res.json();
  return { props: { data } };
};

export default Show;
