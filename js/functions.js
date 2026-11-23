const checkString = (text, maxLength) => text.length <= maxLength;

const isPalindrom = (text) => {
    const normalisedString = text.replaceAll(' ', '').toLowerCase();
    let inversedString = '';

    for(let i = normalisedString.length - 1; i >= 0; i--){
        inversedString = inversedString + normalisedString[i];
    }
    return normalisedString === inversedString;
}

console.log(isPalindrom('Леша на полке клопа нашел'));