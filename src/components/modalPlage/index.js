import styles from "./index.module.scss";
import { signalModal } from "../signals";

export default function ModalPlage() {

    const hideModal = () => {
        signalModal.dispatch()
    }

  return (
    <div className={styles.container} onClick={hideModal}>
      <div className={styles.modalcontent}>
        <img
          className={styles.modalimage}
          src="../../Plage.jpeg"
          width="622"
          height="223"
        />
        <p className={styles.categorieplage}>Plage</p>
        <h2>Plage du Fortin</h2>
        <p className={styles.info}>
          <div className={styles.circle}/>
          Taux de pollution moyen
        </p>
        <p className={styles.info}>
          <img className={styles.infoimage} src="../../location.png"/>
          Rte du Rove, 13016 Marseille
        </p>
        <p className={styles.subtitle}>Description</p>
        <p className={styles.content}>
          La plage du Fortin, à Marseille, est une belle plage où le sable fin
          est parsemé de galets et l'eau turquoise, publique et surveillée.
          C'est un lieu avec énormement de petits déchets plastiques laissés par
          les habitants ou touristes. La pollution plastique aura bientôt raison
          du Grand Bleu, il est encore temps de prendre conscience du mal que
          nous faisons à ces êtres silencieux qui peuplent les Océans.
        </p>
      </div>
    </div>
  );
}
