import {toRoman} from "../../lib/converters"

describe('toRoman()', () => {
    it('should not convert 0 to any roman number', function () {
        expect(toRoman(0)).toEqual("none")
    });
});
describe('toRoman()', () => {
    it.each([
        [1, "I"],
        [5, "V"]
    ])('should  convert %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman)
    });
})