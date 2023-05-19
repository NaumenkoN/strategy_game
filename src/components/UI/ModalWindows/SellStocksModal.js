import styles from "./SellStocksModal.module.css";
import { closeSellStocksModal, selling } from "../../../store/fields";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const SellStocksModal = () => {
    const dispatch = useDispatch();
    const isOpenSellStocksModalp1 = useSelector((state) => state.fields.player1.isOpenSellStocksModal);
    const isOpenSellStocksModalp2 = useSelector((state) => state.fields.player2.isOpenSellStocksModal);
    const activePlayer = (isOpenSellStocksModalp1 && "player1") || (isOpenSellStocksModalp2 && "player2");
    const activePlayerStocks = useSelector((state) => state.fields[`${activePlayer}`].stocks);
    const [stocksValue, setStocksValue] = useState(0);
    const closeSellStocksModalHandler = () => {
        dispatch(closeSellStocksModal());
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        dispatch(selling([activePlayer, stocksValue]));
        dispatch(closeSellStocksModal());
    };

    const onChangeHandler = (e) => {
        setStocksValue(e.target.value);
    };
    return (
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <button onClick={closeSellStocksModalHandler} className={styles["close-button"]}>
                    x
                </button>
                <h1>{`How many stocks You want to sell ${activePlayer}?`}</h1>
                <form>
                    <h1>{`you have ${activePlayerStocks} stocks.`}</h1>
                    <label htmlFor="stocks">Choise value multiple of 10</label>
                    <input
                        onChange={onChangeHandler}
                        value={stocksValue}
                        id="stocks"
                        type="number"
                        min={0}
                        max={activePlayerStocks}
                        step={10}
                    ></input>
                    <div className={styles["control-buttons"]}>
                        <button disabled={stocksValue === 0} onClick={onSubmitHandler} type="submit">
                            Sell
                        </button>
                        <button onClick={closeSellStocksModalHandler}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default SellStocksModal;
