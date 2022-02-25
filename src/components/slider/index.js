import styles from "./index.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { signalModalPlage, signalModalEvent, signalModalPlastique } from "../signals";

export default function MySlider() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
  };

  const showPlage = () => {
    signalModalPlage.dispatch()
  }

  const showEvent = () => {
    signalModalEvent.dispatch()
  }

  const showPlastique = () => {
    signalModalPlastique.dispatch()
  }

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <div className={styles.card} onClick={showPlage}>
          <img className={styles.image} src="../../plage.png" />
          <div className={styles.data}>
            <span className={styles.plage}>Plage</span>
            <span className={styles.name}>Plage du Fortin</span>
            <div className={styles.info}>
              <div className={styles.circle}/>
              <span>Taux de pollution</span>
            </div>
            <div className={styles.location} >
              <img src="../../location.png" className={styles.icon}/>
              <span>Marseille</span>
            </div>
          </div>
        </div>
        <div className={styles.card} onClick={showEvent}>
          <img className={styles.image} src="../../cleanup.png" />
          <div className={styles.data}>
            <span className={styles.event}>Evènement</span>
            <span className={styles.name}>Clean Up journée mondiale du nettoyage</span>
            <div className={styles.location} >
              <img src="../../location.png" className={styles.icon}/>
              <span>Paris</span>
            </div>
            <div className={styles.info}>
              <img src="../../calendar.png" className={styles.icon}/>
              <span>14/03/1022</span>
            </div>
          </div>
        </div>
        <div className={styles.card} onClick={showPlastique}>
          <img className={styles.image} src="../../bouteille.png"/>
          <div className={styles.data}>
            <span className={styles.plastique}>Plastique</span>
            <span className={styles.name}>Bouteilles d’eau en plastique</span>
            <div className={styles.info}>
              <img src="../../sablier.png" className={styles.icon}/>
              <span>450 ans</span>
            </div>
            <div className={styles.location} >
              <img src="../../location.png" className={styles.icon}/>
              <span>Saint-Malo</span>
            </div>
          </div>
        </div>
        <div className={styles.card} onClick={showEvent}>
          <img className={styles.image} src="../../cleanup.png" />
          <div className={styles.data}>
            <span className={styles.event}>Evènement</span>
            <span className={styles.name}>Clean Up journée mondiale du nettoyage</span>
            <div className={styles.location} >
              <img src="../../location.png" className={styles.icon}/>
              <span>Paris</span>
            </div>
            <div className={styles.info}>
              <img src="../../calendar.png" className={styles.icon}/>
              <span>14/03/1022</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
