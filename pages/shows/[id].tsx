import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import Head from "next/head";
import Image from "next/image";
import type { MovieDetailRes } from "../../src/interfaces/api-interfaces";
import StarRating from "../../src/components/star-rating";
import defaultstyles from "../../styles/default-layout.module.css";
import showdetailpage from "../../styles/show-detail-page.module.css";

const Show = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log("🚀 ~ data", data);
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
            <DetailItem name="Streamed on" value={network?.name || "n/a"} />
            <DetailItem
              name="Schedule"
              value={schedule?.days?.join(", ") || "n/a"}
            />
            <DetailItem name="Status" value={status || "n/a"} />
            <DetailItem name="Genre" value={genres?.join(", ") || "n/a"} />
          </div>

          <div className={showdetailpage.showdetailscolumn}>
            <h3 className={showdetailpage.columnHeader}>Starring</h3>
            {/* <DetailItem name="Streamed on" value={network?.name || "n/a"} /> */}
          </div>
        </div>
      </main>
      <footer className={defaultstyles.footer}></footer>
    </div>
  );
};

interface DetailItemProps {
  name: string;
  value: string;
}

const DetailItem = ({ name, value }: DetailItemProps) => (
  <div className={showdetailpage.detailItem}>
    {name}
    <span className={showdetailpage.resulttext}>{value}</span>
  </div>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const API_ENDPOINT = process.env.TVMAZE_ENDPOINT;
  const id = context?.params?.id || "";
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data: MovieDetailRes = await res.json();
  return { props: { data } };
};

export default Show;
