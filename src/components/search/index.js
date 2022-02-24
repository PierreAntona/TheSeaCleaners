import styles from "./index.module.scss";

export default function Search() {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Chercher une plage, un plastique, ..."
        className={styles.search}
      />
      <div className={styles.filter}>Plages</div>
      <div className={styles.filter}>Plastiques</div>
      <div className={styles.filter}>Évènements</div>
    </div>
  );
}
