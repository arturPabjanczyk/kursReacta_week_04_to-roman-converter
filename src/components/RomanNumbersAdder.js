import React from "react";
import {addTwoRomans, isRoman,} from "../lib/converters";

class RomanNumbersAdder extends React.Component {
    state = {
        number_1: null,
        number_2: null,
        result: null
    }
    handleFirstNumberChange = (event) => {
        let result, number_1;
        number_1 = event.target.value;
        if (!isRoman(number_1)) {
            this.setState({result: "One or both numbers are not roman numbers"});
            return;
        }
        const {number_2} = this.state;
        if (number_2 === null) {
            result = number_1;
        } else {
            result = addTwoRomans(number_1, number_2);
        }
        this.setState({result, number_1})
    }
    handleSecondNumberChange = (event) => {
        let result, number_2;
        number_2 = event.target.value;
        if (!isRoman(number_2)) {
            this.setState({result: "One or both numbers are not roman numbers"});
            return;
        }
        const {number_1} = this.state;
        if (number_1 === null) {
            result = number_2;
        } else {
            result = addTwoRomans(number_1, number_2);
        }
        this.setState({result, number_2})
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