import styles from "../../styles/components/LineMenu.module.css";
import LineMenuItem from "./LineMenuItem";
import MenuItem from "./MenuItem";


export default function LineMenu(props){
    return (
        <div
            className={styles.body}
        >
            <LineMenuItem
                title={"Home"}
                route={"/"}
            />
            <LineMenuItem
                title={"Sobre"}
                route={"/sobre"}
            />
            <LineMenuItem
                title={"Profissionais"}
                route={"/profissionais"}
            />
            <LineMenuItem
                title={"Cirurgia Robótica"}
                route={"/cirurgia_robotica"}
            />
            <LineMenuItem
                title={"Procedimentos"}
                route={"/procedimentos"}
            />
            <LineMenuItem
                title={"Tratamentos"}
                route={"/tratamentos"}
            />
            <LineMenuItem
                title={"Convênios"}
                route={"/convenios"}
            />
            <LineMenuItem
                title={"Contato"}
                route={"/contato"}
            />
        </div>
    );
}
