// problem: https://leetcode.com/problems/roman-to-integer/

const mapping = {};
mapping['I'] = 1;
mapping['V'] = 5;
mapping['X'] = 10;
mapping['L'] = 50;
mapping['C'] = 100;
mapping['D'] = 500;
mapping['M'] = 1000;

const romanToInt = input => {
    if(!input) return 0;
    
    let result = 0;

    let inputArr = input.split('');

    for(let counter=0; counter < inputArr.length; counter++) {
        let number = Number(mapping[inputArr[counter]]);
        let nextNumber = Number(mapping[inputArr[counter + 1]]);
        
        if(number && nextNumber && number < nextNumber) {
            result = result + (nextNumber - number);
            counter++;
        }
        else {            
            result = result + number;
        }
    }
    
    return Number(result);
};

const getOutput = () => {
    console.log(1, romanToInt('I') == 1);
    console.log(2, romanToInt('III') === 3);
    console.log(3, romanToInt('IV') === 4);
    console.log(4, romanToInt('V') === 5);
    console.log(5, romanToInt('VI') === 6);
    console.log(6, romanToInt('VIII') === 8);
    console.log(7, romanToInt('IX') === 9);
    console.log(8, romanToInt('X') === 10);
    console.log(9, romanToInt('XV') === 15);
    console.log(10, romanToInt('XVII') === 17);
    console.log(11, romanToInt('XIX') === 19);
    console.log(12, romanToInt('XX') === 20);
    console.log(13, romanToInt('XXXIII') === 33);
    console.log(14, romanToInt('MCMXCIV') === 1994);
    console.log(15, romanToInt('LVIII') === 58);
};

getOutput();