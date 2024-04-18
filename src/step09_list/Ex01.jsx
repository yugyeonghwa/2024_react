import React from "react";

function Ex01(props) {
    const {list} = props;

    const listItems = list.map((k) => {
        return(
            // 개발자도구를 보면 key 때문에 오류 발생
            // <li>{k}</li>

            // key에 들어가는 값은 중복 안 되는 것으로 넣어줘야 한다.
            <li key={k}>{k}</li>
        )
    });

    const listItems2 = list.map((k, index) => {
        return(
            <li>{k}</li>
        )
    });

    return(
        <ul>{listItems}</ul>
    )
}

export default Ex01;