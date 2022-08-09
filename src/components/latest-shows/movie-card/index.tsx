import Image from "next/image";
import styles from "./style.module.css";

interface MovieCardProps {
  url: string;
  rating: number;
  name: string;
  imageurl: string;
}

const MovieCard = ({ name, url, rating, imageurl }: MovieCardProps) => {
  return (
    <div className={styles.container}>
      <Image
        alt="movie poster"
        layout="responsive"
        src={imageurl}
        sizes="30vw"
        width="500px"
        height="600px"
      />
      <div>star: {rating}</div>
      <div>{name}</div>
    </div>
  );
};

export default MovieCard;
