function toRoman(arabic) {
    const romanSymbols = [
        [1, "I"], [4, "IV"], [5, "V"], [9, "IX"], [10, "X"], [40, "XL"], [50, "L"],
        [90, "XC"], [100, "C"], [400, "CD"], [500, "D"], [900, "CM"], [1000, "M"]
    ]
    const romanSymbolsSorted = [...romanSymbols].sort((a, b) => b[0] - a[0])
    let roman = "";
    let i = 0;
    if (arabic <= 0) {
        return "none";
    }
    while (arabic > 0 && i < romanSymbolsSorted.length) {
        const currentRomanSymbol = romanSymbolsSorted[i];
        if (currentRomanSymbol[0] <= arabic) {
            roman += currentRomanSymbol[1];
            arabic -= currentRomanSymbol[0];
        } else {
            i++
        }
    }
    return roman;
}

function toArabic(roman) {
    if(!isRoman(roman)) {
        return "not a roman number"
    }
    const romanSymbols = [
        [1, "I"], [5, "V"], [10, "X"], [50, "L"], [100, "C"], [500, "D"], [1000, "M"]
    ]
    let arabic = 0;
    for (let i = 0; i < roman.length; i++) {
        const currentRomanSymbolLeft = roman[i];
        const currentRomanSymbolLeftValue = romanSymbols.filter(symbol => symbol[1] == currentRomanSymbolLeft)[0][0];
        if (i + 1 < roman.length) {
            const currentRomanSymbolRight = roman[i + 1];
            const currentRomanSymbolRightValue = romanSymbols.filter(symbol => symbol[1] == currentRomanSymbolRight)[0][0];
            if (currentRomanSymbolLeftValue < currentRomanSymbolRightValue) {
                arabic -= currentRomanSymbolLeftValue;
                continue;
            }
        }
        arabic += currentRomanSymbolLeftValue;
    }
    return arabic;
}

function isRoman(roman) {
    return (new RegExp("^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$")).test(roman);
}

export {toRoman, toArabic};