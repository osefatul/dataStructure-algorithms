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



console.log(sum([1,2,3,4]))
console.log(summation(4))


//Math Algorithm
//FS

function FS (n) {
    let fib = [0,1]
    for(let i=2; i< n; i++ ){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

console.log(FS(7))
console.log(FS(15))

