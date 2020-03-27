//Old 1
// function sum(x,y)
// {
//     return x+y;
// }

//Old 1.1
// const sum = function(x,y)
// {
//     return x+y;
// }

//ES6 1
const sum = (x,y) => x+y;

const xSqySq = (x,y) => {
    const add = sum(x,y);
    const diff = x-y;
    const result = add*diff;
    return result;
}

console.log(sum(4,3));
console.log(xSqySq(5,3));