"use client";
/* import { useUserContext } from "@/context/UserContext"; */
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

import styles from "../register/Register.module.css";

const RegisterForm = () => {
  /*   const { user } = useUserContext(); */
  const [token, setToken] = useState("");
  const [mensage, setMensage] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(setMensage);
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
    console.log(userData);

    try {
      const response = await axios.post(
        "https://portacode2-production.up.railway.app/api/v1/auth/register",
        userData
      );
      const token = response.data.token;
      setToken(token);
      console.log(token);
      // guardar token en localStorage o en el estado de la aplicación
      // redirigir al usuario a la página de inicio
    } catch (error) {
      setMensage("Ha ocurrido un error al registrarse");
      console.error(error);
    }
  };

  return (
    <main className={styles.container}>
      <form className={styles.containerRegister} onSubmit={handleSubmit}>
        <button className={styles.buttonBack}>
          <Link href={"/"}>x</Link>
        </button>
        <h1>Registro</h1>
        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor="name">
            Nombre y pellido
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
        <p className={styles.otherOptions}>Otras opciones</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>❤ Google</button>
          <button className={styles.button}>❤ Github</button>
        </div>
      </form>
    </main>
  );
};

export default RegisterForm;

/* /*  */
