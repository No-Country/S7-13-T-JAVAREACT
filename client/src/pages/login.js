"use client";
/* import { useUserContext } from "@/context/UserContext"; */
import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const page = () => {
  const router = useRouter();
  /*   const [data, setData] = useState({});
   */
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    router.push("/onboarding");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
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
        {/*  <div className={styles.buttonContainer}>
          <button className={styles.button}>❤ Google</button>
          <button className={styles.button}>❤ Github</button>
        </div> */}
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

/*   useEffect(() => {
    fetch("https://portacode2-production.up.railway.app/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [data]); */
/* const authenticate = async () => {
    const response = await fetch(
      "https://portacode2-production.up.railway.app/api/v1/auth/authenticate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ email, password }),
      }
    );
    
    const result = await response.json();
    if (result.token) {
      localStorage.setItem("token", result.token);
    }

    return data;
  }; */
