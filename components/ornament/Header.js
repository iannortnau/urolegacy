import styles from "../../styles/components/Header.module.css";
import Pin from "./Pin";
import Menu from "./Menu";


export default function Header(props){
    return (
        <div className={styles.body}>
            <Pin/>
            <Menu/>
        </div>
    );
}
