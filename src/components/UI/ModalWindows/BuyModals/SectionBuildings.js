import styles from "./Sections.module.css";
import Input from "../ModalTemplate/Input";
import ArgButton from "../ModalButtons/ArgButton";

import { buyBuildings, getRidOfAssets } from "../../../../store/fields";
import buyFieldSound from "../../../../media/rentalWithdrawal.mp3";
import { useDispatch } from "react-redux";
import { useState } from "react";

const SectionBuildings = (props) => {
    const dispatch = useDispatch();
    // Inputs changes handlers
    const [floorValue, setFloorValue] = useState(0);
    const [sellFloorValue, setSellFloorValue] = useState(0);

    const buyField = new Audio(buyFieldSound);

    const onChangeLivBuildHandler = (e) => {
        setFloorValue(e.target.value);
    };
    const onChangeSellHandler = (e) => {
        setSellFloorValue(e.target.value);
    };

    // Buttons handlers
    const buildLivingHandler = (field) => {
        buyField.play();
        dispatch(buyBuildings([props.activePlayer, field, floorValue, "living"]));
    };

    const sellLivingHandler = (field) => {
        if (props.fields[field].floor === +sellFloorValue) {
            let confirm = window.confirm("Are you shure you whan`a sell all buildings and a field?");
            if (confirm === true) {
                dispatch(getRidOfAssets([props.activePlayer, field, sellFloorValue, "livingFieldSell"]));
            }
            if (confirm === false) {
                return;
            }
        } else {
            dispatch(getRidOfAssets([props.activePlayer, field, sellFloorValue, "floors"]));
        }
    };

    const livingFieldsValue = props.activePlayerFields.filter(
        (num) => num !== 4 && num !== 16 && num !== 28 && num !== 40
    );
    const floorHeight = livingFieldsValue.map((field) => props.fields[field].floor);

    return (
        <section>
            <h1 className={styles["active-player"]}>{props.activePlayer}</h1>
            <h1 className={styles.header}>{`Manage your living fields `}</h1>
            {livingFieldsValue.length > 10 && <h3 className={styles.scroll}>← scroll →</h3>}
            <ul className={styles["fields-list"]}>
                {livingFieldsValue.map((field, index) => {
                    return (
                        <li key={index} className={styles.field}>
                            <div className={styles["field-number"]}>{field}</div>
                            <h2 className={styles.quantity}>Buildings: {floorHeight[index]}</h2>
                            <form onSubmit={props.onSubmitHandler}>
                                <div className={styles.controls}>
                                    <Input
                                        className={styles.input}
                                        labelMessage={""}
                                        onChange={onChangeLivBuildHandler}
                                        value={floorValue}
                                        id={"build"}
                                        type={"number"}
                                        min={1}
                                        max={4 - floorHeight[index]}
                                        step={1}
                                    />

                                    <ArgButton
                                        disabled={floorHeight[index] >= 4}
                                        type={"submit"}
                                        handler={buildLivingHandler}
                                        arguments={field}
                                        message={"buy"}
                                        className={styles["arg-button"]}
                                    />
                                </div>
                            </form>
                            <form onSubmit={props.onSubmitHandler}>
                                <div className={styles.controls}>
                                    <Input
                                        className={styles.input}
                                        labelMessage={""}
                                        onChange={onChangeSellHandler}
                                        value={sellFloorValue}
                                        id={"sell-build"}
                                        type={"number"}
                                        min={1}
                                        max={floorHeight[index]}
                                        step={1}
                                    />

                                    <ArgButton
                                        // disabled={floorHeight[index] >= 4}
                                        type={"submit"}
                                        handler={sellLivingHandler}
                                        arguments={field}
                                        message={"sell"}
                                        className={styles["arg-button"]}
                                    />
                                </div>
                            </form>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default SectionBuildings;
