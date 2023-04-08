"use client";
import { useUserContext } from "@/context/UserContext";
import { useState } from "react";
import styles from "./Login.module.css";
import Link from "next/link";

const page = () => {
  /*
  const { user } = useUserContext();
  console.log(user);

  const [data, setData] = useState({});

  const [email, setEmail] = useState("luis@luis.com");
  const [password, setPassword] = useState("123123");
  console.log(setEmail);
  console.log(setPassword);*/
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
/*
  const authenticate = async () => {
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
    //   const data = await response.json();
    const result = await response.json();
    if (result.token) {
      // Guardar el token en el almacenamiento local del navegador
      localStorage.setItem("token", result.token);
    }

    return data;
  }
*/
  return (
    <main className={styles.container}>
      <form className={styles.containerLogin} onSubmit={handleSubmit}>
        <Link href={"/"} className={styles.buttonBack}>
          x
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
        <button
          className={styles.button}
          /*onClick={() => {
            authenticate;
          }}*/
        >
          Iniciar Sesión
        </button>
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
