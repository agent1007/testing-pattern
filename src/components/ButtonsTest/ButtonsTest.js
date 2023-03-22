function ButtonTest({ handleClick, ButtonClassName, text }) {


    return (
        <button type="button" className={ButtonClassName} onClick={() => {
            handleClick()
        }} >{text}</button>
    );
}

export default ButtonTest;