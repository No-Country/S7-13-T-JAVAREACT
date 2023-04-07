/* import { Inter } from "next/font/google"; */
import styles from "./page.module.css";
import NavBar from "@/components/NavBar";
import Slider from "@/components/Slider";
import CardsLanding from "@/components/cards-landing/CardsLanding";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Seccion2 from "@/components/seccion2/Seccion2";

/* const inter = Inter({ subsets: ["latin"] });
 */
export default function Home() {
  return (
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
  );
}
