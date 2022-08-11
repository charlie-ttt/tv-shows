import Image from "next/image";
import styles from "./detail-item-with-icon.module.css";

interface DetailItemWithIconProps {
  name: string;
  value: string;
}

const DetailItemWithIcon = ({ name, value }: DetailItemWithIconProps) => (
  <div className={styles.detailItemWithIconRoot}>
    <Image
      src="/human-icon.svg"
      alt="SVG as an image"
      layout="fixed"
      height={50}
      width={50}
    />
    <div className={styles.detailText}>
      {name}
      <span className={styles.resulttext}>{value}</span>
    </div>
  </div>
);

export default DetailItemWithIcon;
