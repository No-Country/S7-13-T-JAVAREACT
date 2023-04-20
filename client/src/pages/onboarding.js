"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LeafOne from "@/components/onBoard/LeafOne";
import LeafTwo from "@/components/onBoard/LeafTwo";
import LeafThree from "@/components/onBoard/LeafThree";
import LeafPhoto from "@/components/onBoard/LeafPhoto";
import styles from "./OnBoarding.module.css";

const onBoarding = () => {
  const [porcentaje, setPorcentaje] = useState(0);
  const [page, setPage] = useState(1);
  const renderizar = () => {
    if (page === 1) {
      return <LeafOne />;
    } else if (page === 2) {
      return <LeafPhoto />;
    } else if (page === 3) {
      return <LeafTwo />;
    } else if (page === 4) {
      return <LeafThree />;
    }
  };
  useEffect(() => {
    renderizar();
    setPorcentaje(25 * (page - 1));
  }, [page]);

  return (
    <main className={styles.container}>
      {renderizar()}
      <div className={styles.containerNavigation}>
        <div className={styles.containerButton}>
          {page !== 4 ? (
            <>
              <button
                onClick={() => {
                  setPage(page + 1);
                }}
                className={styles.buttonOmitir}
              >
                Omitir
              </button>
              <button
                onClick={() => {
                  setPage(page + 1);
                }}
                className={styles.buttonSiguiente}
              >
                Siguiente
              </button>
            </>
          ) : (
            <>
              <Link className={styles.buttonTerminar} href={"/portfolio"}>
                <button
                  onClick={() => {
                    setPage(page + 1);
                  }}
                >
                  Terminar
                </button>
              </Link>
            </>
          )}
        </div>
        <div className={styles.containerBarra}>
          <div className={styles.porcentaje}>{porcentaje}%</div>
          <div
            style={{ width: `${porcentaje}%` }}
            className={styles.barra}
          ></div>
        </div>
      </div>
    </main>
  );
};

export default onBoarding;
