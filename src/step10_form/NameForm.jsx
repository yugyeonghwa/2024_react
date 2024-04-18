import React, { useState } from "react";

function NameForm(props) {
    const [m_name, setM_name] = useState();
    
    const handleChange = (e) => {
        setM_name(e.target.value.toUpperCase());
    }

    const handleSubmit = (e) => {
        alert('입력한 이름 : ' + m_name)
        // 어떤 이벤트를 명시적으로 처리하지 않을 경우, 해당 이벤트에 대한
        // 기본 동작을 실행하지 않도록 지정함
        // a 태그나 submit 를 통한 이동이나 창의 새로고침을 막아준다.
        e.prevntDefault();
    }

    return(
        // form은 state에서 관리해야 한다.
        // value={m_name}
        <form onSubmit={handleSubmit}>
            <label>이름 : <input type="text" value={m_name} onChange={handleChange} /></label>
            <button type="submit">보내기</button>
        </form>
    )
}

export default NameForm;