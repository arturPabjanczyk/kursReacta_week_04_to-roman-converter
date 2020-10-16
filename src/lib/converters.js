function toRoman(arabic) {
    let roman = "none";

    if (arabic == 1) {
        roman = "I"
    }
    if (arabic == 4) {
        roman = "IV"
    }
    if (arabic == 5) {
        roman = "V"
    }
    if (arabic == 9) {
        roman = "IX"
    }
    if (arabic == 10) {
        roman = "X"
    }
    if (arabic == 40) {
        roman = "XL"
    }
    if (arabic == 50) {
        roman = "L"
    }
    if (arabic == 90) {
        roman = "XC"
    }
    if (arabic == 100) {
        roman = "C"
    }
    if (arabic == 400) {
        roman = "CD"
    }
    return roman;
}

export {toRoman};