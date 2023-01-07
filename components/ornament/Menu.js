import styles from "../../styles/components/Menu.module.css";
import Image from "next/image";
import imgMenu from "../../public/icons8-menu-arredondado-24.png"
import imgClose from "../../public/icons8-fechar-janela-50.png"
import imgLogo from "../../public/UroLegacyLogoLongo.png"
import {useRouter} from "next/router";
import {useState} from "react";
import MenuItem from "./MenuItem";


export default function Menu(props){
    const [open, setOpen] = useState(false);

    if(open){
        return (
            <div
                className={styles.bodyOpen}
            >
                <div
                    className={styles.header}
                >
                    <Image
                        src={imgLogo}
                        alt={"Pin"}
                        width={200}
                        height={40}
                    />
                    <Image
                        src={imgClose}
                        alt={"Pin"}
                        width={35}
                        height={35}
                        onClick={()=>{
                            setOpen(!open);
                        }}
                    />
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
        );
    }else{
        return (
            <div
                className={styles.bodyClose}
                onClick={()=>{
                    setOpen(!open);
                }}
            >
                <Image
                    src={imgMenu}
                    alt={"Pin"}
                    width={35}
                    height={30}
                />
            </div>
        );
    }
}
