import styles from "../../styles/components/Pin.module.css";
import Image from "next/image";
import img from "../../public/UroLegacyPin.png"


export default function Pin(props){
    return (
        <div className={styles.body}>
            <Image
                src={img}
                alt={"Pin"}
                width={50}
            />
        </div>
    );
}
