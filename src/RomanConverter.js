import React from "react";

class RomanConverter extends React.Component {
    state = {
        roman: null
    }
    handleChange = (event) => {
        this.setState({
            roman: "I"
        })
    }

    render() {
        return (
            <>
                <label>Arabic:<input onChange={this.handleChange}></input></label>
                <h1>Roman: {this.state.roman ? this.state.roman : "none"}</h1>
            </>
        );
    }
}

export default RomanConverter;