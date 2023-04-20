import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import NavBar from "@/components/NavBar";
import Header from "@/components/header/Header";
import Slider from "@/components/Slider";
import CardsLanding from "@/components/cards-landing/CardsLanding";
import Seccion2 from "@/components/seccion2/Seccion2";
import PreciosLanding from "@/components/precios-landing/PreciosLanding";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading")
    return <h1>Loading... ACA TENEMOS QUE PONER UN LOADING....</h1>;

  return (
    <>
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
        <PreciosLanding />
        <Footer />
      </main>
    </>
  );
}
