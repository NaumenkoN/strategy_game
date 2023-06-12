import styles from "./Player1.module.css";
const Player1 = (props) => {
    const classes = styles.player + " " + props.className;
    return <div className={classes}>Player1</div>;
};
export default Player1;
