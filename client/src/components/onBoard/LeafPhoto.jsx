import { useState } from "react";
import styles from "../../pages/OnBoarding.module.css";
import Image from "next/image";

const LeafPhoto = () => {
  const [imgUrl, setImgUrl] = useState("");

  const handleImgUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        Authorization: "Client-ID YOUR_CLIENT_ID_HERE",
      },
      body: formData,
    });
    const data = await response.json();
    setImgUrl(data.data.link);
  };

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
              onChange={handleImgUpload}
            />
          </label>
          <span className={styles.iconAdd}>+</span>
        </div>
      </div>
      <div className={styles.containerImageTextPhoto}>
        <p className={styles.h1Welcome}>
          Te doy la bienvenida! Voy a guiarte en la construcción de tu portfolio
        </p>
        {imgUrl && <img src={imgUrl} alt="profile" width={200} height={200} />}
        {!imgUrl && (
          <Image
            src="/img/robotHello.png"
            alt="robot"
            width={384}
            height={430}
          />
        )}
      </div>
    </div>
  );
};

export default LeafPhoto;