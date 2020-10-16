import {toRoman} from "../../lib/converters"

describe('toRoman()', () => {
    it('should not convert 0 to any roman number', function () {
        expect(toRoman(0)).toEqual("none")
    });
    xit('should convert 2019 to MMXIX', function () {
        expect(toRoman(2019)).toEqual("MMXIX")
    });
});
describe('toRoman()', () => {
    it.each([
        [1, "I"],
        [4, "IV"],
        [5, "V"],
        [9, "IX"],
        [10, "X"],
        [40, "XL"],
        [50, "L"],
        [90, "XC"],
        [100, "C"],
        [400, "CD"]
    ])('should  convert %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman)
    });
})