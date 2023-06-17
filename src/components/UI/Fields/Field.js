import { useEffect } from "react";
import styles from "./Field.module.css";
import { useSelector } from "react-redux";

const Field = (props) => {
    const fields = useSelector((state) => state.fields.fields);
    // const p1fields = useSelector((state) => state.fields.player1.fields);
    // const p2fields = useSelector((state) => state.fields.player2.fields);

    const ownedStyle =
        (fields[props.index].status === "player1" && fields[props.index].employees === undefined && "green") ||
        (fields[props.index].status === "player2" && fields[props.index].employees === undefined && "blue") ||
        (fields[props.index].status === "player1" && fields[props.index].employees > 0 && "dark-green") ||
        (fields[props.index].status === "player2" && fields[props.index].employees > 0 && "dark-blue");

    const houses =
        fields[props.index].floor !== undefined &&
        fields[props.index].status !== "empty" &&
        fields[props.index].status !== "emptyC" &&
        fields[props.index].floor;

    const floorArr = Array.from({ length: houses }, () => 1);

    const employees =
        fields[props.index].status !== "empty" &&
        fields[props.index].status !== "emptyC" &&
        fields[props.index].employees !== false &&
        fields[props.index].employees;
    const engineer =
        fields[props.index].status !== "empty" &&
        fields[props.index].status !== "emptyC" &&
        fields[props.index].employees !== false &&
        fields[props.index].engineer;

    const manager =
        fields[props.index].status !== "empty" &&
        fields[props.index].status !== "emptyC" &&
        fields[props.index].employees !== false &&
        fields[props.index].manager;

    const classes = styles.field + " " + styles[ownedStyle] + " " + props.className;

    return (
        <li className={classes}>
            {props.children}

            {props.index !== 4 && props.index !== 16 && props.index !== 28 && props.index !== 40 && (
                <ul className={styles.list}>
                    {floorArr.map((item) => {
                        return <div className={styles.house}></div>;
                    })}
                </ul>
            )}

            {(props.index === 4 || props.index === 16 || props.index === 28 || props.index === 40) && (
                <ul className={styles.commercial}>
                    <div className={styles.employees}>
                        <div className={styles.quantity}>{employees}</div>
                    </div>
                    {engineer > 1 && <div className={styles.engineer}></div>}
                    {manager > 1 && <div className={styles.manager}></div>}
                </ul>
            )}
        </li>
    );
};

export default Field;
