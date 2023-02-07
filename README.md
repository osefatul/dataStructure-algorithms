## Algorithms

## Evaluate Performance of Algorithms
we evaluate the performance of an algorithm **in terms of its input size**
### Time Complexity:
a mount of time taken by the algorithm to run, as a function of input size.

### Space Complexity
a mount of memory taken by the algorithm to run, as a function of input size


## How to represent complexity of the algorithm
**Asymptotic notations:** Mathematical tools to represent time and space complexity.

- Big-O Notation (O-notation): Worst case scenario.
- Omega-notation (Ω-notation): Best case scenario.
- Theta-notation (Θ-notation): Average case scenario.


## Big-O Notation (O-notation)
The number of steps that an algorithm takes is the primary factor in determining its efficiency.
However, we can’t simply label one algorithm a “22-step algorithm” and
another a “400-step algorithm.” This is because the number of steps that an
algorithm takes cannot be pinned down to a single number. Let’s take linear
search, for example. The number of steps that linear search takes varies, as it
takes as many steps as there are cells in the array. If the array contains twenty-two elements, linear search takes twenty-two steps. If the array has 400
elements, however, linear search takes 400 steps.
The more accurate way to quantify efficiency of linear search is to say that
linear search takes N steps for N elements in the array. Of course, that’s a
pretty wordy way of expressing this concept.
In order to help ease communication regarding time complexity, computer
scientists have borrowed a concept from the world of mathematics to describe
a concise and consistent language around the efficiency of data structures and
algorithms. Known as Big O Notation, this formalized expression around
these concepts allows us to easily categorize the efficiency of a given
algorithm and convey it to others.
- It is expressed in terms of the input.
- It focuses on the bigger picture without getting caught up in the minute details.

### Big-O Time complexity:
Count the number of times a statement executes based on the input size.

```javascript
function sum(n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++){
        sum += n[i]
    }
    return sum;
}

console.log(sum([1,2,3,4])) //10
```

Our program has **three main statement** to execute:
- statement 1:  let sum = 0;
- statement 2:  sum += n[i];
- statement 3:  return sum;

`For loop` is jus the repetition of `sum += n[i]`

Given the input n=4, let's count the number of times each statement executes. 
![timeComplexity](./assets/timeComplexity-sum.jpg)

Total count is `n+2` and **our time complexity is dependent on input size**

So the worst case time complexity is O(n)- Linear: which means as the size of input increases the time complexity (steps to execute also increases.

- Most of the time if you see a loop in out program, we can safely say that the time complexity is linear.




### O(1) - Constant

The time complexity of below program is O(1) which only needs one step to execute, doesn't matter the input size. the time complexity is constant always.

```javascript
function summation(n) {
    return (n * (n+1))/2
}
```


### O(n^2) - Quadratic
Most of the time when we have two nested loops, the time complexity is O(n^2).

```javascript
for (let i = 0; i< n.length; i++) {
    for(let j = 1; j<=i ; j++){
        //code
    }
}
```

### O(n^3) - Cubic
If there are three loops, the time complexity is cubic O(n^3);

```javascript
for (let i = 1; i< n; i++) {
    for(let j = 1; j<=i ; j++){
        for(let k = j; k <= j; k++){
            //some code
        }
    }
}
```

### O(log n) - Logarithmic
If input size reduces by half every iteration, then the time complexity is logarithmic.


## Space Complexity
same as time complexity.
- constant O(1): Always same memory it takes.
- Linear O(n): space complexity grows as the input size increases.
- Logarithmic O(log n): the space grows but not as the same rate as input.

![Big O](./assets/BigO.jpg)

## Few points to note
- Multiple algorithm exist for same problem and there is no one right solution. Different algorithms work well under different constraints.
- The same algorithm with the same programming language can be implemented in different ways.
- When writing programs at work, don't lose sight of the big picture. rather than writing clever code, write code that is simple to read and maintain.


## Objects - Big-O
an object is a collection of key and value pairs.
- Property Insert: O(1)
- Property Remove: O(1)
- Accessing Value: O(1) 
- Searching value: O(n)- worst case scenario, we are gonna go through all properties. 
- Object.keys(): O(n) - worst case scenario, we are gonna go through all properties. 
- Object.values(): O(n) - worst case scenario, we are gonna go through all properties. 
- Object.entities(): O(n) - worst case scenario, we are gonna go through all properties.


## Array - Big-O
an Array is on ordered collection of values.

- Insert/remove at end: O(1);
- Insert/remove at beginning: O(n): This is because the index of remaining elements in the array has to be reset.
- Accessing: O(1): fetching an element in the beginning is not different than an element in 1000th index.
- Searching: O(n): who knows the element can be the last in the array.
### Methods:
- push/pop: O(1)
- shift/unshift/concat/slice/splice: O(n): because the index of remaining elements in the array has to be reset.

- forEach/map/filter/reduce: O(n)


## Math Algorithms:
## Fibonacci Sequence
Give a number n, find the first n elements of the fibonacci sequence.

In mathematics, Fibonacci sequences is a sequence  in which each number is the sum of the two preceding ones.
The first two numbers in the sequence are 0 and 1.

For example, 
- Fibonacci(2) = [0, 1]
- Fibonacci(3) = [0, 1, 1]
- Fibonacci(7) = [0, 1, 1, 2, 3, 5, 8 ]

```javascript
function FS (n) {
    let fib = [0,1]
    for(let i=2; i< n; i++ ){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

console.log(FS(7))
```
Big-O = O(n)


## Factorial of a number
Give an integer n, find the factorial of that integer.

```javascript
function factorial (n) {
    let result = 1;
    for (let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(4))//24
console.log(factorial(5))//120

```

Big-O = O(n)


## Prime Number:
Give an integer n, find if the number is Prime or not.

A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

5 = true: 1*5 or 5*1
4 = false: 1*4 or 2*2 or 1*5


```javascript
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
```

Big-O = O(n)

#### Optimized Primality Test
Integers larger than the square roo do not need to be checked because, whenever n= a*b , one of the two factors a and b is less than or equal to the square root of n.
n = 24, a=4, b=6
- The square root of 24 is 4.89: 4 is less than 4.89. So, `a` is less than the square root of n.

n=35 -> a=5, b=7
- The square root of 35 is 5.91: 5 is less than 5.91. So, `a` is less than the square root of n.

```javascript
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
```

The number of N increases the number time complexity also increases but the same proportion as in the first solution.

As we only go through Sqrt(n) times in the loop: **Big-0 = O(sqrt(n))**


## Power of Two
Give a positive integer n, find if the number is a power of 2 or not.
1= 2^0;
2= 2^1;
5= false

```javascript
//solution1
function power (n) {
    return Number.isInteger(Math.log2(n))
}
console.log(power(4))
//Big-0 = O(1)



//Solution2
const power2 = (n) =>{
    let number = n;
    while(number > 1){
        number = number/2;
    }
    return number ===1 ? true: false
}
console.log(power(5))
//Big-0 = 0(log n)
```




## Recursion
![Recursion](./assets/recursion.jpg)


### Recursive Fibonacci Sequence
give a number n, find the nth element of the fibonacci sequence.

the first two elements of the fibonacci sequence are 0 and 1. (0,1,1,2,3,5,8)

- recursiveFibonacci(0) = 0
- recursiveFibonacci(1) = 1
- recursiveFibonacci(6) = 8


```javascript
function recursiveFibSec(n){
    if (n<2) return n;
    return recursiveFibSec(n-1) + recursiveFibSec(n-2)
}
console.log(recursiveFibSec(6)) //8
```

#### Time complexity for recursive Fibonacci Sequence:

Big-O = O(2^n)

![recursiveFibonacci](./assets/timeComplexityForRecursiveFib.jpg)



### Recursive Factorial of a number
Give an integer n, find the factorial of that integer.

```javascript
function recursiveFactorial (n){
    if (n === 0) return 1;
    return  n * recursiveFactorial(n-1);
}

console.log(recursiveFactorial(5))
```

Big-O = O(n)


## Search Algorithms
