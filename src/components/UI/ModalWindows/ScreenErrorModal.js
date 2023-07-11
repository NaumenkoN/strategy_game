import styles from "./ScreenErrorModal.module.css";

const ScreenErrorModal = () => {
    return (
        <>
            <div className={styles.background}></div>;
            <h1 className={styles.header}>return screen to normal width ⇱</h1>;
            <h1 className={styles.header2}>return screen to landscape mode 🔄</h1>;
        </>
    );
};
export default ScreenErrorModal;
