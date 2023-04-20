import styles from "./header.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
  const { data: session, status } = useSession();
  console.log(session);
  const router = useRouter();
  const handleComencemos = () => {
    if (status === "authenticated") {
      router.push("/onboarding");
    } else {
      router.push("/comencemos");
    }
  };
  return (
    <section id="home" className={styles.container}>
      <div className={styles.container_right}>
        <h1 className={styles.title}>
          Hola! Soy Robotín y te ayudare a crear tu portfolio increíble
        </h1>
        <h2>
          Con PortaCode podrás generar un sitio profesional en menos de 10
          minutos.
        </h2>
        <div className={styles.div_boton}>
          <button onClick={handleComencemos}>Comencemos</button>
        </div>
      </div>
      <div>
        <Image src="/img/robotBase.png" alt="robot" width={286} height={300} />
      </div>
    </section>
  );
};

export default Header;
