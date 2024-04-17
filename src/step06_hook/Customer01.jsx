import React, { useCallback, useState } from "react";

function Customer02({onClick}) {
    return(
        <button onClick={onClick}>눌러주세요</button>
    )
}

function Customer01() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count => count + 1);
        console.log(count);
    }, []);

    return(
        <div>
            <Customer02 onClick={handleClick} />
        </div>
    )
}

export default Customer01;