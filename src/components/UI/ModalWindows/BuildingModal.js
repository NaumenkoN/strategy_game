import styles from "./BuildingModal.module.css";
import { closeBuildingModal, buyBuildings } from "../../../store/fields";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const BuildingModal = () => {
    const dispatch = useDispatch();
    const isOpenBuildingModalp1 = useSelector((state) => state.fields.player1.isOpenBuildingModal);
    const isOpenBuildingModalp2 = useSelector((state) => state.fields.player2.isOpenBuildingModal);
    const activePlayer = (isOpenBuildingModalp1 && "player1") || (isOpenBuildingModalp2 && "player2");
    const activePlayerFields = useSelector((state) => state.fields[`${activePlayer}`].fields);

    const fields = useSelector((state) => state.fields.fields);
    const [floorValue, setFloorValue] = useState(0);
    const [employeesValue, setEmployeesValue] = useState(0);
    const floorHeight = activePlayerFields
        .filter((num) => num !== 4 && num !== 16 && num !== 28 && num !== 40)
        .map((field) => fields[field].floor);
    const activePlayerEmployees = activePlayerFields
        .filter((num) => num === 4 || num === 16 || num === 28 || num === 40)
        .map((field) => fields[field].employees);

    const closeBuildingModalHandler = (player) => {
        dispatch(closeBuildingModal(player));
    };
    const onChangeHandler = (e) => {
        setFloorValue(e.target.value);
        setEmployeesValue(e.target.value);
    };
    const buildLivingHandler = (field) => {
        dispatch(buyBuildings([activePlayer, field, floorValue, "living"]));
    };
    const buildCommercialHandler = (field) => {
        dispatch(buyBuildings([activePlayer, field, employeesValue, "commercial"]));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <button
                    onClick={() => {
                        closeBuildingModalHandler(activePlayer);
                    }}
                    className={styles["close-button"]}
                >
                    x
                </button>

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
                                                onChange={onChangeHandler}
                                                value={floorValue}
                                                id="build"
                                                type="number"
                                                min={1}
                                                max={4 - floorHeight[index]}
                                                step={1}
                                            ></input>
                                            <div className={styles["control-buttons"]}>
                                                <button
                                                    disabled={floorHeight[index] >= 4}
                                                    type="submit"
                                                    className={styles["button-buy"]}
                                                    onClick={() => buildLivingHandler(field)}
                                                >
                                                    Buy{" "}
                                                </button>
                                            </div>
                                        </form>
                                    </li>
                                );
                            })}
                    </ul>
                </section>
                <section className={styles["commercial-building"]}>
                    <h1>{`Or you whan\`a expand your manufacturer?`}</h1>
                    <ul className={styles["buttons-list"]}>
                        {activePlayerFields
                            .filter((num) => num === 4 || num === 16 || num === 28 || num === 40)
                            .map((field, index) => {
                                return (
                                    <li key={index} className={styles["building-fields"]}>
                                        <form
                                            className={styles["buy-commercial--form"]}
                                            onSubmit={onSubmitHandler}
                                        >
                                            <button className={styles["button-fields"]}>{field}</button>
                                            <h3>Here you have employees:{activePlayerEmployees[index]}</h3>

                                            <label htmlFor="build-c">ADD +:</label>
                                            <input
                                                onChange={onChangeHandler}
                                                value={employeesValue}
                                                id="build-c"
                                                type="number"
                                                min={10}
                                                max={40 - activePlayerEmployees[index]}
                                                step={10}
                                            ></input>
                                            <div className={styles["control-buttons"]}>
                                                <button
                                                    disabled={activePlayerEmployees[index] >= 40}
                                                    type="submit"
                                                    className={styles["button-buy"]}
                                                    onClick={() => buildCommercialHandler(field)}
                                                >
                                                    Buy
                                                </button>
                                            </div>
                                        </form>
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
