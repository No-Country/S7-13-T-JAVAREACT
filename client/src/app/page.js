import Image from "next/image";
/* import { Inter } from "next/font/google"; */
import styles from "./page.module.css";
import Link from "next/link";

/* const inter = Inter({ subsets: ["latin"] });
 */
export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.menu}>
          <div>
            <span className={styles.logo}>Logo</span>
          </div>
          <div>
            <ul>
              <Link href={"/sobre"}>
                <li>Sobre PortaCode</li>
              </Link>
              <Link href={"/precios"}>
                <li>Precios</li>
              </Link>
              <Link href={"/ayuda"}>
                <li>Ayuda</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className={styles.botones}>
          <Link href={"/register"}>
            <button>Registrarme</button>
          </Link>
          <Link href={"/login"}>
            <button>Iniciar Sesión</button>
          </Link>
        </div>
      </nav>
      <div className={styles.container}>
        <div>
          <Image src="/img/robot.png" alt="robot" width={286} height={300} />
        </div>
        <div className={styles.container_right}>
          <h1 className={styles.title}>
            Hola soy PortaCode, te doy la bienvenida a la Página Web
          </h1>
          <p>
            Te ayudaremos a construir tu portfolio profesional de forma rápida y
            sencilla
          </p>
          <Link href={"/register"}>
            <button>Comencemos</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
