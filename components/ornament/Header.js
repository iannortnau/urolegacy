import styles from "../../styles/components/Header.module.css";
import Pin from "./Pin";
import Menu from "./Menu";
import LineMenu from "./LineMenu";
import {useEffect, useRef, useState} from "react";


export default function Header(props){
    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
        const width = window.innerWidth.valueOf();
        setWindowSize(width)
    },[]);


    console.log(windowSize);

    return (
        <div className={styles.body}>
            <Pin/>
            {windowSize>=1280&&
                <LineMenu/>
            }
            <Menu/>
        </div>
    );
}
