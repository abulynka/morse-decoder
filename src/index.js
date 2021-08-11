const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

/**
 * @param {string} expr 
 */
function decode(expr) {
    let morseTable = {};
    let convert = {
        '.': '10',
        '-': '11',
    };

    for (const [key, value] of Object.entries(MORSE_TABLE)) {
        let currentKey = '';
        key.split('').forEach(
            (e) => {
                currentKey += convert[e];
            }
        );
        morseTable[currentKey.padStart(10, '0')] = value;
    }

    let result = '';
    const arr = expr.split('');
    for (let i = 0; i < arr.length; i = i + 10) {
        const char = arr.slice(i, i + 10).join('');
        if (char === '**********') {
            result += ' ';
        } else {
            result += morseTable[arr.slice(i, i + 10).join('')];
        }
    }
    return result;
}

module.exports = {
    decode
}