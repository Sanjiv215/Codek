// function calculate(a, b, operation) {
//     return operation(a, b);
// }

// function add(x, y) {
//     return x + y;
// }

// function sub(x, y) {
//     return x - y;
// }
// function mul(x, y) {
//     return x * y;
// }
// function div(x, y) {
//     return x / y;
// }

// console.log(calculate(5, 3, add)); 
// console.log(calculate(5, 3, sub));


// function evenOrOdd(num) {
//     if (num % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// console.log(evenOrOdd(4)); 
// console.log(evenOrOdd(7));

// function checkNumber(num) {
//     return logic(num);
// }

// function logic(n) {
//     return n % 2 === 0 ? "Even" : "Odd";
// }

// console.log(checkNumber(4, logic));

// write a hof a function that print table of every number

function table(num){
    return logic(num);
}

function logic(n){
    for(let i=1; i<=10; i++){
        console.log(n*i)

    }
}
console.log(table(4, logic))
