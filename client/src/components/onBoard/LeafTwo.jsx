import { useState } from "react";
import styles from "../../pages/OnBoarding.module.css";
import Image from "next/image";
import { handleSkillsServer } from "@/pages/api/auth/user";
const LeafTwo = () => {
  const [skills, setSkills] = useState([]);
  const [mesage, setMesage] = useState();
  console.log(typeof skills);
  1;

  const handleSkills = async () => {
    const response = await handleSkillsServer(skills);
    if (response) {
      setSkills("");
      console.log("Guardado exitosamente");
      setMesage("Guardado exitosamente");
    } else {
      console.log("Error al guardar");
    }
  };
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
            onClick={() => handleSkills()}
            className={styles.button}
            type="submit"
          >
            Guardar
          </button>
        </div>
        <div>
          <p className="text-white font-bold text-lg">{mesage && mesage}</p>
        </div>
      </div>
    </div>
  );
};
export default LeafTwo;
