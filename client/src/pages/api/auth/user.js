import { getSession } from "next-auth/react";
import axios from "axios";

export async function uploadPicture(file) {
  const session = await getSession();
  try {
    if (session) {
      const formData = new FormData();
      formData.append("multipartFile", file);
      const config = {
        headers: { Authorization: `Bearer ${session.user.token}` },
      };
      const response = await axios.post(
        `https://portacode.up.railway.app/api/upload/${session.user.userId}`,
        formData,
        config
      );
      return response.data;
    }
  } catch (error) {
    console.log(error);
    console.log("Error al obtener los datos de usuario");
  }
}
export async function getUser(req) {
  const session = await getSession({ req });
  try {
    if (session) {
      const config = {
        headers: { Authorization: `Bearer ${session.user.token}` },
      };
      const responseGet = await axios.get(
        `https://portacode.up.railway.app/api/user/${session.user.userId}`,
        config
      );
      console.log(responseGet);
      const user = responseGet.data;
      return user;
    }
  } catch (error) {
    console.log(error);
    console.log("Error al obtener los datos de usuario");
  }
}

export default async function getUserData(req, res) {
  const session = await getSession({ req });
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
      const responsePut = await axios.put(
        `https://portacode.up.railway.app/api/update/user/${session.user.userId}`,
        {
          ...user,
          name: "Nombre 1 2 3 4 5 6",
        },
        config
      );
      return responsePut;
    }
    console.log("Nombre actualizado correctamente");
    /* res.status(200).json({ message: "Nombre actualizado correctamente" }); */
  } catch (error) {
    console.log(error);
    console.log("Error al actualizar el nombre");
    /*  res.status(500).json({ message: "Error al actualizar el nombre" }); */
  }
}
export async function updateUserName(userName) {
  const session = await getSession();
  try {
    if (session) {
      const config = {
        headers: { Authorization: `Bearer ${session.user.token}` },
      };
      console.log(session.user.token);
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
          name: userName,
        },
        config
      );
      console.log(responsePut);
    }
    console.log("Nombre actualizado correctamente");
    /* res.status(200).json({ message: "Nombre actualizado correctamente" }); */
  } catch (error) {
    console.log(error);
    console.log("Error al actualizar el nombre");
    /*  res.status(500).json({ message: "Error al actualizar el nombre" }); */
  }
}
export const handleSkillsServer = async (skills) => {
  console.log(skills);
  const session = await getSession();
  try {
    if (session) {
      const config = {
        headers: { Authorization: `Bearer ${session.user.token}` },
      };
      console.log(session.user.token);
      const responseGet = await axios.get(
        `https://portacode.up.railway.app/api/user/${session.user.userId}`,
        config
      );
      const user = responseGet.data;
      console.log(user);
      const responsePost = await axios.post(
        `https://portacode.up.railway.app/api/skill/save/user/${session.user.userId}`,
        skills,
        config
      );
      console.log(responsePost);
    }
    console.log("Skills actualizado correctamente");
  } catch (error) {
    console.log(error);
    console.log("Error al actualizar skills");
  }
};
export const handleStacksServer = async (tecnologia) => {
  const session = await getSession();
  try {
    if (session) {
      const config = {
        headers: { Authorization: `Bearer ${session.user.token}` },
      };
      console.log(session.user.token);
      const responseGet = await axios.get(
        `https://portacode.up.railway.app/api/user/${session.user.userId}`,
        config
      );
      const user = responseGet.data;
      console.log(user);
      const responsePost = await axios.put(
        `https://portacode.up.railway.app/api/update/user/${session.user.userId}`,

        {
          stack: tecnologia,
        },
        config
      );
      console.log(responsePost);
    }
    console.log("Skills actualizado correctamente");
    return true;
  } catch (error) {
    console.log(error);
    console.log("Error al actualizar skills");
  }
};
