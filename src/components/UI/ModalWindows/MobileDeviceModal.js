import styles from "./ScreenErrorModal.module.css";

const MobileDeviceModal = () => {
    return (
        <>
            <div className={styles.background}></div>
            <h1 className={styles.header2}>Sorry, but this game is only for desktop devices.</h1>
        </>
    );
};

export default MobileDeviceModal;
