function toRoman(arabic) {
    const romanSymbols = [
        [1, "I"], [4, "IV"], [5, "V"], [9, "IX"], [10, "X"], [40, "XL"], [50, "L"],
        [90, "XC"], [100, "C"], [400, "CD"], [500, "D"], [900, "CM"], [1000, "M"],
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
    let arabic = 1;
    if (roman === "V") {
        arabic = 5
    }
    if (roman === "X") {
        arabic = 10
    }
    if (roman === "L") {
        arabic = 50
    }
    if (roman === "C") {
        arabic = 100
    }
    if (roman === "D") {
        arabic = 500
    }
    if (roman === "M") {
        arabic = 1000
    }
    return arabic;
}

export {toRoman, toArabic};