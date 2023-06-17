import { Helmet } from "react-helmet";
import Game from "./components/Game";
import { useState } from "react";
import { useSelector } from "react-redux";
import LoadingModal from "./components/UI/ModalWindows/LoadingModal";

function App() {
    const [load, setLoad] = useState(false);
    const isOpenLoadingModal = useSelector((state) => state.menu.isOpenLoadingModal);

    window.onload = () => {
        setLoad(true);
    };
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Strategy Game</title>
                <link rel="canonical" href="" />
                <meta name="description" content="Strategy Game" />
            </Helmet>
            {isOpenLoadingModal && <LoadingModal isLoad={load} />}
            {!isOpenLoadingModal && <Game />}
        </>
    );
}

export default App;
// : <Game />
