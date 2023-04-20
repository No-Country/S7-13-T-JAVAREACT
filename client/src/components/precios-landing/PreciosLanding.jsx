import styles from "./preciosLanding.module.css";
import Link from "next/link";
const PreciosLanding = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Nuestros precios</h1>
      <div className={styles.containerInfo}>
        <div className={styles.containerPrice}>
          <div className={styles.boxPrice}>
            <p className={styles.h1}>Pago único</p>
            <span className={styles.price}>3,50</span>
            <p className={styles.h1}>USD</p>
          </div>
        </div>
        <div className={styles.containerText}>
          <p className={styles.h1}>
            Con nuestro plan premium podrás acceder a todas las funciones de
            PortaCode
          </p>

          <span className={styles.p}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                Todos los componentes para tus diseños
              </li>
              <li className={styles.li}>Dominios personalizados</li>
              <li className={styles.li}>
                Herramientas de análisis en tu sitio
              </li>
              <li className={styles.li}>
                Asesoramiento especial de nuestro equipo
              </li>
            </ul>
          </span>
        </div>
        <div className={styles.containerButton}>
          <Link href={"/"}>
            <button className={styles.buttonYellow}>Saber Más</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PreciosLanding;
