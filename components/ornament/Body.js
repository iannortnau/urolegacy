import styles from "../../styles/components/Body.module.css";
import bgImage1 from "../../public/paper-texture.jpg";
import bgImage2 from "../../public/white-paper-texture.jpg";
import Image from "next/image";
import Column from "../structural/Column";
import Line from "../structural/Line";
import Header from "./Header";

export default function Body(props){
    return (
        <div className={styles.body}>
            <div className={styles.content}>
                <Header/>
            </div>
            <Image
                className={styles.img1}
                src={bgImage1}
                alt={"fundo"}
            />
            <Image
                className={styles.img2}
                src={bgImage2}
                alt={"fundo"}
            />
        </div>
    );
}
