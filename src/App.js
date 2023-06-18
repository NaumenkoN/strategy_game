import { Helmet } from "react-helmet";
import Game from "./components/Game";
import { useSelector } from "react-redux";
import LoadingModal from "./components/UI/ModalWindows/LoadingModal";

function App() {
    const isOpenLoadingModal = useSelector((state) => state.menu.isOpenLoadingModal);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Strategy Game</title>
                <link rel="canonical" href="" />
                <meta name="description" content="Strategy Game" />
            </Helmet>
            {isOpenLoadingModal && <LoadingModal />}
            {!isOpenLoadingModal && <Game />}
        </>
    );
}

export default App;
// : <Game />
