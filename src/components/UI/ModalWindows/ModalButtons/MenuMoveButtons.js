const MenuMoveButton = (props) => {
    const classes = props.className;
    return (
        <button
            onMouseEnter={props.onMouseEnter}
            type={props.type}
            disabled={props.disabled}
            onClick={props.handler}
            className={classes}
        >
            {props.message}
        </button>
    );
};

export default MenuMoveButton;
