import styles from "./navbar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <span>Logo</span>
        </div>
        <div>
          <ul>
            <Link href={"/sobre"}>
              <li>Sobre PortaCode</li>
            </Link>
            <Link href={"/"}>
              <li>Precios</li>
            </Link>
            <Link href={"/"}>
              <li>Ayuda</li>
            </Link>
            <Link href={"/"}>
              <li>Plataforma</li>
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
  );
};

export default NavBar;
