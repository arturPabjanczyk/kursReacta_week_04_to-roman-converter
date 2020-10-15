import {cleanup, render} from "@testing-library/react";
import React from "react";

class RomanConverter extends React.Component {
    render() {
        return <label>arabic<input/></label>;
    }
}

describe('<RomanConverter />', () => {
    afterEach(cleanup)

    it('should have an input', function () {
        const {getByLabelText} = render(<RomanConverter />)
        expect(() => {
            getByLabelText(/arabic/i)
        }).not.toThrow();
    });
})