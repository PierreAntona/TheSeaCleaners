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
        <h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br/> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/> consequat. Duis aute irure dolor in reprehenderit.</p>
        <div className={styles.button} onClick={hideScreen}>
        <span className={styles.textButton}>Voir la map</span>
        </div>
    </div>
  );
}