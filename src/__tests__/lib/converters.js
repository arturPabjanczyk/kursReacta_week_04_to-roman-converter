import {toRoman} from "../../lib/converters"

describe('toRoman()', () => {
    it.each([
        [0, "none"], [1, "I"],[2, "II"],[4, "IV"],[5, "V"],[9, "IX"],[10, "X"],[40, "XL"],[50, "L"],
        [90, "XC"],[100, "C"],[400, "CD"],[500, "D"],[900, "CM"],[1000, "M"], [2019, "MMXIX"], [-1, "none"]
    ])('should  convert %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman)
    });
})