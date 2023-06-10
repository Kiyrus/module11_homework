/*

Task_4

Напишите функцию, которая принимает два числа.
Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа.
Используйте setInterval.

*/

function printNumber(from, to) {
    let start = from;
    let timerId = setInterval(() => {
        console.log(start);
        if (start === to) {
            clearInterval(timerId);
        }
        start++;
    }, 1000);
}
printNumber(5, 15);
