import MovieCard from "./movie-card";
import styles from "./latest-shows.module.css";
interface LatestShowsProps {
  movies: MovieData[];
}

export interface MovieData {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: null;
  name: string;
  number: number;
  rating: any;
  runtime: number;
  season: number;
  show: {
    image: {
      medium: string;
    };
    name: string;
    rating: {
      average: number;
    };
  };
  summary: string;
  type: string;
  url: string;
}

const LatestShows = ({ movies }: LatestShowsProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.latestshows}>Latest Added Shows</h2>
      <div className={styles.movielist}>
        {movies.map(({ id, url, show }) => {
          return (
            <MovieCard
              key={id}
              name={show?.name || ""}
              url={url}
              rating={show?.rating?.average || 0}
              imageurl={
                show?.image?.medium || "https://via.placeholder.com/150"
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestShows;
