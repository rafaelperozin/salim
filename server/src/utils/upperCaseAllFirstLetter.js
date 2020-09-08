module.exports = function upperCaseAllFirstLetter(value) {
    value = value.toLowerCase();
    return value.replace(/\b\w/g, v => v.toUpperCase());
}