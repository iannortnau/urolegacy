import styles from "../../styles/components/Header.module.css";
import Pin from "./Pin";


export default function Header(props){
    return (
        <div className={styles.body}>
            <Pin/>
        </div>
    );
}
