import React from "react";

function Ex02(props) {
    const msg = [
        {
            idx : 1,
            name : 'hong',
            age : 14
        },
        {
            idx : 2,
            name : 'hong',
            age : 24
        },
        {
            idx : 3,
            name : 'kim',
            age : 14
        }
    ]

    return(
        <ul>
            {msg.map((k) => {
                return(
                    <li key={k.idx}>{k.name}({k.age})</li>
                )
            })}
        </ul>
            
    )
    

    
}

export default Ex02;