import styles from "../../styles/components/LIneMenuItem.module.css";
import Image from "next/image";
import img from "../../public/UroLegacyPin.png"
import Link from "next/link";
import {useRouter} from "next/router";


export default function LineMenuItem(props){
    const route = props.route;
    const title = props.title;
    return (
        <div className={styles.body}>
            <Link
                href={route}
            >
                <h1 className={styles.title}>{title}</h1>
            </Link>
        </div>
    );
}
