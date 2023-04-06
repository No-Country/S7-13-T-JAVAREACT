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
        <button onClick={authenticate}>Login</button>
      </form>
    </main>
  );
};

export default page;
