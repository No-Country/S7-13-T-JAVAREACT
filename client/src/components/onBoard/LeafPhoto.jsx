import { useEffect, useState } from "react";
import styles from "../../pages/OnBoarding.module.css";
import Image from "next/image";
import { getUser, uploadPicture } from "@/pages/api/auth/user";

const LeafPhoto = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await getUser();
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
  const handleImgUpload = async (e) => {
    setUploading(true);
    const file = e.target.files[0];
    const res = await uploadPicture(file);
    console.log(res);
    const updatedUserData = await getUser();
    console.log(updatedUserData);
    if (updatedUserData) {
      console.log(updatedUserData.image);
      setImgUrl(updatedUserData.image);
    }
    setUploading(false);
  };
  /* { } */
  return (
    <div className={styles.containerPhoto}>
      {imgUrl === null ? (
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
        imgUrl && <Image src={imgUrl} alt="profile" width={300} height={300} />
      )}
      {uploading && (
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
          <span className="text-black">Loading...</span>
        </div>
      )}
      <div className={styles.containerImageTextPhoto}>
        <p className={styles.h1Welcome}>
          Te doy la bienvenida! Voy a guiarte en la construcción de tu portfolio
        </p>

        {imgUrl && (
          <Image
            src={"/img/robotHello.png"}
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
