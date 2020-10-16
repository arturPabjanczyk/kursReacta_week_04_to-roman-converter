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
    if (arabic == 500) {
        roman = "D"
    }
    if (arabic == 900) {
        roman = "CM"
    }
    if (arabic == 1000) {
        roman = "M"
    }
    return roman;
}

export {toRoman};