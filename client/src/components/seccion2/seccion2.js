import Image from "next/image";
const Seccion2 = () => {
  return (
    <div className="bg-[#050829]">
      <section className="mt-10 flex justify-center">
        <div>
          <Image
            alt="Imagen de prueba"
            width={600}
            height={780}
            src="/img/imgParaSeccion2.svg"
          />
        </div>
        <div className="flex flex-col justify-center gap-5">
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
      <section className="mt-10 flex justify-center">
        <div className="flex flex-col justify-center gap-5">
          <h2 className="text-3xl">Diseños usables y responsivos</h2>
          <p>
            Nos encargamos que tu portfolio sea adaptativo, fácil de visualizar
            y que tenga una buena experiencia para tus siguientes visitantes.
          </p>
        </div>
        <div>
          <Image
            alt="Imagen de prueba"
            width={600}
            height={780}
            src="/img/imgParaSeccion2R.svg"
          />
        </div>
      </section>
    </div>
  );
};

export default Seccion2;
