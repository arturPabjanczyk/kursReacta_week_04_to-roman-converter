import {cleanup, render} from "@testing-library/react";
import React from "react";
import RomanConverter from "./RomanConverter";

describe('<RomanConverter />', () => {
    afterEach(cleanup)

    it('should have an input', function () {
        const {getByLabelText} = render(<RomanConverter />)
        expect(() => {
            getByLabelText(/arabic/i)
        }).not.toThrow();
    });
    it('should show no roman number by default', function () {
        const {getByText} = render(<RomanConverter />)
        expect(() => {
            getByText("Roman: none")
        }).not.toThrow();
    });
})