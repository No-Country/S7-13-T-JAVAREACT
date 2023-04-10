/* Aca va a entrar el usuario despues de loguearse */

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Logueado = () => {
  const router = useRouter();
  const { status } = useSession();
  if (status === "unauthenticated") {
    router.push("/login");
  }

  return <div>Logueado</div>;
};

export default Logueado;
