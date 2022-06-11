function convertToRoman(num) {

    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const dict = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    }

    let output = '';
    let i = 0;

    while (num > 0) {
        const subtract = numbers[i];
        if (subtract > num) {
            i++;
        }
        else {
            num -= subtract;
            output += dict[subtract]
        }
    }
    return output;

}

convertToRoman(36);