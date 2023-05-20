/*

Task_1

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и знаки, например null и так далее.
На этот раз оформите решение в виде функции: постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис. 

*/



let randomArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 0, null, null, null, "Somebody once told me", "the world is gonna roll me"];

function getArrayEvenOdd() {
    let odd = 0;
    let even = 0;
    let zero = 0;
    let un = 0;
    
    for(let i=0; i < randomArr.length; i++) {
        if(typeof randomArr[i] === 'number'&& !isNaN(randomArr[i])) {
            if((randomArr[i] % 2) === 0) {
                even ++;
            }
            else if((randomArr[i] % 2) !== 0) {
                odd ++;
            }
            else if(randomArr[i] === 0) {
                zero ++;
            }
        }
        else {
            un ++;
        }
    }

    console.log(odd,'Нечетное');
    console.log(even,'Четное');
    console.log(zero,'Ноль');
    console.log(un,'Неизветно');
}

getArrayEvenOdd();