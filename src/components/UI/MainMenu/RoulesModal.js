import styles from "./Roulesmodal.module.css";
import Backdrop from "../ModalWindows/ModalTemplate/Backdrop";
import ModalWindow from "../ModalWindows/ModalTemplate/ModalWindow";
import CloseButton from "../ModalWindows/ModalButtons/CloseButton";
import { closeRoulesModal } from "../../../store/mainMenu";
import { useDispatch } from "react-redux";

const RoulesModal = () => {
    const dispatch = useDispatch();
    const closeRoulesModalHandler = () => {
        dispatch(closeRoulesModal());
    };
    return (
        <>
            <Backdrop />
            <ModalWindow className={styles["modal-props"]}>
                <CloseButton handler={closeRoulesModalHandler} className={styles[`close-button`]} />
                <div className={styles.info}>
                    <h2 className={styles.module}>Goal of the game</h2>
                    <p className={styles.text}>
                        The goal of the game is to bankrupt the opponent by capturing as much space as possible on
                        the playing field and expanding your business.
                    </p>
                    <h2 className={styles.module}>Settings</h2>
                    <p className={styles.text}>
                        You can set up player names, first move priority, amount of starting money, stocks and
                        various taxes manually in the "Settings" menu.
                    </p>
                    <h2 className={styles.module}>Game logic</h2>
                    <p className={styles.text}>
                        The game is very reminiscent of many well-known game "Monopoly". But somewhat different
                        from her. Players take turns rolling dice and moving around the map, getting to different
                        fields. They buy, they sell, they pay taxes, they end up in jail, and so on. Movement of
                        the player on the field, payment of taxes, receipt of dividends, payment of rent to the
                        player occur automatically. The rest of the steps are done manually.
                    </p>
                    <h2 className={styles.module}>Moving</h2>
                    <p className={styles.text}>
                        The player rolls the dice by pressing the "Next Move" button or by pressing the spacebar on
                        the keyboard. If a player rolled a double, then he moves again, regardless of the number of
                        doubles thrown. If not, then the turn passes to another player and so on in a circle.
                    </p>
                    <h2 className={styles.module}>Jail</h2>
                    <p className={styles.text}>
                        There are four prison fields on the map. A jailed player misses three turns if he fails to
                        roll a double. If a player, having thrown a double, went to jail, then he still throws
                        again. If he has a "jail release card" and uses it as soon as he enters prison, then he
                        will not miss a single turn. To use a jailbreak card, you must click on the "jailbreak
                        card" button in the corresponding player's information block. A player who is in prison
                        receives 50% of the profits from his business. You can also get into the prison from the
                        "roulette" field if the corresponding card falls out.
                    </p>
                    <h2 className={styles.module}>Roulette</h2>
                    <p className={styles.text}>
                        There are four roulette fields on the map. A player who enters this field opens the
                        roulette wheel and can randomly receive money, lose money, receive a release card from
                        prison, move to a specific field, writing off loan debt, be forced to pay for the repair of
                        all areas or be able to buy stocks.
                    </p>
                    <h2 className={styles.module}>Start and neutral fields</h2>
                    <p className={styles.text}>
                        Passing the starting field, the player pays taxes, returns the loan if he took it, and also
                        receives dividends. The remaining three gray fields in the corners are neutral fields.
                    </p>
                    <h2 className={styles.module}>Living fields</h2>
                    <p className={styles.text}>
                        Living fields are the most common type of fields in the game. They are available for
                        purchase and development, for subsequent rental. Initially, their color is white. The
                        player who has got on a free living field can buy it or refuse it. If a player buys a
                        board, it will be colored in the color of the player's figurine and one rental house will
                        be automatically set. The standard cost of rent for a foreign player who got on it is $50
                        from one house, $100 from two houses, and so on. But this can be configured in the setup
                        menu. The maximum number of houses on one field is 4. Houses, like the field itself, can be
                        sold, but only to the bank. The sale price is equal to half the purchase price of both the
                        field and the house. You can buy or sell a house or a field by clicking the "assets
                        management" button in the information block of each individual player on the playing field.
                    </p>
                    <h2 className={styles.module}>Commercial fields</h2>
                    <p className={styles.text}>
                        Commercial fields are only 4 fields on the map. Only production can be built there. The
                        purchase and expansion of production costs a little more than on the living fields, but the
                        prospect of earning more. After the purchase, such a field also paints in the color of the
                        player, only a few tones darker. First, the expansion is due to hiring more employees,
                        initially after the purchase of the field there are 10 of them, and the maximum number is
                        40. If the maximum number of employees is reached, then you can hire an engineer, and then
                        an experienced manager. Just like the houses on the living fields, you can also get rid of
                        employees in the "Assets Management" menu.
                    </p>
                    <h2 className={styles.module}>Players fight</h2>
                    <p className={styles.text}>
                        If the players met on any of the fields of the game, a fight breaks out between them.
                        Players roll one die each and whoever has the highest number wins, receiving $50 (can be
                        configured) from the other player.
                    </p>
                    <h2 className={styles.module}>Stocks</h2>
                    <p className={styles.text}>
                        Stocks is a tool that allows you to receive dividends every round. Unless otherwise stated,
                        the player initially has 50 stocks, which is equivalent to $500 in dividends each round.
                        They can be sold by clicking on the "Sell Stocks" button in the information block of the
                        corresponding player. Remember that selling stocks you lose income for the passage of the
                        circle. If you have 0 stocks, then you will not get anything for passing the circle. You
                        can buy stocks only if the corresponding card has fallen on the roulette table.
                    </p>
                    <h2 className={styles.module}>Take a credit</h2>
                    <p className={styles.text}>
                        Three times per game, you can take a micro loan of $1000 by clicking on the "Take a credit"
                        button in the information block of the corresponding player. You will need to return $1500
                        immediately the next time you pass the circle.
                    </p>
                    <h2 className={styles.module}>Taxes and rental indexes</h2>
                    <p className={styles.text}>
                        The amount of rent from a living field consists of: number of houses * price of one house *
                        rental index of a living field (initially 25%). The amount of income from the commercial
                        field is equal to: the number of employees * the cost of hiring 10 employees * the
                        engineer's index (1.5) * the manager's index (1.5) * the rental index of the commercial
                        field (initially 30%). Real estate taxes and income taxes are calculated from the same
                        calculations, only in the case of living fields it is 0.03%, and with commercial 0.05% of
                        the total. You don't have to worry about calculations, everything happens automatically and
                        is displayed on the game screen. But you must know the formula if you are going to change
                        the original settings of the game
                    </p>
                    <h2 className={styles.module}>Not enough money and game over</h2>
                    <p className={styles.text}>
                        If, while passing the circle, you do not have enough money to pay off your bills, or you
                        have lost money on roulette, or you have nothing to pay another player, the mode of forced
                        sale of your valuables is activated. At first, it will be proposed to sell houses, lay off
                        employees, or even sell the fields themselves. If this money is still not enough, then it
                        will be proposed to sell the stocks, if after selling all the stocks the player does not
                        have enough money, then he lost. You cannot take out a loan in this situation.
                    </p>
                </div>
            </ModalWindow>
        </>
    );
};

export default RoulesModal;
