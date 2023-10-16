import styles from "./style.module.css";
import Image from "next/image";

export default function index() {
  return (
    <div className={styles.intro}>
      <div className={styles.backgroundImage}>
        <Image src={"/images/background.jpeg"} fill={true} />
      </div>
      <div className={styles.introContainer}>
        <div className={styles.introImage}>
          <Image src={"/images/intro.png"} fill={true} />
        </div>
        <h1>Smooth Scroll</h1>
      </div>
    </div>
  );
}
