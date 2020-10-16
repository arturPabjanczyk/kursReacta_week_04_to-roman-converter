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
        [10, "X"]
    ])('should  convert %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman)
    });
})