import { useState } from "react";
import styles from "../../pages/OnBoarding.module.css";
import Image from "next/image";
import { handleSkillsServer } from "@/pages/api/auth/user";
const LeafTwo = () => {
  const [skills, setSkills] = useState([]);
  console.log(typeof skills);
  return (
    <div className={styles.containerImageText}>
      <div className={styles.image}>
        <Image src="/img/robotHello.png" alt="robot" width={384} height={430} />
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
            ¿Qué tecnologías utilizas? ¡Agrega todas las opciones que quieras!
            Yo hago el resto.
          </label>

          <input
            className={styles.input}
            name="skills"
            type="text"
            placeholder="Ej: SpringBoot, React, ..."
            value={skills}
            onChange={(e) => setSkills([e.target.value])}
          />
          <button
            onClick={() => handleSkillsServer(skills)}
            className={styles.button}
            type="submit"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};
export default LeafTwo;
