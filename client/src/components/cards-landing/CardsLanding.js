import styles from "./cards.module.css";
import Image from "next/image";
const CardsLanding = () => {
  return (
    <section className={styles.container}>
      <div>
        <Image width={300} height={200} src="/img/img4.png" />
        <p>Rapido</p>
        <p>Descripcion</p>
      </div>
      <div>
        <Image width={300} height={200} src="/img/img4.png" />
        <p>Facil de usar</p>
        <p>Descripcion</p>
      </div>
      <div>
        <Image width={300} height={200} src="/img/img4.png" />
        <p>Intuitivo</p>
        <p>Descripcion</p>
      </div>
      <div>
        <Image width={300} height={200} src="/img/img4.png" />
        <p>Profesional</p>
        <p>Descripcion</p>
      </div>
    </section>
  );
};

export default CardsLanding;
