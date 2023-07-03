import { Helmet } from "react-helmet";
import Game from "./components/Game";
import { useSelector } from "react-redux";
import { useState } from "react";
import LoadingModal from "./components/UI/ModalWindows/LoadingModal";
import ScreenErrorModal from "./components/UI/ModalWindows/ScreenErrorModal";

function App() {
    const isOpenLoadingModal = useSelector((state) => state.menu.isOpenLoadingModal);
    const [isShownErrorModal, setIsShownErrorModal] = useState(false);
    const mediaQuery = () => {
        if (window.innerWidth / window.innerHeight < 1.55) {
            setIsShownErrorModal(true);
        }
        if (window.innerWidth / window.innerHeight > 1.55) {
            setIsShownErrorModal(false);
        }
    };
    window.addEventListener("resize", mediaQuery);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Strategy Game</title>
                <link rel="canonical" href="" />
                <meta name="description" content="Strategy Game" />
            </Helmet>
            {isOpenLoadingModal && <LoadingModal />}
            {!isShownErrorModal && !isOpenLoadingModal && <Game />}
            {isShownErrorModal && <ScreenErrorModal />}
        </>
    );
}

export default App;
