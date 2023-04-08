import styles from "../../app/onBoarding/OnBoarding.module.css";
import Image from "next/image";
const LeafThree=()=>{
    return(
        <div className={styles.containerImageText}>
            <div className={styles.image}>
                <Image src="/img/robot.svg" alt="robot" width={384} height={430} />
            </div>
            <div className={styles.text}>
                <h1 className={styles.h1Welcome}>¡Perfecto!</h1>
                <p className={styles.pQuestion}>Ahora veamos que tipo de diseño es ideal para ti.</p>
                <div className={styles.containerDesignColours}>
                    <p>Selecciona las opciones que mas te gusten, tu portfolio se generará automáticamente.</p>
                    <div className={styles.containerDesign}>
                        <button className={styles.buttonDesign}>Moderno</button>
                        <button className={styles.buttonDesign}>Elegante</button>
                        <button className={styles.buttonDesign}>Minimalista</button>
                        <button className={styles.buttonDesign}>Creativo</button>
                    </div>
                    <p className={styles.pQuestion}>¡Ahora veamos algo de color!</p>
                    <div className={styles.containerColours}>
                        <div className={styles.divColours}></div>
                        <div className={styles.divColours}></div>
                        <div className={styles.divColours}></div>
                        <div className={styles.divColours}></div>
                    </div>
                </div>
                <div className={styles.containerButtonEdit}>
                    <button className={styles.button}>Personalizar</button>
                </div>
            </div>
        </div>
    )
}

export default LeafThree