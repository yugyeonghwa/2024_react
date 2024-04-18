import React, { useState } from "react";

function SelectForm(props) {
    const [fruit_name, setFruit_name] = useState('grape');
    const [fruit_arr, setFruit_arr] = useState(['']);
    
    const handleChange = (e) => {
        setFruit_name(e.target.value);
    }
    
    const handleChange2 = (e) => {
        const selectedFruits = Array.from(e.target.selectedOptions, option => option.value);
        setFruit_arr(selectedFruits);
    }

    const handleSubmit = (e) => {
        alert('입력한 이름 : ' + fruit_name)
        e.prevntDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요 (한개)
                <select value={fruit_name} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="grape">포도</option>
                    <option value="banana">바나나</option>
                    <option value="mango">망고</option>
                </select>
            </label>
            <label>
                과일을 선택하세요 (여러개)
                <select multiple={true} defaultValue={[fruit_arr]} onChange={handleChange2}>
                    <option value="apple">사과</option>
                    <option value="grape">포도</option>
                    <option value="banana">바나나</option>
                    <option value="mango">망고</option>
                </select>
            </label>
            <button type="submit">보내기</button>
        </form>
    )
}

export default SelectForm;