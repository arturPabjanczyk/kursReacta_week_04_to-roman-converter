import {cleanup, render} from "@testing-library/react";
import React from "react";
import RomanNumbersAdder from "../../components/RomanNumbersAdder";

describe('<RomanNumbersAdder />', () => {
    afterEach(cleanup)

    it('should have input for first roman number', function () {
        const {getByLabelText} = render(<RomanNumbersAdder />)
        expect(() => {
            getByLabelText(/roman 1/i)
        }).not.toThrow();
    });
})