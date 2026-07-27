import styles from "./SkeletonCard.module.css";

const SkeletonCard = () => {
  return (
    <div className={styles.card}>

      <div className={styles.header}>
        <div className={styles.lineLarge}></div>
        <div className={styles.circle}></div>
      </div>

      <div className={styles.lineSmall}></div>

      <div className={styles.price}></div>

      <div className={styles.lineMedium}></div>

      <div className={styles.footer}></div>

    </div>
  );
};

export default SkeletonCard;