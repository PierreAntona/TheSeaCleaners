import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { showInfo, signalForm } from "./../signals";
import Form from "../form";

export default function HomeScreen() {
  const [displayScreen, setDisplayScreen] = useState(true);
  const [hideText, setHideText] = useState(false);
  const [form, setForm] = useState(false);

  const hideScreen = () => {
    setDisplayScreen(false);
    showInfo.dispatch();
  };

  const refresh = () => {
    setForm(false);
    setHideText(false);
  }

  useEffect(() => {
    const showMyForm = signalForm.add(refresh);

    return () => {
      signalForm.detach(showMyForm);
    };
  });

  const showForm = () => {
    setForm(true);
    setHideText(true);
  };

  return (
    <div
      className={
        displayScreen ? styles.container : styles.container && styles.hide
      }
    >
      {!hideText ? (
        <div>
          <img className={styles.logo} src="../../logo.png" />
          <h1 className={styles.title}>Prends ton avenir en main</h1>
          <p className={styles.text}>
            Découvre avec nous toutes les caractéristiques du plastique afin de
            mieux lutter contre la pollution des océans. Tu pourras par la suite
            mieux nous aider en participant aux différents évènements que nous
            proposons ou en partageant les déchets que tu trouves au quotidien
            où que tu sois dans le monde. Toute initiative est bonne à prendre
            et chaque action, même minime, contribuera à changer nos habitudes !{" "}
          </p>
          <div className={styles.button} onClick={hideScreen}>
            <span className={styles.textButton}>Voir la map</span>
          </div>
          <div className={styles.buttonForm}>
            <span className={styles.textButton} onClick={showForm}>
              Soumettre un lieu
            </span>
          </div>
        </div>
      ) : null}
      {form ? <Form /> : null}
    </div>
  );
}
