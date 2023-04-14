"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const perfil = () => {
  const [dataUser, setDataUser] = useState({});
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "unauthenticated") {
    router.push("/");
  }
  /* 
  useEffect(() => {
    if (status === "authenticated") {
      const fethData = async () => {
        const res = await fetch("/api/profile");
        const data = await res.json();
        console.log(data);
        setDataUser(data);
        fethData();
      };
    }
  }, []);

  if (dataUser !== {}) {
    console.log(dataUser);
  } */
  const getProfile = async () => {
    const res = await axios.get("/api/auth/profile");

    console.log(res);
  };
  return (
    <div>
      Aca se va a mostrar el perfil de usuario
      <button onClick={() => getProfile()}>Get Profile</button>
    </div>
  );
};

export default perfil;
