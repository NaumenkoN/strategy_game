import styles from "./FormSellStocks.module.css";
import { sellingStocks } from "../../../../store/fields";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import SimpleButton from "../ModalButtons/SimpleButton";
import Input from "../ModalTemplate/Input";

const FormSellStocks = (props) => {
    const dispatch = useDispatch();
    const [stocksValue, setStocksValue] = useState(0);
    const activePlayerStocks = useSelector((state) => state.fields[`${props.activePlayer}`].stocks);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        dispatch(sellingStocks([props.activePlayer, stocksValue]));
    };

    const onChangeHandler = (e) => {
        setStocksValue(e.target.value);
    };

    return (
        <form>
            <h1 className={styles.header}>{`you have ${activePlayerStocks} stocks.`}</h1>
            <Input
                labelMessage={"Choise value multiple of 10"}
                onChange={onChangeHandler}
                value={stocksValue}
                id={"stocks"}
                type={"number"}
                min={10}
                max={activePlayerStocks}
                step={10}
            />
            <div className={styles["control-buttons"]}>
                <SimpleButton
                    message={"Sell"}
                    disabled={stocksValue === 0}
                    handler={onSubmitHandler}
                    type={"submit"}
                />
                <SimpleButton message={"Cancel"} handler={props.handler} />
            </div>
        </form>
    );
};

export default FormSellStocks;
