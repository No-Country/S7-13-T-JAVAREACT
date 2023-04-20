import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getUser } from "./api/auth/user";
import Link from "next/link";
import Image from "next/image";

const editar = () => {
  const router = useRouter();
  /*  const [dataUser, setDataUser] = useState({}); */
  const { data: session, status } = useSession();
  console.log(session);
  if (status === "unauthenticated") {
    router.push("/login");
  }
  const [imgUrl, setImgUrl] = useState(null);
  const [name, setName] = useState("");
  const [skills, setSkills] = useState({});
  console.log(imgUrl, skills);
  const [stack, setStack] = useState("");
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await getUser();
        if (res) {
          setImgUrl(res.image);
          console.log(imgUrl);
          setName(res.name);
          console.log(res.name);
          setSkills(res.skillsNames);
          setStack(res.stack);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="bg-white h-screen">
      <nav className="bg-[#050829] flex justify-between items-center p-4 h-28">
        <div>
          <h2 className="text-3xl font-bold">PortaCode</h2>
        </div>
        <ul className="flex gap-4 font-bold">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <li>Comunidad</li>
          <li>Nombre</li>
        </ul>
      </nav>
      <div className="flex">
        <div className="h-[760px] w-52 bg-[#050829] mt-4 ml-4 rounded-2xl">
          {" "}
          <div className="flex flex-col gap-10 justify-center items-center">
            <ul className="flex flex-col gap-10 mt-10 font-bold">
              <li>Componentes</li>
              <li>Tipografias</li>
              <li>Colores</li>
              <li>Datos del proyecto</li>
            </ul>
            <button className="bg-[#1523B0] text-white rounded-2xl p-2 w-44 h-12">
              Terminar
            </button>
          </div>
        </div>
        <div className="w-[1143px] h-[760px] ml-4 mt-4">
          <div className="bg-[#2C2F36] h-[430px]">
            <nav className="items-center p-10">
              <ul className="flex justify-around gap-2 font-bold">
                <li>PROYECTS</li>
                <li>EDUCATION</li>
                <li>STACK</li>
                <li>ABOUT ME</li>
                <li>CONTACT</li>
              </ul>
            </nav>{" "}
            <div className="flex flex-col  mt-16 ml-10">
              <h1 className="text-white text-7xl font-bold">
                HI! IM {name !== "" ? name : "Peter Lanzani"}
              </h1>
              <h2 className="text-7xl font-bold text-[#FC595A] mt-4 ">
                {stack !== "" ? stack : "Frontend Developer"}
              </h2>
              <p className="text-white mt-10 text-2xl font-bold">
                Welcome to my website
              </p>
            </div>
          </div>
          <div className="h-[330px] relative bg-[#3B3A4C]">
            <div className="absolute -top-16 right-28">
              {imgUrl !== null && (
                <Image
                  className="rounded-full"
                  alt="Imagen de perfil de usuario"
                  width={300}
                  height={200}
                  src={imgUrl}
                />
              )}
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default editar;
