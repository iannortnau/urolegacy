import styles from "../../styles/components/Menu.module.css";
import Image from "next/image";
import imgMenu from "../../public/icons8-menu-arredondado-24.png"
import imgLogo from "../../public/UroLegacyPin.png"
import {useContext, useEffect, useRef, useState} from "react";
import MenuItem from "./MenuItem";
import {AiFillCloseSquare} from "react-icons/ai";
import {GlobalContext} from "../../context/GlobalContext";


export default function Menu(props){
    const {
        animateCSS
    } = useContext(GlobalContext);
    const refMenu = useRef(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(open){
            animateCSS(refMenu, "animate__slideInRight");
        }
    }, [open]);


    return (
        <>
            {open&&
            <div
                ref={refMenu}
                className={styles.bodyOpen}
            >
                <div
                    className={styles.header}
                >
                    <Image
                        src={imgLogo}
                        alt={"Pin"}
                        height={36}
                    />
                    <div
                        onClick={()=>{
                            animateCSS(refMenu, "animate__slideOutRight").then(()=>{
                                refMenu.current.style.setProperty('display', "none");
                                setOpen(false);
                            });

                        }}

                    >
                        <AiFillCloseSquare
                            size={30}
                            color={"#856c4c"}
                        />
                    </div>
                </div>
                <MenuItem
                    title={"Home"}
                    route={"/"}
                />
                <MenuItem
                    title={"Sobre"}
                    route={"/sobre"}
                />
                <MenuItem
                    title={"Profissionais"}
                    route={"/profissionais"}
                />
                <MenuItem
                    title={"Cirurgia Robótica"}
                    route={"/cirurgia_robotica"}
                />
                <MenuItem
                    title={"Procedimentos"}
                    route={"/procedimentos"}
                />
                <MenuItem
                    title={"Tratamentos"}
                    route={"/tratamentos"}
                />
                <MenuItem
                    title={"Convênios"}
                    route={"/convenios"}
                />
                <MenuItem
                    title={"Contato"}
                    route={"/contato"}
                />
            </div>
            }
            <div
                className={styles.bodyClose}
                onClick={()=>{
                    setOpen(true);
                }}
            >
                <Image
                    src={imgMenu}
                    alt={"Pin"}
                    width={35}
                    height={30}
                />
            </div>
        </>
    );
}
