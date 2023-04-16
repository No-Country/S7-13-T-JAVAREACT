import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const handleComencemos = () => {
    if (status === "authenticated") {
      router.push("/formDatos");
    } else {
      router.push("/login");
    }
  };
  return (
    <section id="home" className={styles.container}>
      <div className={styles.container_right}>
        <h1 className={styles.title}>
          Hola! Soy mascota y te ayudare a crear un portfolio increíble
        </h1>
        <h2>
          Con PortaCode podrás generar un sitio profesional en menos de 10
          minutos.
        </h2>
        <div className={styles.div_boton}>
          <button onClick={handleComencemos}>Comencemos</button>

          <Link href={"/OnBoarding"}>
            <button>OnBoarding</button>
          </Link>
        </div>
      </div>
      <div>
        <Image src="/img/robot.png" alt="robot" width={286} height={300} />
      </div>
    </section>
  );
};

export default Header;
