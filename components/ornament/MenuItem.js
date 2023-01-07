import styles from "../../styles/components/MenuItem.module.css";
import Image from "next/image";
import img from "../../public/UroLegacyPin.png"
import Link from "next/link";
import {useRouter} from "next/router";


export default function MenuItem(props){
    const route = props.route;
    const title = props.title;
    const pageRoute = useRouter().route;
    return (
        <div className={styles.body} style={route === pageRoute?{backgroundColor:"rgba(148, 124, 98, 0.18)"}:{backgroundColor:"rgba(255,255,255,0)"}}>
            <Link
                href={route}
            >
                <h1 className={styles.title}>{title}</h1>
            </Link>
        </div>
    );
}
