import {cleanup, fireEvent, render} from "@testing-library/react";
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
    it('should convert 1 to I', function () {
        const {getByLabelText, getByText} = render(<RomanConverter />)
        fireEvent.change(getByLabelText(/arabic/i), {target: {value: "1"}});
        expect(() => {
            getByText("Roman: I")
        }).not.toThrow();
    });
    it('should convert 5 to V', function () {
        const {getByLabelText, getByText} = render(<RomanConverter />)
        fireEvent.change(getByLabelText(/arabic/i), {target: {value: "5"}});
        expect(() => {
            getByText("Roman: V")
        }).not.toThrow();
    });
    it('should not convert 0 to any roman number', function () {
        const {getByLabelText, getByText} = render(<RomanConverter />)
        fireEvent.change(getByLabelText(/arabic/i), {target: {value: "0"}});
        expect(() => {
            getByText("Roman: none")
        }).not.toThrow();
    });
})