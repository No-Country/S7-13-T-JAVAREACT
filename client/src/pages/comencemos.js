"use client";

import Link from "next/link";
import Image from "next/image";

import styles from "./Comencemos.module.css";

const Comencemos = () => {
  return (
    <main className={styles.container}>
      <div className={styles.containerStart}>
        <Link href={"/"}>
          <button className={styles.buttonBack}>x</button>
        </Link>
        <div className={styles.image}>
          <Image src="/img/robot.png" alt="robot" width={384} height={430} />
        </div>
        <div className={styles.text}>
          <h1 className={styles.h1question}>¿Has estado aqui antes?</h1>
          <div className={styles.buttonContainer}>
            <Link href={"/register"} className={styles.link}>
              <button className={styles.buttonYellow}>
                No, es mi primera vez
              </button>
            </Link>
            <Link href={"/login"} className={styles.link}>
              <button className={styles.button}>si, ya estuve aqui</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Comencemos;
