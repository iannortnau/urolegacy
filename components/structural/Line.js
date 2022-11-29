import styles from "../../styles/components/Line.module.css";


export default function Line(props){
    return (
        <div
            className={styles.body}
            style={props.style}
        >
            {props.children}
        </div>
    );
}
