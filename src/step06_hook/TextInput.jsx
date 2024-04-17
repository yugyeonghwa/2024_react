import React, { useRef } from "react";

function TextInput(props) {
    const inputElem = useRef(null);

    const onButtonClick = () => {
        inputElem.current.focus();
    }

    return(
        <>
            <input ref={inputElem} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    )
}

export default TextInput;