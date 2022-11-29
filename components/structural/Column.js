import styles from "../../styles/components/Column.module.css";


export default function Column(props){
    return (
        <div
            className={styles.body}
            style={props.style}
        >
            {props.children}
        </div>
    );
}
