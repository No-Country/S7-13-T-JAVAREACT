"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "./Register.module.css";

const register = () => {
  const [token, setToken] = useState("");
  const [mensage, setMensage] = useState("");
  const [backResponse, setBackResponse] = useState("");
  console.log(backResponse);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      setMensage("Las contraseñas no coinciden");
      return;
    }
    try {
      console.log(userData);
      const response = await axios.post(
        "https://portacode.up.railway.app/api/v1/auth/register",
        userData
      );
      const token = response.data.token;
      console.log(token);
      const respuestaBack = JSON.stringify(response.data.message);
      setBackResponse(respuestaBack);
      setToken(token);
    } catch (error) {
      setMensage("Ha ocurrido un error al registrarse");
      console.error(error);
    }
  };

  return (
    <main className={styles.container}>
      <form className={styles.containerRegister} onSubmit={handleSubmit}>
        <Link href={"/"} className={styles.buttonBack}>
          x
        </Link>
        <h1>Registro</h1>
        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor="name">
            Nombre y Apellido
          </label>
          <input
            className={styles.input}
            name="name"
            type="name"
            placeholder="Escribir..."
            onChange={handleChange}
          />
        </div>
        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor="email">
            Correo Electrónico
          </label>
          <input
            className={styles.input}
            name="email"
            type="email"
            placeholder="Ingrese su correo electrónico"
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
            placeholder="Ingrese una contraseña"
            type="password"
            onChange={handleChange}
          />
          <span>
            {mensage
              ? "Las contraseñas no coinciden"
              : "Las contraseñas coinciden"}
          </span>
        </div>
        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor="confirmPassword">
            Confirmar Contraseña
          </label>
          <input
            className={styles.input}
            name="confirmPassword"
            placeholder="Repetir contraseña"
            type="password"
            onChange={handleChange}
          />
        </div>
        <button className={styles.button}>Registrarse</button>
      </form>
      {/*   <div>{backResponse ? backResponse : ""}</div> */}
      <div>
        <p className={styles.otherOptions}>Otras Opciones</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>❤ Google</button>
          <button className={styles.button}>❤ Github</button>
        </div>
        <p className={styles.p}>
          ¿Ya tienes una cuenta?{" "}
          <Link className={styles.linkRegister} href={"/login"}>
            ¡Inicia Sesión!
          </Link>
        </p>
      </div>
    </main>
  );
};

export default register;
