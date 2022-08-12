import MovieCard from "../movie-card";
import type { RecentShowsRes } from "../../interfaces/api-interfaces";
import styles from "./latest-shows.module.css";

interface Props {
  movies: RecentShowsRes;
}

const LatestShows = ({ movies }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.movielist}>
        {movies.map(({ id, show }) => {
          return (
            <MovieCard
              key={id}
              id={show?.id || 0}
              name={show?.name || ""}
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
