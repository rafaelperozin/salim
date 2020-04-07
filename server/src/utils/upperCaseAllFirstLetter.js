module.exports = function upperCaseAllFirstLetter(value) {
    return value.replace(/\b\w/g, v => v.toUpperCase());
}