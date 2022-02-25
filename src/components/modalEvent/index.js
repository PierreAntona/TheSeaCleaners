import styles from './index.module.scss';
import { signalModal } from '../signals';

export default function ModalEvent() {

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
      <p className={styles.cat}>Évènement</p>
      <h2>Clean Up journée mondiale du nettoyage</h2>
      <p className={styles.info}>
        <img className={styles.infoimage} src="../../location.png"/>
        Paris
      </p>
      <p className={styles.info}>
        <img src="../../calendar.png" className={styles.infoimage}/>
        14/03/1022
      </p>
      <p className={styles.subtitle}>Description</p>
      <p className={styles.content}>
      Rejoins nous pour participer à un clean up grandeur nature dans les rues de Paris pour la journée internationale du nettoyage. Ca sera l’occasion de se retrouver pour une cause commune. Enfile tes gants et rendez vous le 17 septembre 2022. 
      </p>
    </div>
  </div>
    )
}