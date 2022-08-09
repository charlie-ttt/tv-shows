import type { Movie } from "./movie-card";
import MovieCard from "./movie-card";

interface LatestShowsProps {
  movies: Movie[];
}

const LatestShows = ({ movies }: LatestShowsProps) => {
  return (
    <>
      {movies.map(({ id, url, name }) => (
        <MovieCard key={id} url={url} title={name} star={3} />
      ))}
    </>
  );
};

export default LatestShows;
