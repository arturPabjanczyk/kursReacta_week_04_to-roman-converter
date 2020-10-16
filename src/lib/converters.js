
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
    return roman;
}

export {toRoman};