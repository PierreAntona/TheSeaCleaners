import styles from "./index.module.scss";

export default function Legend() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img src="../../plage.svg" className={styles.marker} />
        Plages
      </div>
      <div className={styles.item}>
        <img src="../../event.svg" className={styles.marker} />
        Évènements
      </div>
      <div className={styles.item}>
        <img src="../../Plastique.svg" className={styles.marker} />
        Caractéristiques plastique
      </div>
    </div>
  );
}
