import styles from "./SectionBuildings.module.css";
import Input from "../ModalTemplate/Input";
import ArgButton from "../ModalButtons/ArgButton";

import { buyBuildings, getRidOfAssets } from "../../../../store/fields";

import { useDispatch } from "react-redux";
import { useState } from "react";

const SectionBuildings = (props) => {
    const dispatch = useDispatch();
    // Inputs changes handlers
    const [floorValue, setFloorValue] = useState(0);
    const [sellFloorValue, setSellFloorValue] = useState(0);

    const onChangeLivBuildHandler = (e) => {
        setFloorValue(e.target.value);
    };
    const onChangeSellHandler = (e) => {
        setSellFloorValue(e.target.value);
    };

    // Buttons handlers
    const buildLivingHandler = (field) => {
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
    const floorHeight = props.activePlayerFields
        .filter((num) => num !== 4 && num !== 16 && num !== 28 && num !== 40)
        .map((field) => props.fields[field].floor);

    return (
        <section>
            <h1>{`On wich living field You\`l build ${props.activePlayer} ?`}</h1>
            <ul className={styles["buttons-list"]}>
                {props.activePlayerFields
                    .filter((num) => num !== 4 && num !== 16 && num !== 28 && num !== 40)
                    .map((field, index) => {
                        return (
                            <li key={index} className={styles["building-fields"]}>
                                <form onSubmit={props.onSubmitHandler}>
                                    <button className={styles["button-fields"]}>{field}</button>
                                    <h2>Here you have floors:{floorHeight[index]}</h2>
                                    <Input
                                        labelMessage={"ADD +:"}
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
                                        message={"Buy"}
                                    />
                                </form>
                                <form onSubmit={props.onSubmitHandler}>
                                    <Input
                                        labelMessage={"ADD +:"}
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
                                        message={"Sell"}
                                    />
                                </form>
                            </li>
                        );
                    })}
            </ul>
        </section>
    );
};

export default SectionBuildings;
