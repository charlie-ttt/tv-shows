import Image from "next/image";
import Link from "next/link";
import StarRating from "../star-rating";
import styles from "./movie-card.module.css";

interface Props {
  id: number;
  rating: number;
  name: string;
  imageurl: string;
}

const MovieCard = ({ id, name, rating, imageurl }: Props) => {
  return (
    <Link href={`/shows/${id}`}>
      <a style={{ textDecoration: "none" }}>
        <div className={styles.container}>
          <div>
            <Image
              alt="movie poster"
              layout="responsive"
              src={imageurl}
              sizes="30vw"
              width="500px"
              height="700px"
            />
            <StarRating value={rating} showNumber={false} />
            <div>{name}</div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default MovieCard;
