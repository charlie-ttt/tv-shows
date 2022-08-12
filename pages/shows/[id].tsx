import type {
  CastRes,
  MovieDetailRes,
} from "../../src/interfaces/api-interfaces";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import type { AxiosResponse } from "axios";
import DetailItem from "../../src/components/detail-item";
import DetailItemWithIcon from "../../src/components/detail-item-with-icon";
import Error from "next/error";
import Head from "next/head";
import Image from "next/image";
import StarRating from "../../src/components/star-rating";
import axios from "axios";
import styles from "../../styles/show-detail-page.module.css";

const LIMIT_STARRING = 6;

const Show = ({
  showData,
  castData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const name = showData.name;
  const rating = showData.rating?.average || 0;
  const imageurl = showData.image?.medium || "https://via.placeholder.com/150";
  const summary = showData.summary || "";
  const status = showData.status || "n/a";
  const schedule = showData.schedule?.days?.join(", ") || "n/a";
  const genres = showData.genres?.join(", ") || "n/a";
  const network = showData.network?.name || "n/a";

  return (
    <div className={styles.container}>
      <Head>
        <title>TV Bland: Show Detail Page</title>
        <meta
          name="description"
          content="Detail about specific TV shows with ratings"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bannertop} />
      <main className={styles.main}>
        <h1 className={styles.title}>TV Bland</h1>
        <div className={styles.summarycontainer}>
          <div className={styles.moviecard}>
            <Image
              alt="movie poster"
              src={imageurl}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={styles.summarycontent}>
            <StarRating value={rating} showNumber={true} />
            <h2 className={styles.summarytitle}>{name}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: summary }}
              className={styles.summarydescription}
            />
          </div>
        </div>
        <div className={styles.showdetailscontainer}>
          <div>
            <h3 className={styles.columnHeader}>Show Info</h3>
            <div className={styles.detailItemContainer}>
              <DetailItem name="Streamed on" value={network} />
              <DetailItem name="Schedule" value={schedule} />
              <DetailItem name="Status" value={status} />
              <DetailItem name="Genre" value={genres} />
            </div>
          </div>

          <div>
            <h3 className={styles.columnHeader}>Starring</h3>
            {castData.map((cast, i) => (
              <DetailItemWithIcon
                key={i} // use index because characterId from API response are duplicated for some reason
                name={cast?.person?.name || "n/a"}
                value={cast?.character?.name || "n/a"}
              />
            ))}
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

interface Props {
  showData: MovieDetailRes;
  castData: CastRes;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const API_ENDPOINT = process.env.TVMAZE_ENDPOINT;
  const id = context?.params?.id || null;
  if (!id) return <Error statusCode={400} />;

  const [showData, castData]: [
    AxiosResponse<MovieDetailRes>,
    AxiosResponse<CastRes>
  ] = await Promise.all([
    axios.get(`${API_ENDPOINT}/shows/${id}`),
    axios.get(`${API_ENDPOINT}/shows/${id}/cast`),
  ]);

  return {
    props: {
      showData: showData.data,
      castData: castData.data.slice(0, LIMIT_STARRING),
    },
  };
};

export default Show;
