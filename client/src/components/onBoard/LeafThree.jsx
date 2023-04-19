import { useState } from "react";
import styles from "../../pages/OnBoarding.module.css";
import Image from "next/image";
const LeafThree = () => {
  const [portfolio, setPortfolio] = useState("");
  const [seleccion, setSeleccion] = useState("");
  console.log(portfolio, seleccion);
  return (
    <div className={styles.containerImageText}>
      <div className={styles.image}>
        <Image src="/img/robotHello.png" alt="robot" width={384} height={430} />
      </div>
      <div className={styles.text}>
        <h1 className={styles.h1Welcome}>¡Perfecto!</h1>
        <p className={styles.pQuestion}>
          Ahora veamos que tipo de diseño es ideal para ti.
        </p>
        <div className={styles.containerDesignColours}>
          <p>
            Selecciona las opciones que mas te gusten, tu portfolio se generará
            automáticamente.
          </p>
          <div className={styles.containerDesign}>
            <button
              onClick={() => setSeleccion("Moderno")}
              className={styles.buttonDesign}
            >
              Moderno
            </button>
            <button className={styles.buttonDesign}>Elegante</button>
            <button className={styles.buttonDesign}>Minimalista</button>
            <button className={styles.buttonDesign}>Creativo</button>
          </div>
          <div className={styles.containerPortfolios}>
            <button
              onClick={() => {
                setPortfolio("Lanzani");
              }}
            >
              <Image
                className={styles.pickPortfolio}
                src="/img/lanzani.png"
                width={300}
                height={300}
              />
            </button>
            <button
              onClick={() => {
                console.log("Fram");
              }}
            >
              <Image
                className={styles.pickPortfolio}
                src="/img/fram.png"
                width={300}
                height={300}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeafThree;
