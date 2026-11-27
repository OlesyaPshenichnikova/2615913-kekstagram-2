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

const getNumbers = (text) => {
    let onlyNumbers = '';

    for (let i = 0; i < text.length; i++) {
        if(!isNaN(  parseInt(text[i], 10)  )){
            onlyNumbers = onlyNumbers + text[i];
        }
    }
    return parseInt(onlyNumbers, 10);
};

console.log(getNumbers('2023 год'));            // 2023
console.log(getNumbers('ECMAScript 2022'));     // 2022
console.log(getNumbers('1 кефир, 0.5 батона')); // 105
console.log(getNumbers('агент 007'));           // 7
console.log(getNumbers('а я томат'));           // NaN