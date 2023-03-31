"use client";
import { useUserContext } from "@/context/UserContext";
import { useState } from "react";
import styles from "./Login.module.css";
const page = () => {
  const { user } = useUserContext();
  console.log(user);
  const [data, setData] = useState();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    /* router.push("/"); */
  };
  return (
    <main>
      <form className={styles.container} onSubmit={handleSubmit}>
        <h1>Login on PortaCode</h1>
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
        <button>Login</button>
      </form>
    </main>
  );
};

export default page;
