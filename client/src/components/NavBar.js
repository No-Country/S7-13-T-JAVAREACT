import { signOut, useSession } from "next-auth/react";
import styles from "./navbar.module.css";
import Link from "next/link";

const NavBar = () => {
  const { data: session, status } = useSession();
  return (
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <div>
          <ul>
            <Link href={"/sobre"}>
              <li>Sobre PortaCode</li>
            </Link>
            <Link href={"/"}>
              {" "}
              <li>Precios</li>
            </Link>
            <Link href={"/"}>
              {" "}
              <li>Ayuda</li>
            </Link>
          </ul>
        </div>
      </div>
      <div>
        {status === "authenticated" ? (
          <div className={styles.botones}>
            <p>
              Hola!<strong> {session.user.name}</strong>
            </p>
            <Link href={"/portfolio"}>
              <button> Ir al Portafolio</button>
            </Link>
            <button onClick={() => signOut()}>Logout</button>
          </div>
        ) : (
          <div className={styles.botones}>
            <Link href={"/register"}>
              <button>Registrarme</button>
            </Link>
            <Link href={"/login"}>
              <button>Iniciar Sesión</button>
            </Link>
          </div>
        )}
      </div>

      {/* <div className={styles.botones}>
        <Link href={"/register"}>
          <button>Registrarme</button>
        </Link>
        <Link href={"/login"}>
          <button>Iniciar Sesión</button>
        </Link>
      </div> */}
    </nav>
  );
};

export default NavBar;
