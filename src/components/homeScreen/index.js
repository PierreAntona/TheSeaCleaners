import styles from "./index.module.scss";
import { useState } from "react";
import { showInfo } from "./../signals";

export default function HomeScreen() {

    const [displayScreen, setDisplayScreen] = useState(true);

    const hideScreen = () => {
        setDisplayScreen(false);
        showInfo.dispatch()
    }

  return (
    <div className={displayScreen ? styles.container : styles.container && styles.hide}>
        <h1 className={styles.title}>Le futur des mers et des océans avec toi</h1>
        <p className={styles.text}>Découvre avec nous tous les éléments sur le plastique afin de mieux le comprendre et l’appréhender. Tu pourras par la suite mieux nous aider en participant aux différents évènements que nous proposons ou en partageant les déchets que tu trouves au quotidien où que tu sois dans le monde. Toute initiative est bonne à prendre et chaque action, même minime, contribuera à changer nos habitudes ! </p>
        <div className={styles.button} onClick={hideScreen}>
        <span className={styles.textButton}>Voir la map</span>
        </div>
    </div>
  );
}