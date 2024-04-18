import React, { useState } from "react";
import Ex07_Sub from "./Ex07_Sub";

function Ex07(props) {
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning(!showWarning);
    }

    return(
        <div>
            <Ex07_Sub warning = {showWarning} />
            <button onClick={handleToggleClick}>{showWarning ? '감추기' : '보이기'}</button>
        </div>
    )
}

export default Ex07;