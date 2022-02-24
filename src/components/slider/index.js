import styles from "./index.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", top: '-40px', left: '54vw' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", top: '-40px', left: '52vw' }}
      onClick={onClick}
    />
  );
}

export default function MySlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <div className={styles.card}>
          <img className={styles.image} src="../../plage.png" />
          <div class={styles.data}>
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
        <div className={styles.card}>
          <img className={styles.image} src="../../bouteille.png" />
          <div class={styles.data}>
            <span className={styles.plastique}>Plastique</span>
            <span className={styles.name}>Bouteilles d'eau en plastique</span>
            <div className={styles.info}>
              <img src="../../sablier.png" className={styles.icon}/>
              <span>450 ans</span>
            </div>
            <div className={styles.location} >
              <img src="../../location.png" className={styles.icon}/>
              <span>Cholet</span>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.image} src="../../cleanup.png" />
          <div class={styles.data}>
            <span className={styles.event}>Evènement</span>
            <span className={styles.name}>Clean Up</span>
            <div className={styles.info}>
              <img src="../../calendar.png" className={styles.icon}/>
              <span>14/03/2022</span>
            </div>
            <div className={styles.location} >
              <img src="../../location.png" className={styles.icon}/>
              <span>Saint Malo</span>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.image} src="../../gobelet.png" />
          <div class={styles.data}>
            <span className={styles.plastique}>Plastique</span>
            <span className={styles.name}>Gobelets</span>
            <div className={styles.info}>
              <img src="../../sablier.png" className={styles.icon}/>
              <span>500 ans</span>
            </div>
            <div className={styles.location} >
              <img src="../../location.png" className={styles.icon}/>
              <span>Lille</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
