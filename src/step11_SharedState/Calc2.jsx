import React, { useState } from "react";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 덜 끓었습니다.</p>
}

const scalenames = {
    c : '섭씨',
    f : '화씨'
};

function TemperatureInput(props) {
    const [temperature, setTemperature] = useState('');

    const handleChange = (e) => {
        setTemperature(e.target.value);
    }

    return(
        <fieldset>
            <legend>온도를 입력해 주세요 (단위 : {scalenames[props.scale]}) </legend>
            <input type="number" value={temperature} onChange={handleChange} />
            <BoilingVerdict celsius={temperature} />
        </fieldset>
    )
}

function Calc2(props) {
    return(
        <div>
            <TemperatureInput scale="c" />
            <TemperatureInput scale="f" />
        </div>
    )
}

export default Calc2;