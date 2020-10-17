import React from "react";

class RomanNumbersAdder extends React.Component {
    state = {
        number_1: null,
        number_2: null,
        result: null
    }
    handleFirstNumberChange = (event) => {
        if (this.state.number_2 === null) {
            if (event.target.value == "I")
                this.setState({
                    result: "I"
                })
        }
    }
    handleSecondNumberChange = (event) => {
        if (this.state.number_1 === null) {
            if (event.target.value == "L")
                this.setState({
                    result: "L"
                })
        }
    }
    render() {
        return (
            <>
                <label>Roman 1:<input onChange={this.handleFirstNumberChange}/></label>
                <label>Roman 2:<input onChange={this.handleSecondNumberChange}/></label>
                <h1>Result: {this.state.result ? this.state.result : "none"}</h1>
            </>
        )

    }
}

export default RomanNumbersAdder;