import styles from "./Sections.module.css";
import Input from "../ModalTemplate/Input";
import ArgButton from "../ModalButtons/ArgButton";
import buyFieldSound from "../../../../media/rentalWithdrawal.mp3";
import {
    buyBuildings,
    getRidOfAssets,
    hireEngineer,
    fireEngineer,
    hireManager,
    fireManager,
} from "../../../../store/fields";

import { useDispatch } from "react-redux";
import { useState } from "react";

const SectionEmployees = (props) => {
    const dispatch = useDispatch();
    // Inputs changes handlers

    const [addEmployeesValue, setAddEmployeesValue] = useState(0);
    const [sellEmployeesValue, setSellEmployeesValue] = useState(0);

    const buyField = new Audio(buyFieldSound);

    const onChangeComSellHandler = (e) => {
        setSellEmployeesValue(e.target.value);
    };

    const onChangeComBuildHandler = (e) => {
        setAddEmployeesValue(e.target.value);
    };

    // Buttons handlers

    const buildCommercialHandler = (field) => {
        buyField.play();
        dispatch(buyBuildings([props.activePlayer, field, addEmployeesValue, "commercial"]));
    };
    const sellCommercialHandler = (field) => {
        if (props.fields[field].employees === +sellEmployeesValue) {
            let confirm = window.confirm("Are you shure you whan`a fire all emloyees and sell the field?");
            if (confirm === true) {
                dispatch(getRidOfAssets([props.activePlayer, field, sellEmployeesValue, "CommercialFieldSell"]));
            }
            if (confirm === false) {
                return;
            }
        } else {
            dispatch(getRidOfAssets([props.activePlayer, field, sellEmployeesValue, "employees"]));
        }
    };
    const hireEngineerHandler = (field) => {
        buyField.play();
        dispatch(hireEngineer([props.activePlayer, field]));
    };

    const fireEngineerHandler = (field) => {
        const confirm = window.confirm("You shure you whan`a fire engineer?");
        if (confirm === true) {
            dispatch(fireEngineer([props.activePlayer, field]));
        }
    };

    const hireManagerHandler = (field) => {
        buyField.play();
        dispatch(hireManager([props.activePlayer, field]));
    };
    const fireManagerHandler = (field) => {
        const confirm = window.confirm("You shure you whan`a fire manager?");
        if (confirm === true) {
            dispatch(fireManager([props.activePlayer, field]));
        }
    };

    const activePlayerEmployees = props.activePlayerFields
        .filter((num) => num === 4 || num === 16 || num === 28 || num === 40)
        .map((field) => props.fields[field].employees);
    const activePlayerEngineer = props.activePlayerFields
        .filter((num) => num === 4 || num === 16 || num === 28 || num === 40)
        .map((field) => props.fields[field].engineer);
    const activePlayerManager = props.activePlayerFields
        .filter((num) => num === 4 || num === 16 || num === 28 || num === 40)
        .map((field) => props.fields[field].manager);

    return (
        <section>
            <h1 className={styles.header}>{`Manage your commercial fields`}</h1>
            <ul className={styles["fields-list"]}>
                {props.activePlayerFields
                    .filter((num) => num === 4 || num === 16 || num === 28 || num === 40)
                    .map((field, index) => {
                        return (
                            <li key={index} className={styles["field-c"]}>
                                <div className={styles["field-number"]}>{field}</div>

                                {/* ----- employees ----- */}
                                <h2 className={styles.quantity}>Employees:{activePlayerEmployees[index]}</h2>
                                <form onSubmit={props.onSubmitHandler}>
                                    <div className={styles["controls-c"]}>
                                        <Input
                                            labelMessage={""}
                                            onChange={onChangeComBuildHandler}
                                            value={addEmployeesValue}
                                            id={"build-c"}
                                            type={"number"}
                                            min={10}
                                            max={40 - activePlayerEmployees[index]}
                                            step={10}
                                        />
                                        <ArgButton
                                            disabled={activePlayerEmployees[index] >= 40}
                                            type={"submit"}
                                            handler={buildCommercialHandler}
                                            arguments={field}
                                            message={"Hire"}
                                        />
                                    </div>
                                </form>
                                <form onSubmit={props.onSubmitHandler}>
                                    <div className={styles["controls-c"]}>
                                        <Input
                                            labelMessage={""}
                                            onChange={onChangeComSellHandler}
                                            value={sellEmployeesValue}
                                            id={"sell-build-c"}
                                            type={"number"}
                                            min={10}
                                            max={activePlayerEmployees[index]}
                                            step={10}
                                        />
                                        <ArgButton
                                            disabled={activePlayerEngineer[index] > 1}
                                            type={"submit"}
                                            handler={sellCommercialHandler}
                                            arguments={field}
                                            message={"Fire"}
                                        />
                                    </div>
                                </form>
                                {/* ----- engineer ----- */}
                                <h2 className={styles.quantity}>{`You ${
                                    activePlayerEngineer[index] === 1 ? "dont" : ""
                                } have engineer`}</h2>
                                <div className={styles["controls-c"]}>
                                    <ArgButton
                                        disabled={
                                            activePlayerEngineer[index] > 1 || activePlayerEmployees[index] !== 40
                                        }
                                        type={"submit"}
                                        handler={hireEngineerHandler}
                                        arguments={field}
                                        message={"Hire"}
                                    />
                                    <ArgButton
                                        disabled={activePlayerEngineer[index] === 1}
                                        type={"submit"}
                                        handler={fireEngineerHandler}
                                        arguments={field}
                                        message={"Fire"}
                                    />
                                </div>

                                {/* ----- manager ----- */}
                                <h2 className={styles.quantity}>{`You ${
                                    activePlayerManager[index] === 1 ? "dont" : ""
                                } have manager`}</h2>
                                <div className={styles["controls-c"]}>
                                    <ArgButton
                                        disabled={
                                            activePlayerEngineer[index] === 1 ||
                                            activePlayerEmployees[index] !== 40 ||
                                            activePlayerManager > 1
                                        }
                                        type={"submit"}
                                        handler={hireManagerHandler}
                                        arguments={field}
                                        message={"Hire"}
                                    />
                                    <ArgButton
                                        disabled={activePlayerManager[index] === 1}
                                        type={"submit"}
                                        handler={fireManagerHandler}
                                        arguments={field}
                                        message={"Fire"}
                                    />
                                </div>
                            </li>
                        );
                    })}
            </ul>
        </section>
    );
};

export default SectionEmployees;
