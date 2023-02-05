module.exports = function reverse (n) {
    let toString = String(n);
    let splitString = toString.split("");
    let reverseString = splitString.reverse("");
    let newString = reverseString.join("");
    let reverseNumber = +newString;
    return reverseNumber;
}
