/*

Task_5

Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
Иначе говоря, умножает x на себя n раз и возвращает результат.

Используйте Arrow Function синтаксис.

*/

const exponentiationNumber = (x,n) => {
    const result = Math.pow(x, n);
    console.log (result);
};

exponentiationNumber(8,6)