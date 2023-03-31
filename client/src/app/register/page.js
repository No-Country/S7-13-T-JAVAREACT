"use client";
/* import { useUserContext } from "@/context/UserContext"; */
import { useState } from "react";

import styles from "../login/Login.module.css";

const RegisterForm = () => {
  /*   const { user } = useUserContext(); */
  const [mensage, setMensage] = useState(false);
  const [userData, setUserData] = useState({
    title: "",
    password: "",
    confirmPassword: "",
  });
  console.log(setMensage);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log(userData);
    /* router.push("/"); */
  };

  return (
    <main>
      <form className={styles.container} onSubmit={handleSubmit}>
        <h1>Register on PortaCode</h1>
        <input
          name="title"
          type="text"
          placeholder="Ingrese nombre de usuario"
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="Contraseña"
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
