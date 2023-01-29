import styles from "../../styles/components/Column.module.css";


export default function Column(props){
    return (
        <div
            style={props.style}
            className={styles.body}
        >
            {props.children}
        </div>
    );
}
