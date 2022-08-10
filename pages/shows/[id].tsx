import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import Head from "next/head";
import Image from "next/image";
import StarRating from "../../src/components/star-rating";
import defaultstyles from "../../styles/default-layout.module.css";
import showdetailpage from "../../styles/show-detail-page.module.css";

const Show = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { name, rating, image, summary, status, schedule, genres, network } =
    data;

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
        <div className={showdetailpage.summarycontainer}>
          <div className={showdetailpage.moviecard}>
            <Image
              alt="movie poster"
              src={image?.medium || "https://via.placeholder.com/150"}
              layout="fill"
            />
          </div>
          <div className={showdetailpage.summarycontent}>
            <StarRating value={rating?.average || 0} showNumber={true} />
            <h2 className={showdetailpage.summarytitle}>{name}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: summary }}
              className={showdetailpage.summarydescription}
            />
          </div>
        </div>
        <div className={showdetailpage.showdetailscontainer}>
          <div className={showdetailpage.showdetailscolumn}>
            <h3 className={showdetailpage.columnHeader}>Show Info</h3>
            <div className={showdetailpage.detailItem}>
              Streamed on
              <span className={showdetailpage.resulttext}>
                {network?.name || "n/a"}
              </span>
            </div>
            <div className={showdetailpage.detailItem}>
              Schedule
              <span className={showdetailpage.resulttext}>
                {schedule?.days?.join(", ") || "n/a"}
              </span>
            </div>
            <div className={showdetailpage.detailItem}>
              Status
              <span className={showdetailpage.resulttext}>
                {status || "n/a"}
              </span>
            </div>
            <div className={showdetailpage.detailItem}>
              Genre
              <span className={showdetailpage.resulttext}>
                {genres?.join(", ") || "n/a"}
              </span>
            </div>
          </div>

          <div className={showdetailpage.showdetailscolumn}>
            <h3 className={showdetailpage.columnHeader}>Starring</h3>
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
  status: string;
  schedule: {
    time: string;
    days: string[];
  };
  genres: string[];
  network: null | {
    country: { name: string };
    id: number;
    name: string;
    officialSite: string;
  };
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id || "";
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data: APIMovieDetail = await res.json();
  return { props: { data } };
};

export default Show;
