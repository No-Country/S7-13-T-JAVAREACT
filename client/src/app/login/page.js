"use client";
import { useUserContext } from "@/context/UserContext";
import { useState } from "react";
import styles from "./Login.module.css";

import { redirect } from "next/navigation";
const page = () => {
  const { user } = useUserContext();
  console.log(user);

  const [data, setData] = useState({});

  const [email, setEmail] = useState("luis@luis.com");
  const [password, setPassword] = useState("123123");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const token = localStorage.getItem("token");
  console.log(token + "token");

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
    /*   const data = await response.json(); */
    const result = await response.json();
    if (result.token) {
      // Guardar el token en el almacenamiento local del navegador
      localStorage.setItem("token", result.token);
      redirectTo("/logueado");
    }

    return data;
  };

  return (
    <main>
      <form className={styles.container} onSubmit={handleSubmit}>
        <h1>Login on PortaCode</h1>
        <input
          name="email"
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
        <button
          onClick={() => {
            authenticate();
          }}
        >
          Login
        </button>
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
