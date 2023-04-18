import styles from "../../pages/OnBoarding.module.css";
import Image from "next/image";
const LeafPhoto = () => {
  /* Agregar foto al back */
  return (
    <div className={styles.containerPhoto}>
      <div className={styles.containerUploadPhoto}>
        <p className={styles.pQuestion}>Agrega tu foto de perfil</p>
        <div className={styles.uploadPhoto}>
          <label className={styles.inputUpload} htmlFor="imgProfile">
            <input
              className={styles.inputUpload}
              type="file"
              id="imgProfile"
              name="imagensubida"
              accept="image/png, .jpeg, .jpg, image/gif"
              hidden="true"
            />
          </label>
          <span className={styles.iconAdd}>+</span>
        </div>
      </div>
      <div className={styles.containerImageTextPhoto}>
        <p className={styles.h1Welcome}>
          Te doy la bienvenida! Voy a guiarte en la construcción de tu portfolio
        </p>
        <Image src="/img/robotHello.png" alt="robot" width={384} height={430} />
      </div>
    </div>
  );
};
export default LeafPhoto;
