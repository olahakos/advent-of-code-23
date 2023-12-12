const removeAllSpaces = (str) => {
    const newStr = str.replaceAll(" ", "");
    return newStr;
};

const isNumber = (char) => {
    if (char >= "0" && char <= "9") return true;
    return false;
};

const whatIsThisCharacter = (char) => {
    if (isNumber(char)) return "NUMBER";
    if (char === ".") return "DOT";
    return "SYMBOL";
};

export { removeAllSpaces, isNumber, whatIsThisCharacter };
