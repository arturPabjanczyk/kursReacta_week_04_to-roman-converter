import React from "react";

class ArabicConverter extends React.Component {
    state = {
        arabic: null
    }
    handleChange = (event) => {
        this.setState({
            arabic: 1
        })
    }
    render() {
        return (
            <>
                <label>Roman: <input onChange={this.handleChange}/></label>
                <h1>Arabic: {this.state.arabic ? this.state.arabic : "none"}</h1>
            </>
        )

    }
}

export default ArabicConverter;