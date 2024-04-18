import React from "react";

class Sample04 extends React.Component{
    constructor(props){
        super(props)
        this.state = {isConfirmed : false};

        // 클래스 컴포넌트에서는 바인딩 함수를 필수적으로 해줘야 한다.
        this.handleConfirmed = this.handleConfirmed.bind(this);
    }

    handleConfirmed(){
        this.setState(prevState => ({
            isConfirmed : !prevState.isConfirmed
        }));
    }

    render(){
        return(
            <button 
                onClick={this.handleConfirmed}
                disabled={this.state.isConfirmed}
                >
                    {this.state.isConfirmed? '확인됨' : '확인하기'}
            </button>
        )
    }
}

export default Sample04;