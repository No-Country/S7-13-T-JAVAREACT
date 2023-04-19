import styles from "./slider.module.css";
import Image from "next/image";
const Slider = () => {
  return (
    <div className={styles.containerSlider}>
      <h2 className={styles.title}>Sitios creados con PortaCode</h2>
      <div className={styles.slider}>
        <div className={styles.card}>
          <Image
            alt="Imagen de prueba"
            width={300}
            height={200}
            src="/img/portfolioTemporal1.png"
          />
          <h3>Razan Smith Port</h3>
          <p>@ Razan.dev</p>
        </div>
        <div className={styles.card}>
          <Image
            alt="Imagen de prueba"
            width={300}
            height={200}
            src="/img/img2.png"
          />
          <h3>Collin Smith Port</h3>
        </div>
        <div className={styles.card}>
          <Image
            alt="Imagen de prueba"
            width={300}
            height={200}
            src="/img/img3.png"
          />
          <h3>Título 3</h3>
        </div>
        <div className={styles.card}>
          <Image
            alt="Imagen de prueba"
            width={300}
            height={200}
            src="/img/img3.png"
          />
          <h3>Título 4</h3>
        </div>
        <div className={styles.card}>
          <Image
            alt="Imagen de prueba"
            width={300}
            height={200}
            src="/img/img3.png"
          />
          <h3>Título 4</h3>
        </div>
        <div className={styles.card}>
          <Image
            alt="Imagen de prueba"
            width={300}
            height={200}
            src="/img/img3.png"
          />
          <h3>Título 4</h3>
        </div>
        <div className={styles.card}>
          <Image
            alt="Imagen de prueba"
            width={300}
            height={200}
            src="/img/img3.png"
          />
          <h3>Título 4</h3>
        </div>
      </div>
    </div>
  );
};

export default Slider;
