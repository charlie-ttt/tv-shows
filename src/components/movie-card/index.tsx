import Image from "next/image";
import Link from "next/link";
import styles from "./movie-card.module.css";

interface MovieCardProps {
  id: number;
  rating: number;
  name: string;
  imageurl: string;
}

const MovieCard = ({ id, name, rating, imageurl }: MovieCardProps) => {
  return (
    <Link href={`/shows/${id}`}>
      <a>
        <div className={styles.container}>
          <Image
            alt="movie poster"
            layout="responsive"
            src={imageurl}
            sizes="30vw"
            width="500px"
            height="700px"
          />
          <div>star: {rating}</div>
          <div>{name}</div>
        </div>
      </a>
    </Link>
  );
};

export default MovieCard;
