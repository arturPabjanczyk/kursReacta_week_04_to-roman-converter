import React from "react";

class RomanNumbersAdder extends React.Component {
    state = {
        result: null
    }
    render() {
        return (
            <>
                <label>Roman 1:<input/></label>
                <label>Roman 2:<input/></label>
                <h1>Result: {this.state.result ? this.state.result : "none"}</h1>
            </>
        )

    }
}

export default RomanNumbersAdder;