import {cleanup, fireEvent, render} from "@testing-library/react";
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
    it('should have input for second roman number', function () {
        const {getByLabelText} = render(<RomanNumbersAdder />)
        expect(() => {
            getByLabelText(/roman 2/i)
        }).not.toThrow();
    });
    it('should show no result by default', function () {
        const {getByText} = render(<RomanNumbersAdder />)
        expect(() => {
            getByText("Result: none")
        }).not.toThrow();
    });
    it('should show I in result when I entered as first number and second is empty', function () {
        const {getByLabelText, getByText} = render(<RomanNumbersAdder />)
        fireEvent.change(getByLabelText(/roman 1/i), {target: {value: "I"}});
        fireEvent.change(getByLabelText(/roman 2/i), {target: {value: null}});
        expect(() => {
            getByText("Result: I")
        }).not.toThrow();
    });
    it('should show L in result when L entered as second number and first is empty', function () {
        const {getByLabelText, getByText} = render(<RomanNumbersAdder />)
        fireEvent.change(getByLabelText(/roman 2/i), {target: {value: "L"}});
        fireEvent.change(getByLabelText(/roman 1/i), {target: {value: null}});
        expect(() => {
            getByText("Result: L")
        }).not.toThrow();
    });
})