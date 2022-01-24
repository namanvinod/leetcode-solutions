const mapping = {};

mapping['1'] = 'I';
mapping['5'] = 'V';
mapping['10'] = 'X';
mapping['50'] = 'L';
mapping['100'] = 'C';
mapping['500'] = 'D';
mapping['1000'] = 'M';

const intToRoman = input => {
    if (!Number(input) && input <= 0) return '';

    let result = '', counter = 1;

    let reversedNumArr = input.toString().split('');
    
    result = reversedNumArr.reduceRight((acc, curr) => {
        let currNum = Number(curr);
        let halfOfCurrPlace = Math.pow(10, counter) / 2;
        let currPrefix = mapping[Math.pow(10, counter - 1)];
        let roman = '';

        if(currNum === 4 || currNum === 9) {
            roman = currPrefix;
            acc = currNum === 9 ? `${roman}${mapping[halfOfCurrPlace * 2]}${acc}` : `${roman}${mapping[halfOfCurrPlace]}${acc}`;
        }
        else if(currNum < 4) {
            for (let i = 0; i < currNum; i++) {
                roman = `${roman}${mapping[Math.pow(10, counter - 1)]}`;
            }
            acc = roman + acc;
        }
        else if(currNum === 5) {
            acc = `${mapping[halfOfCurrPlace]}${acc}`
        }
        else if(currNum < 9) {
            roman = `${mapping[halfOfCurrPlace]}`;
            for (let i = 6; i <= currNum; i++) {
                roman = `${roman}${mapping[Math.pow(10, counter - 1)]}`;
            }
            acc = roman + acc;
        }

        counter++;

        return acc;
    }, '');

    return result;
};

const getOutput = () => {
    console.log(1, intToRoman(1) == 'I');
    console.log(2, intToRoman(3) === 'III');
    console.log(3, intToRoman(4) === 'IV');
    console.log(4, intToRoman(5) === 'V');
    console.log(5, intToRoman(6) === 'VI');
    console.log(6, intToRoman(8) === 'VIII');
    console.log(7, intToRoman(9) === 'IX');
    console.log(8, intToRoman(10) === 'X');
    console.log(9, intToRoman(15) === 'XV');
    console.log(10, intToRoman(17) === 'XVII');
    console.log(11, intToRoman(19) === 'XIX');
    console.log(12, intToRoman(20) === 'XX');
    console.log(13, intToRoman(33) === 'XXXIII');
    console.log(14, intToRoman(1994) === 'MCMXCIV');
    console.log(15, intToRoman(58) === 'LVIII');
};

getOutput();