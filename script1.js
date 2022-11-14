var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];
var numericCharacters = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
];
var specialCharacters = [
    '~',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '-',
    '_',
];
function getPasswordOptions () {
    var length = parseInt(
        prompt('Choose between 8 and 128 characters'),9
    );
    if (Number.isNaN(length)) {
        alert('Please enter a number');
        return null;
    }
    if (length < 8) {
        alert('Must be at least 8');
        return null
    }
    if (length > 128) {
        alert('Must be under 128');
        return null
    }

    var hasLowerCasedCharacters = confirm(
        'Click OK to confirm lowercase'
    );
    var hasUpperCasedCharacters = confirm(
        'Click OK to confirm uppercase'
    );
    var hasNumericCharacters = confirm(
        'Click OK to confirm numeric'
    );
    var hasSpecialCharacters = confirm(
        'Click OK to confirm special characters'
    );
    if (
        hasLowerCasedCharacters === false &&
        hasUpperCasedCharacters === false &&
        hasNumericCharacters === false &&
        hasSpecialCharacters === false
    )
    var passwordOptions = {
        length: length,
        hasLowerCasedCharacters: hasLowerCasedCharacters,
        hasUpperCasedCharacters: hasUpperCasedCharacters,
        hasNumericCharacters: hasNumericCharacters,
        hasSpecialCharacters: hasSpecialCharacters,
    };
    return passwordOptions;
}
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr [randIndex];
    return randElement;
}
function generatePassword () {
    var options = getPasswordOptions();
    var result =[];
    var guaranteedCharacters = [];
    var possibleCharacters =[];
    if (!options) return null;
    if (options.hasLowerCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        guaranteedCharacters.push(getRandom(lowerCasedCharacters));
      }
    if (options.hasUpperCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        guaranteedCharacters.push(getRandom(upperCasedCharacters));
      }
    if (options.hasNumericCharacters) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        guaranteedCharacters.push(getRandom(numericCharacters));
      }
    if (options.hasSpecialCharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters));
      }
    for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }
    for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
