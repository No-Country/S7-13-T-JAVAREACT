"use client";
import { useUserContext } from "@/context/UserContext";
import { useState } from "react";
import styles from "./Login.module.css";
import Link from "next/link";

const page = () => {
  const { user } = useUserContext();
  console.log(user);
  const [data, setData] = useState();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const token = localStorage.getItem("token");
  console.log(token + "token");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    /* router.push("/"); */
  };

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

  const authenticate = async (username, password) => {
    const response = await fetch(
      "https://portacode2-production.up.railway.app//api/v1/auth/authenticate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ username: username, password: password }),
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
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
            name="title"
            type="text"
            placeholder="Ingrese nombre de usuario"
            onChange={handleChange}
          />
        </div>
        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor="password">
            Contraseña
          </label>
          <input
            className={styles.input}
            name="password"
            placeholder="Contraseña"
            type="password"
            onChange={handleChange}
          />
        </div>
        <button className={styles.button}>Iniciar Sesión</button>
        <p className={styles.otherOptions}>Otras Opciones</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>❤ Google</button>
          <button className={styles.button}>❤ Github</button>
        </div>
        <p className={styles.p}>
          ¿No tienes cuenta?{" "}
          <Link className={styles.linkRegister} href={"/register"}>
            ¡Registrate!
          </Link>
        </p>
      </form>
    </main>
  );
};

export default page;
