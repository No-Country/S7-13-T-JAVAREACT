import { getSession, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getUser } from "./api/auth/user";
import { data } from "autoprefixer";

const editar = () => {
  const router = useRouter();
  const [dataUser, setDataUser] = useState({});
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    router.push("/login");
  }
  useEffect(() => {
    const getData = async () => {
      const data = await getUser();
      setDataUser(data);
    };
    getData();
  }, []);
  if (dataUser !== {}) {
    const { name, skillNames, stack, username } = dataUser;
    console.log(dataUser);
    /* nombre, skills, stacks y el username es el Email del usuario */
    console.log(name, skillNames, stack, username);
  }
  return <div>editar perfil de usuario</div>;
};

export default editar;
