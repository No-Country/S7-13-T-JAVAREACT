import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const perfil = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "unauthenticated") {
    router.push("/");
  }
  return <div>Aca se va a mostrar el perfil de usuario</div>;
};

export default perfil;
