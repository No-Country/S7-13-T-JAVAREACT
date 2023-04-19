"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import getUserData, {
  getUser,
  handleSkillsServer,
  updateUserName,
} from "./api/auth/user";

const perfil = () => {
  const { data: session, status } = useSession();
  const [skills, setSkills] = useState([]);

  const handleUpdateName = async () => {
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
            name: "Nombre 1 2 3 4",
          },
          config
        );
        console.log(responsePut);
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
  const handleSkills = async (skills) => {
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const skill = form.skill.value;
    setSkills([...skills, skill]);
    form.reset();
  };
  return (
    <>
      <div className="flex gap-10 flex-col">
        Aca se va a mostrar el perfil de usuario
        <button onClick={() => getUser()}>GET USER DATA!!!!!!</button>
        <button onClick={() => handleUpdateName()}>Get Profile</button>
        <button onClick={() => handleSkills(skills)}>Update Skills</button>
        <button onClick={() => getUserData()}>Get Data User From server</button>
        <button onClick={() => updateUserName("Juanito")}>
          Update Name from server
        </button>
        <button onClick={() => handleSkillsServer(["C++", "Java Spring"])}>
          Update Skills from server
        </button>
      </div>

      <div>
        <h2>Skills</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="skill" placeholder="Enter a skill" />
          <button type="submit">Add skill</button>
        </form>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default perfil;

/*  skills: ["Js", "React", "Node", "MongoDB", "Express", "Next"],
            thumbnail: "https://picsum.photos/200", */
