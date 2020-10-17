import {toArabic, toRoman} from "../../lib/converters"

describe('toRoman()', () => {
    it.each([
        [0, "none"], [1, "I"],[2, "II"],[4, "IV"],[5, "V"],[9, "IX"],[10, "X"],[40, "XL"],[50, "L"],
        [90, "XC"],[100, "C"],[400, "CD"],[500, "D"],[900, "CM"],[1000, "M"], [2019, "MMXIX"], [-1, "none"]
    ])('should  convert %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman)
    });
})
describe('toArabic<90', () => {
    it.each([
        ["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000], ["IV", 4], ["IX", 9], ["II", 2], ["XI", 11]
    ])('should convert %s to %d', (roman, expectedArabic) => {
        expect(toArabic(roman)).toEqual(expectedArabic)
    });
})