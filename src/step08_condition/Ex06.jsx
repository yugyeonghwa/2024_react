import React, { useState } from "react";
import Ex06_Toolber from "./Ex06_Toolbar";

function Ex06(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const onClickLogin = () => {
        setIsLoggedIn(true);
    }

    
    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    return(
        <div>
            <Ex06_Toolber 
                isLoggedIn = {isLoggedIn}
                onClickLogin = {onClickLogin}
                onClickLogout = {onClickLogout}
            />
            <div>리액트 공부 ~ (본문)</div>
        </div>
    )
}

export default Ex06;