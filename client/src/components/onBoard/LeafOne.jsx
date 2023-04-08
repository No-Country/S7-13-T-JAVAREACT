import styles from "../../app/onBoarding/OnBoarding.module.css";
import Image from "next/image";
const LeafOne = () => {
  return (
    <div className={styles.containerImageText}>
      <div className={styles.image}>
        <Image src="/img/robot.svg" alt="robot" width={384} height={430} />
      </div>
      <div className={styles.text}>
        <h1 className={styles.h1Welcome}>
          ¡Te doy la bienvenida!, Voy a guiarte en la construcción de tu
          portfolio
        </h1>
        <p className={styles.pQuestion}>
          Te haré algunas preguntas para construir tu perfil
        </p>
        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor="title">
            Para comenzar, ¿A qué te dedicas?
          </label>
          <input
            className={styles.input}
            name="title"
            type="text"
            placeholder="Ej: Backend Developer, Frontend Developer, ..."
          />
        </div>
      </div>
    </div>
  );
};
export default LeafOne;
