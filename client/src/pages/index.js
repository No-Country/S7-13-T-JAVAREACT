import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar";
import Header from "@/components/header/Header";
import Slider from "@/components/Slider";
import CardsLanding from "@/components/cards-landing/CardsLanding";
import Seccion2 from "@/components/seccion2/Seccion2";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const router = useRouter();

  const { data: session, status } = useSession();
  console.log(session, status);
  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "unauthenticated") {
    router.push("/login");
  }
  return (
    <>
      <div>
        {/* SI existe la session actual con un ususario autenticado?  */}
        {session ? (
          <div>
            <h1>{session.user.name}</h1>
            <h1>{session.user.email}</h1>
            <img src={session.user.image} alt="" />
          </div>
        ) : (
          <p>skeleton</p>
        )}
      </div>
      <main className={styles.main}>
        <NavBar />
        <Header />
        <div className={styles.title_2}>
          <h2>Construye tu portfolio para Frontend</h2>
        </div>
        <div>
          <Slider />
        </div>
        <div className={styles.div}>
          <CardsLanding />
        </div>
        <Seccion2 />
        <Footer />
        {/*  <div className={styles.div_height}></div> */}
      </main>
    </>
  );
}
