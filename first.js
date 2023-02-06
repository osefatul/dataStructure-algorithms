function sum(n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++){
        sum += n[i]
    }
    return sum;
}

function summation(n) {
    return (n*(n+1)) / 2
}

// console.log(sum([1,2,3,4]))
// console.log(summation(4))




//Math Algorithm
//FS

function FS (n) {
    let fib = [0,1]
    for(let i=2; i< n; i++ ){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

// console.log(FS(7))
// console.log(FS(15))





//Factorial algorithm

function factorial (n) {
    let result = 1;
    for (let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}

console.log(factorial(4))//24
console.log(factorial(5))//120





//Prime Number algorithm

function prime (n) {
    if (n <2){
        return false;
    }

    for (let i = 2; i<n; i++){
        if(n%i===0) return false
    }
    return true
}

console.log(prime(4))
console.log(prime(5))


//second solution:
function prime (n) {
    if (n <2){
        return false;
    }

    for (let i = 2; i<=Math.sqrt(n); i++){
        if(n%i===0) return false
    }
    return true
}

console.log(prime(4))
console.log(prime(5))




//Power of two:

//Solution:
function power (n) {
    return Number.isInteger(Math.log2(n))
}

console.log(power(4))




const power2 = (n) =>{
    let number = n;
    while(number > 1){
        number = number/2;
    }
    return number ===1 ? true: false
}

console.log(power2(7))


