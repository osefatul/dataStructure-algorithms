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






//Recursive Fibonacci
function fibSequence (n) {
    if(n <2 ) return n
    console.count("req")
    return fibSequence(n-1) + fibSequence(n-2)
}

console.log(fibSequence(4))//3
console.log(fibSequence(5))//5
console.log(fibSequence(7))//13





//Recursive Factorial
function recursiveFactorial (n){
    if (n === 0) return 1;
    return  n * recursiveFactorial(n-1);
}
console.log(recursiveFactorial(5))





//Linear Search
function linearSearch (n, t){
    if(n.includes(t)) {
        return n.findIndex(el => el === t)
    }
    return -1
}
console.log(linearSearch([-5,2,10,4,6],10)) //2
console.log(linearSearch([-5,2,10,4,6],6)) //4
console.log(linearSearch([-5,2,10,4,6],20)) // -1



//BinarySearch:
function binarySearch (n,t){
    let leftIndex = 0;
    let rightIndex = n.length - 1;
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if(t === n[middleIndex]) {
            return middleIndex;
        }
        if(t < n[middleIndex]) {
            rightIndex = middleIndex -1;
        }else{
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}
console.log(binarySearch([2,4,7,9,15,18], 20))



//RecursiveBinarySearch:
function binarySearch (n,t){
    return search (n, t, 0, n.length - 1)
}

function search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex) return -1;

    let middleIndex = Math.floor((leftIndex + rightIndex)/2);
    if(target === arr[middleIndex]) return middleIndex

    if(target< arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex -1 )
    } else{
        return search(arr, target, middleIndex+1, rightIndex)
    }
}
console.log(binarySearch([2,4,7,9,15,18], 10))




//Bubble sort:
function bubbleSort (arr){
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length-1; i++) {
            if(arr[i]> arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+i]= temp;
                swapped = true
            }
        }
    } while (swapped);
}
const arr = [5,4,2,-2]
bubbleSort(arr)
console.log(arr)



//InsertionSort:
function insertionSort (arr){
    for (let i = 1; i< arr.length; i++){
        let position = i;
        let tempValue = arr [position]
        while (position > 0 && arr[position -1] > tempValue){
            arr[position] = arr[position -1];
            position = position -1;
        }
        arr[position] = tempValue;
    }
}
const arr2 = [5,4,2,-2]
insertionSort(arr2)
console.log(arr2)


//QuickSort:
function quickSort (arr) {
    if(arr.length<2) return arr

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i=0; i<arr.length-1; i++){
        arr[i] < pivot?
        left.push(arr[i]):
        right.push(arr[i])
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

let arr23 = [5,4,2,-2]
console.log(quickSort(arr23))



//MergeSort:

function mergeSort (arr) {
    if(arr.length < 2) return arr

    const mid = Math.floor(arr.length / 2)
    const leftArray = arr.slice(0,mid);
    const rightArray = arr.slice(mid);
    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge (leftArray, rightArray) {
    const sortedArray = [];
    while(leftArray.length && rightArray.length) {
        if(leftArray[0] <= rightArray[0]){
            sortedArray.push(leftArray())
        }else{
            sortedArray.push(rightArray.shift())
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray]
}
let arr5 = [5,4,2,-2]
console.log(mergeSort(arr5))





//CartesianProduct
function cartesianProduct (a, b) {
    const result =[]
    for (i in a ) {
        for (j in b ) {
            result.push(a[i]*b[j])
        }
    }
    return result
}
console.log(cartesianProduct([2,3,4], [2,3]))





//ClimbingStairs.
function climbingStairsCase (n){
    const noOfWays = [1,2]; 

    //for more than two stairs
    for(let i=2; i<=n; i++){
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2];
    }
    return noOfWays[n-1]
}

console.log(climbingStairsCase(2))
console.log(climbingStairsCase(3))
console.log(climbingStairsCase(5))




//Tower of hanoi:

function towerOfHanoi(n, fromRod, toRod, usingRod){
    if(n===1){
        console.log(`Move desk 1 from ${fromRod} to ${toRod}`);
        return;
    }

    towerOfHanoi(n-1, fromRod, usingRod, toRod);
    console.log(`Move desk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n-1, usingRod, toRod, fromRod)
}
towerOfHanoi(4, 'A', 'C', 'B')