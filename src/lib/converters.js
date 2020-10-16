
function toRoman(arabic) {
    let roman = "none";
    if (arabic == 5) {
        roman = "V"
    }
    if (arabic == 1) {
        roman = "I"
    }
    if (arabic == 4) {
        roman = "IV"
    }
    return roman;
}

export {toRoman};