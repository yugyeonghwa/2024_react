import React from "react";

function Light({room, on, toggle}) {
    console.log({room, on});
    return(
        <button onClick={toggle}>
            {room} {on ? "💡" : "⬛"}
        </button>
    )
}
// memo는 props 값이 변경되지 않는 한 호출되지 않는다.
export default React.memo(Light);