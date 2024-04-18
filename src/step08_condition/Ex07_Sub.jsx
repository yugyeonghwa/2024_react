import React from "react";

function Ex07_Sub(props) {
    if (!props.warning) {
        // 렌더링 하고 싶지 않을 때
        return null;
    }
    return(
        <div>경고~~~</div>
    )
}

export default Ex07_Sub;