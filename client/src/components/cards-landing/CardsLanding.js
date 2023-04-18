import styles from "./cards.module.css";
import Image from "next/image";
const CardsLanding = () => {
  return (
    <section className={styles.container}>
      <div>
        <Image
          alt="Imagen de prueba"
          width={300}
          height={200}
          src="/img/img4.png"
        />
        <p className={styles.p}>Rapido</p>
        <p className={styles.p}>Descripcion</p>
      </div>
      <div>
        <Image
          alt="Imagen de prueba"
          width={300}
          height={200}
          src="/img/img4.png"
        />
        <p className={styles.p}>Facil de usar</p>
        <p className={styles.p}>Descripcion</p>
      </div>
      <div>
        <Image
          alt="Imagen de prueba"
          width={300}
          height={200}
          src="/img/img4.png"
        />
        <p className={styles.p}>Intuitivo</p>
        <p className={styles.p}>Descripcion</p>
      </div>
      <div>
        <Image
          alt="Imagen de prueba"
          width={300}
          height={200}
          src="/img/img4.png"
        />
        <p className={styles.p}>Profesional</p>
        <p className={styles.p}>Descripcion</p>
      </div>
    </section>
  );
};

export default CardsLanding;
