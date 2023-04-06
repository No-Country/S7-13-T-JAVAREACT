"use client";
/* import { useUserContext } from "@/context/UserContext"; */
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "../login/Login.module.css";

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
    <main>
      <form className={styles.container} onSubmit={handleSubmit}>
        <h1>Register on PortaCode</h1>
        <input
          name="email"
          type="email"
          placeholder="Ingrese su correo electrónico"
          onChange={handleChange}
        />
        <input
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
        <input
          name="confirmPassword"
          placeholder="Repetir contraseña"
          type="password"
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </main>
  );
};

export default RegisterForm;

/* /*  */
