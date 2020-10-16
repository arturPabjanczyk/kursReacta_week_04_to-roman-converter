
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
    return roman;
}

export {toRoman};