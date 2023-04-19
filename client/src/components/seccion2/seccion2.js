import styles from "./seccion2.module.css";
const Seccion2 = () => {
  return (
    <div className={styles.containerSeccion}>
      <section className={styles.seccionIzqDer}>
        <div className={styles.seccionPhotoIzq}>
          <img src="/img/compuLanzani.png" alt="LanzaniPortfolio" />
        </div>
        <div className={styles.containerText}>
          <h2 className="text-3xl">
            Sitios atractivos y completos en pocos pasos
          </h2>
          <p>
            Destaca tu trabajo con un portfolio moderno que haga lucir tus
            trabajos y proyectos!{" "}
          </p>
          <p>
            Con nuestro constructor basado en tecnologías No - Code podrás hacer
            tu portfolio sin necesidad de escribir ni una sola linea de código.
          </p>
        </div>
      </section>
      <section className={styles.seccionIzqDer}>
        <div className={styles.containerText}>
          <h2 className="text-3xl">Diseños usables y responsivos</h2>
          <p>
            Nos encargamos que tu portfolio sea adaptativo, fácil de visualizar
            y que tenga una buena experiencia para tus siguientes visitantes.
          </p>
        </div>
        <div className={styles.seccionPhotoDer}>
          <img src="/img/compuFram.png" alt="Imagen de fram" />
        </div>
      </section>
    </div>
  );
};

export default Seccion2;
