import { useSession } from "next-auth/react";
import styles from "../../pages/OnBoarding.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { handleStacksServer } from "@/pages/api/auth/user";

const LeafOne = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [mesage, setMesage] = useState();
  console.log(session);
  if (status === "unauthenticated") {
    router.push("/login");
  }
  const [stack, setStack] = useState([]);

  const handleSaveStack = async () => {
    const response = await handleStacksServer(stack);
    if (response) {
      setStack("");
      console.log("Guardado exitosamente");
      setMesage("Guardado exitosamente");
    } else {
      console.log("Error al guardar");
    }
  };
  console.log(stack);
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
            Para comenzar, ¿A qué te dedicas?
          </label>
          <input
            onChange={(e) => setStack(e.target.value)}
            className={styles.input}
            name="title"
            type="text"
            placeholder="Ej: Backend Developer, Frontend Developer, ..."
            value={stack}
          />
          <button
            onClick={() => handleSaveStack()}
            className={styles.button}
            type="submit"
          >
            Guardar
          </button>
          <div>
            <p className="text-white font-bold text-lg">{mesage && mesage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeafOne;
