import styles from './index.module.scss';
import { signalModal } from '../signals';

export default function ModalPlastique() {

    const hideModal = () => {
        signalModal.dispatch()
    }

  return (
    <div className={styles.container} onClick={hideModal}>
      <div className={styles.modalcontent}>
        <img
          className={styles.modalimage}
          src="../../Plastique.png"
          width="622"
          height="223"
        />
        <p className={styles.categorieplastique}>Plastique</p>
        <h2>Bouteilles d’eau en plastique</h2>
        <p className={styles.info}>
          <img src="../../sablier.png" className={styles.sablier}/>
          450 ans
        </p>
        <p className={styles.info}>
          <img className={styles.infoimage} src="../../location.png"/>
         Saint-Malo
        </p>
        <p className={styles.subtitle}>Description</p>
        <p className={styles.content}>
        Les bouteilles d’eau sont fabriquées avec le type de plastique PET. Elle se décompose au bout de 450 ans. Lorsque du plastique est déversé dans les décharges , il interagit avec l'eau et forme des produits chimiques dangereux. Lorsque ces produits chimiques s'infiltrent sous terre, ils dégradent la qualité de l'eau, affectant ainsi nos nappes phréatiques.
        </p>
      </div>
    </div>
  );
}