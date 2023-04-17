"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const perfil = () => {
  const [dataUser, setDataUser] = useState({});
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    console.log(session.user.token);
    console.log(session.expires);
    console.log(session.user);
    console.log(session.user.userId);
  }

  const handleUpdateName = async () => {
    try {
      if (session) {
        const config = {
          headers: { Authorization: `Bearer ${session.user.token}` },
        };

        const responseGet = await axios.get(
          `https://portacode.up.railway.app/api/user/${session.user.userId}`,
          config
        );
        const user = responseGet.data;
        console.log(user);
        const responsePut = await axios.put(
          `https://portacode.up.railway.app/api/update/user/${session.user.userId}`,
          {
            ...user,
            name: "Hola test1",
            /*  skills: ["Js", "React", "Node", "MongoDB", "Express", "Next"],
            thumbnail: "https://picsum.photos/200", */
          },
          config
        );
        console.log(responsePut);
        /*  const updateUser = await axios.put(
          `https://portacode.up.railway.app/api/user/${session.user.userId}`,
          {
            name: "Nuevo Nombre",
          },
          config
        ); */
        /* console.log(responseGet); */
      }
      console.log("Nombre actualizado correctamente");
    } catch (error) {
      console.log(error);
      console.log("Error al actualizar el nombre");
    }
  };
  const router = useRouter();
  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <div>
      Aca se va a mostrar el perfil de usuario
      <button onClick={() => handleUpdateName()}>Get Profile</button>
    </div>
  );
};

export default perfil;
