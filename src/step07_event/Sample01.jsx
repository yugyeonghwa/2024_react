import React from "react";

class Sample01 extends React.Component{
    constructor(props){
        super(props)
        this.state = {isToggleOn : true};

        // 클래스 컴포넌트에서는 바인딩 함수를 필수적으로 해줘야 한다.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn : !prevState.isToggleOn
        }));
    }

    render(){
        return(
            // <button onClick={}>눌러주세요</button>
            <button onClick={this.handleClick}>{this.state.isToggleOn? '켜짐' : '꺼짐'}</button>
        )
    }
}

export default Sample01;