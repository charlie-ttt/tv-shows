import StarRatingComponent from "react-star-rating-component";

interface Props {
  value: number;
  showNumber: boolean;
}

const StarRating = ({ value, showNumber }: Props) => {
  const scaledownFactor = 2;
  return (
    <div>
      <StarRatingComponent
        name="show-rating"
        editing={false}
        starCount={10 / scaledownFactor}
        value={value / scaledownFactor}
      />
      {showNumber && <span style={{ marginLeft: "10px" }}>{value} / 10</span>}
    </div>
  );
};

export default StarRating;
