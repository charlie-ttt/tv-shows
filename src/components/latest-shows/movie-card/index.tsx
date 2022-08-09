interface MovieCardProps {
  url: string;
  star: number;
  title: string;
}

export interface Movie {
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
  show: any;
  summary: string;
  type: string;
  url: string;
}

const MovieCard = ({ url, star, title }: MovieCardProps) => {
  return (
    <>
      <div>title: {title}</div>
      <div>star: {star}</div>
      <div>url: {url}</div>
    </>
  );
};

export default MovieCard;
