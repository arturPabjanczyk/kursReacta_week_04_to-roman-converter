import React from "react";

class RomanNumbersAdder extends React.Component {
    state = {
        number_2: null,
        result: null
    }
    handleChange = (event) => {
        if (this.state.number_2 === null) {
            if (event.target.value == "I")
                this.setState({
                    result: "I"
                })
        }
    }

    render() {
        return (
            <>
                <label>Roman 1:<input onChange={this.handleChange}/></label>
                <label>Roman 2:<input/></label>
                <h1>Result: {this.state.result ? this.state.result : "none"}</h1>
            </>
        )

    }
}

export default RomanNumbersAdder;