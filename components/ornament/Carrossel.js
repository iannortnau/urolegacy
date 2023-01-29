import styles from "../../styles/components/Carrossel.module.css";
import Image from "next/image";
import {useContext, useEffect, useRef, useState} from "react";
import {GlobalContext} from "../../context/GlobalContext";

export default function Carrossel(props){
    const {
        animateCSS
    } = useContext(GlobalContext);
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [divWidth, setDivWidth] = useState(props.width);
    const [divHeight, setDivHeight] = useState(props.height);
    const [position, setPosition] = useState(0);
    const data = props.data;

    useEffect(() => {
        changeImage(0);
    }, []);

    function changeImage(i){
        animateCSS(ref,"animate__fadeIn", "2s");
        if(i<data.length-1){
            i++;
        }else {
            i=0;
        }
        setPosition(i);
        setTimeout(()=>{
            animateCSS(ref,"animate__fadeOut", "2s").then(()=>{
                changeImage(i);
            });
        },8000);
    }

    useEffect(() => {
        const auxWidth = ref.current.offsetWidth;
        const auxHeight = ref.current.offsetHeight;

        if(auxWidth<auxHeight){
            setWidth(auxWidth);
            setHeight(0);
            setDivHeight(null);
        }else {
            setHeight(auxHeight);
            setWidth(0);
            setDivWidth(null);
        }
        console.log(auxHeight+" "+auxWidth);
    }, []);

    return (
        <div ref={ref} className={styles.main} style={{width: divWidth,height: divHeight}}>
                <Image
                    src={data[position]}
                    alt={"iamgem"}
                    width={width}
                    height={height}
                />
        </div>
    );
}
