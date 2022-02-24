import styles from "./index.module.scss";
import Search from "../search";
import Legend from "../legend";
import MapButton from "../map_button";
import MySlider from "../slider";

export default function HUD() {
  return (
    <div className={styles.container}>
      <Search />
      <MapButton/>
      <Legend/>
      <MySlider/>
    </div>
  );
}
