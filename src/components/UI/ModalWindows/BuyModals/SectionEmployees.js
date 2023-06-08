import styles from "./SectionEmployees.module.css";
import Input from "../ModalTemplate/Input";
import ArgButton from "../ModalButtons/ArgButton";

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

    const onChangeComSellHandler = (e) => {
        setSellEmployeesValue(e.target.value);
    };

    const onChangeComBuildHandler = (e) => {
        setAddEmployeesValue(e.target.value);
    };

    // Buttons handlers

    const buildCommercialHandler = (field) => {
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
        dispatch(hireEngineer([props.activePlayer, field]));
    };

    const fireEngineerHandler = (field) => {
        const confirm = window.confirm("You shure you whan`a fire engineer?");
        if (confirm === true) {
            dispatch(fireEngineer([props.activePlayer, field]));
        }
    };

    const hireManagerHandler = (field) => {
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
        <section className={styles["commercial-building"]}>
            <h1>{`Or you whan\`a expand your manufacture?`}</h1>
            <ul className={styles["buttons-list"]}>
                {props.activePlayerFields
                    .filter((num) => num === 4 || num === 16 || num === 28 || num === 40)
                    .map((field, index) => {
                        return (
                            <li key={index} className={styles["building-fields"]}>
                                <button className={styles["button-fields"]}>{field}</button>

                                {/* ----- employees ----- */}
                                <h3>Here you have employees:{activePlayerEmployees[index]}</h3>
                                <form onSubmit={props.onSubmitHandler}>
                                    <Input
                                        labelMessage={"ADD +:"}
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
                                </form>
                                <form className={styles["buy-commercial--form"]} onSubmit={props.onSubmitHandler}>
                                    <Input
                                        labelMessage={"ADD +:"}
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
                                </form>
                                {/* ----- engineer ----- */}
                                <h3>{`Here you ${
                                    activePlayerEngineer[index] === 1 ? "dont" : ""
                                } have engineer`}</h3>
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

                                {/* ----- manager ----- */}
                                <h3>{`Here you ${
                                    activePlayerManager[index] === 1 ? "dont" : ""
                                } have manager`}</h3>

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
                            </li>
                        );
                    })}
            </ul>
        </section>
    );
};

export default SectionEmployees;
