"use client";
import { useState } from "react";
import styles from "./Login.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log(session);
  if (status === "authenticated") {
    router.push("/onboarding");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  console.log(user);
  console.log(setEmail);
  console.log(setPassword);
  /*   const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      console.log(data);
      setUser(data);
      router.push("/onboarding");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.container}>
      <form className={styles.containerLogin} onSubmit={handleSubmit}>
        <Link href={"/"}>
          <button className={styles.buttonBack}>x</button>
        </Link>
        <h1>Iniciar Sesión</h1>
        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor="email">
            Correo Electrónico
          </label>
          <input
            className={styles.input}
            type="email"
            id="email_field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor="password">
            Contraseña
          </label>
          <input
            className={styles.input}
            type="password"
            id="password_field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">
          Iniciar Sesión
        </button>
        <p className={styles.otherOptions}>Otras Opciones</p>
        <p className={styles.p}>
          ¿No tienes cuenta?{" "}
          <Link className={styles.linkRegister} href={"/register"}>
            ¡Registrate!
          </Link>
        </p>
      </form>
      <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
      <button onClick={() => signOut()}>Sign out </button>
    </main>
  );
};

export default page;
