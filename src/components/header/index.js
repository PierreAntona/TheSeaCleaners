import styles from "./index.module.scss";
import { useState } from "react";

export default function MyHeader() {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <header className={styles.container}>
      <div className={styles.leftPart}>
        <img src="../../logo.png" className={styles.logo} />
      </div>
      <div className={styles.rightPart}>
        <a href="https://www.theseacleaners.org" target='_blank' className={styles.button}>Espace Site Officiel</a>
        <div className={styles.socialsAndLang}>
          <div className={styles.socials}>
            <a href="" className={styles.social}>
              <img src="../../tiktok.png" className={styles.icon} />
            </a>
            <a href="" className={styles.social}>
              <img src="../../instagram.png" className={styles.icon} />
            </a>
            <a href="" className={styles.social}>
              <img src="../../youtube.png" className={styles.icon && styles.youtube} />
            </a>
          </div>
          <div className={styles.language}>
            <img src="../../uk.png" className={styles.flag} />
            <span>EN</span>
            <img src="../../switch_button.png" className={styles.switch} />
            <span>FR</span>
            <img src="../../france.png" className={styles.flag} />
          </div>
        </div>
      </div>
    </header>
  );
}
