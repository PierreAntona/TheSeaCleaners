import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { useState, useEffect } from "react";
import MyHeader from "../components/header";
import HomeScreen from "../components/homeScreen";
import HUD from "../components/hud";
import { showInfo, signalModal, signalModalPlage } from "../components/signals";
import ModalPlage from "../components/modalPlage";
import ModalEvent from "../components/modalEvent";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoicGllcnJlYW50b25hIiwiYSI6ImNrendwdjB1ajAyM2wyb3J2b2JwbzhmeGQifQ.ChHYu8fw2OwFONdoG7PPAw";

export default function Home() {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [showHUD, setShowHUD] = useState(false);
  const [showModalPlage, setShowModalPlage] = useState(false);
  const [showModalPlastique, setShowModalPlastique] = useState(false);
  const [showModalEvent, setShowModalEvent] = useState(false);

  const hideScreen = () => {
    setShowModalPlage(false);
    setShowModalPlastique(false);
    setShowModalEvent(false);
  }

  const showPlage = () => {
    setShowModalPlage(true);
  }
  const showEvent = () => {
    setShowModalEvent(true);
  }
  const showPlastique = () => {
    setShowModalPlastique(true);
  }

  const refresh = () => {
    setShowHUD(true);
  }

  useEffect(() => {
    const showHUD = showInfo.add(refresh);
    const showMyModal = signalModal.add(hideScreen);
    const showMyModalPlage = signalModalPlage.add(showPlage);

    return () => {
      showInfo.detach(showHUD);
      signalModal.detach(showMyModal);
      signalModalPlage.detach(showMyModalPlage);
    };
  });

  useEffect(() => {
    setPageIsMounted(true);

    const plage1 =  [5.3646797, 43.2986828];
    const plage2 = [12.554729, 55.70651];
    const plage3 = [ 2.349014, 48.864716];

    const map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/pierreantona/ckzwt8772000514pbxx4nxm3f",
      center: plage1,
      zoom: 4,
    });

    // create the popup
    const popupPlage = new mapboxgl.Popup({ offset: 25 });
    popupPlage.on('open', () => {
      setShowModalPlage(true);
    });

    const popupPlastique = new mapboxgl.Popup({ offset: 25 });
    popupPlastique.on('open', () => {
      setShowModalPlastique(true);
    });

    const popupEvent = new mapboxgl.Popup({ offset: 25 });
    popupEvent.on('open', () => {
      setShowModalEvent(true);
    });

    const el = document.createElement("div");
    el.id = "marker1";

    const el2 = document.createElement("div");
    el2.id = "marker2";

    const el3 = document.createElement("div");
    el3.id = "marker3";

    // Marker plage 1
    new mapboxgl.Marker(el)
      .setLngLat(plage1)
      .setPopup(popupPlage)
      .addTo(map);

    // Marker plage 2
    new mapboxgl.Marker(el2)
      .setLngLat(plage2)
      .setPopup(popupPlastique)
      .addTo(map);

    // Marker plage 3
    new mapboxgl.Marker(el3)
      .setLngLat(plage3)
      .setPopup(popupEvent) 
      .addTo(map);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>The Sea Cleaners - Maps</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.0/mapbox-gl-geocoder.min.js'></script>
        <link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.0/mapbox-gl-geocoder.css' type='text/css' />
      </Head>

      <MyHeader />
      <main className={styles.main}>
        <HomeScreen />
        {showHUD ? <HUD/> : null}
        {showModalPlage ? <ModalPlage/> : null}
        {showModalEvent ? <ModalEvent/> : null}


          <showModalPlastique>
            {showModalPlastique ?

            <div className={styles.modal}>
                <div className={styles.modalcontent} >
                  <span className={styles.close} onClick={hideScreen}>&times;</span>

                  <img className={styles.modalimage} src="../images/Plastique.jpg" width="622" height="223" />

                  <p className={styles.categorie}>Plastique</p>

                  <h2>Bouteille en plastique</h2>

                  <p className={styles.info}>
                    <img className={styles.infoimage} src="../images/Sablier.svg"></img>
                    450 ans
                  </p>

                  <p className={styles.info}>
                    <img className={styles.infoimage} src="../images/Icon.svg"></img>
                    Paris
                  </p>

                  <p className={styles.subtitle}>
                    Description
                  </p>

                  <p className={styles.content}>
                    Des tonnes de déchets plastiques issus des rues de Jakarta sont emportées par les pluies en mer et flottent parfois jusqu'aux plages de Bali ou jusqu'à l'océan Indien. Forte d'une population de près de 270 millions d'habitants, l'Indonésie est le deuxième contributeur au monde, derrière la Chine, à ces amas de plastiques qui polluent les océans.
                  </p>

                </div>
              </div>

              : null}

          </showModalPlastique>
          
        <div id="my-map" className={styles.mymap} />
      </main>
    </div>
  );
}
