import styles from "./detail-item.module.css";

interface DetailItemProps {
  name: string;
  value: string;
}

const DetailItem = ({ name, value }: DetailItemProps) => (
  <div className={styles.detailItemRoot}>
    {name}
    <span className={styles.resulttext}>{value}</span>
  </div>
);

export default DetailItem;
