import { useEffect, useState } from "react";
import styles from "../../pages/OnBoarding.module.css";
import Image from "next/image";
import getUserData, { getUser, uploadPicture } from "@/pages/api/auth/user";

const LeafPhoto = () => {
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await getUserData();
        if (res) {
          console.log(res.data.image);
          setImgUrl(res.data.image);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  /* const handleImgUpload = async (e) => {
    const file = e.target.files[0];
    const res = await uploadPicture(file);
    console.log(res);
  };
 */
  const handleImgUpload = async (e) => {
    const file = e.target.files[0];
    const res = await uploadPicture(file);
    console.log(res);
    const updatedUserData = await getUserData();
    if (updatedUserData) {
      console.log(updatedUserData.data.image);
      setImgUrl(updatedUserData.data.image);
    }
  };
  /* { } */
  return (
    <div className={styles.containerPhoto}>
      {imgUrl === "" ? (
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
      ) : (
        imgUrl && <img src={imgUrl} alt="profile" width={200} height={200} />
      )}

      <div className={styles.containerImageTextPhoto}>
        <p className={styles.h1Welcome}>
          Te doy la bienvenida! Voy a guiarte en la construcción de tu portfolio
        </p>

        {imgUrl && (
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
