import { useState } from "react";
import styles from "./index.module.scss";

export default function Search() {

  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const activeFilter1 = () => {
    !active1 ? setActive1(true) : setActive1(false);
  }
  const activeFilter2 = () => {
    !active2 ? setActive2(true) : setActive2(false);
  }
  const activeFilter3 = () => {
    !active3 ? setActive3(true) : setActive3(false);
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Chercher une plage, un plastique, ..."
        className={styles.search}
      />
      <div className={styles.filters}>
      <div className={!active1 ? styles.filter : styles.active} onClick={activeFilter1}>Plages</div>
      <div className={!active2 ? styles.filter : styles.active} onClick={activeFilter2}>Plastiques</div>
      <div className={!active3 ? styles.filter : styles.active} onClick={activeFilter3}>Évènements</div>
      </div>
    </div>
  );
}
