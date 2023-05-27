import styles from "./BuildingModal.module.css";
import {
    closeBuildingModal,
    buyBuildings,
    getRidOfAssets,
    hireEngineer,
    fireEngineer,
} from "../../../store/fields";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const BuildingModal = () => {
    const dispatch = useDispatch();
    const isOpenBuildingModalp1 = useSelector((state) => state.fields.player1.isOpenBuildingModal);
    const isOpenBuildingModalp2 = useSelector((state) => state.fields.player2.isOpenBuildingModal);
    const activePlayer = (isOpenBuildingModalp1 && "player1") || (isOpenBuildingModalp2 && "player2");
    const activePlayerFields = useSelector((state) => state.fields[`${activePlayer}`].fields);
    const fields = useSelector((state) => state.fields.fields);
    const emergencySellActives = useSelector((state) => state.fields.emergencySellActives);

    const floorHeight = activePlayerFields
        .filter((num) => num !== 4 && num !== 16 && num !== 28 && num !== 40)
        .map((field) => fields[field].floor);
    const activePlayerEmployees = activePlayerFields
        .filter((num) => num === 4 || num === 16 || num === 28 || num === 40)
        .map((field) => fields[field].employees);
    const activePlayerEngineer = activePlayerFields
        .filter((num) => num === 4 || num === 16 || num === 28 || num === 40)
        .map((field) => fields[field].engineer);

    // Inputs changes handlers

    const [floorValue, setFloorValue] = useState(0);
    const [addEmployeesValue, setAddEmployeesValue] = useState(0);
    const [sellEmployeesValue, setSellEmployeesValue] = useState(0);
    const [sellFloorValue, setSellFloorValue] = useState(0);

    const onChangeLivBuildHandler = (e) => {
        setFloorValue(e.target.value);
    };
    const onChangeComBuildHandler = (e) => {
        setAddEmployeesValue(e.target.value);
    };
    const onChangeComSellHandler = (e) => {
        setSellEmployeesValue(e.target.value);
    };
    const onChangeSellHandler = (e) => {
        setSellFloorValue(e.target.value);
    };

    // Buttons handlers

    const buildLivingHandler = (field) => {
        dispatch(buyBuildings([activePlayer, field, floorValue, "living"]));
    };
    const buildCommercialHandler = (field) => {
        dispatch(buyBuildings([activePlayer, field, addEmployeesValue, "commercial"]));
    };
    const sellCommercialHandler = (field) => {
        if (fields[field].employees === +sellEmployeesValue) {
            let confirm = window.confirm("Are you shure you whan`a fire all emloyees and sell the field?");
            if (confirm === true) {
                dispatch(getRidOfAssets([activePlayer, field, sellEmployeesValue, "CommercialFieldSell"]));
            }
            if (confirm === false) {
                return;
            }
        } else {
            dispatch(getRidOfAssets([activePlayer, field, sellEmployeesValue, "employees"]));
        }
    };

    const sellLivingHandler = (field) => {
        if (fields[field].floor === +sellFloorValue) {
            let confirm = window.confirm("Are you shure you whan`a sell all buildings and a field?");
            if (confirm === true) {
                dispatch(getRidOfAssets([activePlayer, field, sellFloorValue, "livingFieldSell"]));
            }
            if (confirm === false) {
                return;
            }
        } else {
            dispatch(getRidOfAssets([activePlayer, field, sellFloorValue, "floors"]));
        }
    };
    const closeBuildingModalHandler = (player) => {
        dispatch(closeBuildingModal(player));
    };

    const hireEngineerHandler = (field) => {
        dispatch(hireEngineer([activePlayer, field]));
    };

    const fireEngineerHandler = (field) => {
        dispatch(fireEngineer([activePlayer, field]));
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                {emergencySellActives && (
                    <button
                        onClick={() => {
                            closeBuildingModalHandler(activePlayer);
                        }}
                        className={styles["close-button"]}
                    >
                        x
                    </button>
                )}
                <section>
                    <h1>{`On wich living field You\`l build ${activePlayer} ?`}</h1>
                    <ul className={styles["buttons-list"]}>
                        {activePlayerFields
                            .filter((num) => num !== 4 && num !== 16 && num !== 28 && num !== 40)
                            .map((field, index) => {
                                return (
                                    <li key={index} className={styles["building-fields"]}>
                                        <form className={styles["buy-living--form"]} onSubmit={onSubmitHandler}>
                                            <button className={styles["button-fields"]}>{field}</button>
                                            <h2>Here you have floors:{floorHeight[index]}</h2>

                                            <label htmlFor="build">ADD +:</label>
                                            <input
                                                onChange={onChangeLivBuildHandler}
                                                value={floorValue}
                                                id="build"
                                                type="number"
                                                min={1}
                                                max={4 - floorHeight[index]}
                                                step={1}
                                            ></input>

                                            <button
                                                disabled={floorHeight[index] >= 4}
                                                type="submit"
                                                className={styles["button-buy"]}
                                                onClick={() => buildLivingHandler(field)}
                                            >
                                                Buy{" "}
                                            </button>
                                        </form>
                                        <form
                                            className={styles["buy-commercial--form"]}
                                            onSubmit={onSubmitHandler}
                                        >
                                            <label htmlFor="sell-build">ADD +:</label>
                                            <input
                                                onChange={onChangeSellHandler}
                                                value={sellFloorValue}
                                                id="sell-build"
                                                type="number"
                                                min={1}
                                                max={floorHeight[index]}
                                                step={1}
                                            ></input>

                                            <button
                                                type="submit"
                                                className={styles["button-buy"]}
                                                onClick={() => sellLivingHandler(field)}
                                            >
                                                Sell
                                            </button>
                                        </form>
                                    </li>
                                );
                            })}
                    </ul>
                </section>
                <section className={styles["commercial-building"]}>
                    <h1>{`Or you whan\`a expand your manufacture?`}</h1>
                    <ul className={styles["buttons-list"]}>
                        {activePlayerFields
                            .filter((num) => num === 4 || num === 16 || num === 28 || num === 40)
                            .map((field, index) => {
                                return (
                                    <li key={index} className={styles["building-fields"]}>
                                        <button className={styles["button-fields"]}>{field}</button>
                                        <h3>Here you have employees:{activePlayerEmployees[index]}</h3>
                                        <form
                                            className={styles["buy-commercial--form"]}
                                            onSubmit={onSubmitHandler}
                                        >
                                            <label htmlFor="build-c">ADD +:</label>
                                            <input
                                                onChange={onChangeComBuildHandler}
                                                value={addEmployeesValue}
                                                id="build-c"
                                                type="number"
                                                min={10}
                                                max={40 - activePlayerEmployees[index]}
                                                step={10}
                                            ></input>

                                            <button
                                                disabled={activePlayerEmployees[index] >= 40}
                                                type="submit"
                                                className={styles["button-buy"]}
                                                onClick={() => buildCommercialHandler(field)}
                                            >
                                                Hire
                                            </button>
                                        </form>
                                        <form
                                            className={styles["buy-commercial--form"]}
                                            onSubmit={onSubmitHandler}
                                        >
                                            <label htmlFor="sell-build-c">ADD +:</label>
                                            <input
                                                onChange={onChangeComSellHandler}
                                                value={sellEmployeesValue}
                                                id="sell-build-c"
                                                type="number"
                                                min={10}
                                                max={activePlayerEmployees[index]}
                                                step={10}
                                            ></input>

                                            <button
                                                disabled={activePlayerEngineer[index] > 1}
                                                type="submit"
                                                className={styles["button-buy"]}
                                                onClick={() => sellCommercialHandler(field)}
                                            >
                                                Fire
                                            </button>
                                        </form>
                                        {/* ----- engineer ----- */}
                                        <h3>{`Here you ${
                                            activePlayerEngineer[index] === 1 ? "dont" : ""
                                        } have engineer`}</h3>

                                        <button
                                            disabled={
                                                activePlayerEngineer[index] > 1 ||
                                                activePlayerEmployees[index] !== 40
                                            }
                                            type="submit"
                                            className={styles["button-buy"]}
                                            onClick={() => hireEngineerHandler(field)}
                                        >
                                            Hire
                                        </button>

                                        <button
                                            disabled={activePlayerEngineer[index] === 1}
                                            type="submit"
                                            className={styles["button-buy"]}
                                            onClick={() => fireEngineerHandler(field)}
                                        >
                                            Fire
                                        </button>
                                    </li>
                                );
                            })}
                    </ul>
                </section>
            </div>
        </>
    );
};
export default BuildingModal;
