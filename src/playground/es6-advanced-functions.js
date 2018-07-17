const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
        console.log(greet);
    }

    return second;
}

const fun = first();
console.log(fun);
fun();

//Closures
//A function ran.The function is executed .its never going to execute agaian.But its going to rememeber the refeerences to those variables
//so child scope has access to parent scope

//Curying
const multiply = (a, b) => a*b;
const curryMul = (a) => (b) => a*b;
console.log(multiply(2,3));
console.log(curryMul(4)(3));

const mulBy5 = curryMul(5);
console.log(mulBy5(7));


//compose
const compose  = (f,g) => (a) => f(g(a));

const sum = (a) => a+1;

console.log(compose(sum, sum)(5));

//Avoisding side effects and having functional purity
// Eg
// var a = 1;
// function sum() {
//     a =2;
// } 

const compose1 = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
const rest = compose1(add1, add5)(10);
console.log(rest);
