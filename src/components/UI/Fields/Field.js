import { useEffect } from "react";
import styles from "./Field.module.css";
import { useSelector } from "react-redux";

const Field = (props) => {
    let livOwned;
    let comOwned;
    const fields = useSelector((state) => state.fields.fields);
    const p1fields = useSelector((state) => state.fields.player1.fields);
    const p2fields = useSelector((state) => state.fields.player2.fields);
    useEffect(() => {
        livOwned =
            (fields[props.index]?.status === "player1" && styles.green) ||
            (fields[props.index]?.status === "player2" && styles.red);
        comOwned =
            (fields[props.index]?.status === "player1" &&
                fields[props.index]?.employees &&
                styles["dark-green"]) ||
            (fields[props.index]?.status === "player2" && fields[props.index]?.employees && styles["dark-red"]);
    }, [p1fields, p2fields]);

    const classes = styles.field + " " + (props.className || "") + " " + (livOwned || "") + " " + (comOwned || "");
    return <li className={classes}>{props.children}</li>;
};

export default Field;
