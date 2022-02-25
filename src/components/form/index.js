import styles from "./index.module.scss";
import { signalForm } from "../signals";

export default function Form() {

    const hideForm = () => {
        signalForm.dispatch();
      };

  return (
    <div className={styles.container}>
      <a className={styles.text_white && styles.retour} onClick={hideForm}>
        <img src="/cheveron-left.svg" className={styles.chevron}/> Retour
      </a>
      <h1 className={styles.text_white}>
        Le futur des mers et des océans avec toi
      </h1>

      <p className={styles.text_white}>
        Tu te trouves devant un déchet plastique ? Tu peux nous le partager
        grâce au formulaire juste ci-dessous.
      </p>

      <form>
        <div className={styles.columnOne}>
          <label>
            Quel est ton produit ?* <br />
            <input
              className={styles.input_type}
              type="text"
              placeholder="Bouteille d’eau, sac plastique, bouteille de gel douche,.."
              name="name"
            />{" "}
            <br /> <br />
          </label>
          <label>
            À quel endroit était-il ?* <br />
            <input
              className={styles.input_type}
              type="text"
              placeholder="Quai de la Seine, 75019 Paris"
              name="name"
            />{" "}
            <br /> <br />
          </label>
          <label>
            Quel est ton identifiant Instagram ? <br />
            <input
              className={styles.input_type}
              type="text"
              placeholder="@TheSeaCleaners"
              name="name"
            />{" "}
            <br /> <br />
          </label>
          <input type="checkbox"></input>{" "}
          <strong>
            J’accepte le partage de ma photo sur les réseaux sociaux de The
            SeaCleaners
          </strong>
        </div>

        <div className={styles.columnTwo}>
          <label>
            Importe ta photo*
            <div className={styles.input_download} type="text" name="name">
              <img src="/download.svg" />
            </div>
          </label>
        </div>
      </form>
      <div className={styles.center}>
        <button className={styles.button_type} type="submit" value="Envoie" onClick={hideForm}>
          Envoie
        </button>
      </div>
    </div>
  );
}
