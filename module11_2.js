/*

Task_2

Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит, простое число или нет.
Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

*/

function getNumber(number) {
    let result ='Prime number!'

    if (number === 0 || number === 1) {
        result = "Enter a number greater than one!"
    }
    else if (number > 1000) {
        result = 'Enter a number no more than 1000!'
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                result = 'Composite number!'
            }
        }
    }
    return result
}

console.log(getNumber(102))