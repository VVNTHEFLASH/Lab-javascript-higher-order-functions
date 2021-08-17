// ### Function #1: Array Slice

var foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
var modifiedFood = foods.slice(1,4);
console.log("Array Slice ",modifiedFood);

// Expected output: [burger, fingerShips, donuts]

//### Function #2: Array Splice

var foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
var modifiedFood = foods.splice(2,0,"noodles","ice-cream");
console.log("Array Splice ",foods);

//Expected output: [pizza, burger, noodles, icecream, fingerShips, donuts, springRoll];

//### Function #3: Filter

var numberArray = [12,324,213,4,2,3,45,4234];
//Prime Number IN Given Array 
var primeNumber = numberArray.filter(function(isPrime) {
    for(let i=2;i <= Math.sqrt(isPrime);i++) {
        if(isPrime % i === 0) {
            return false;
        }
    }
    return true;
})
console.log("Prime Number ",primeNumber);
//Even Number in given array
var evenNumber = numberArray.filter(function(isEven) {
    return isEven % 2 == 0;
})
console.log("Even Number",evenNumber);

//### Function #4: Reject
var numberArray = [12,324,213,4,2,3,45,4234];
var noPrime = numberArray.filter(function(nonPrime) {
    for(let i=2;i <= Math.sqrt(nonPrime);i++) {
        if(nonPrime % i === 0) {
            return true;
        }
    }
    return false;
})
console.log("Reject Prime Number ",noPrime);

//### Function #5: Lambda
var numberArray = [12,324,213,4,2,3,45,4234];
function isEven()
{
    numberArray%2==0
}
var even = numberArray.filter((numberArray) => numberArray % 2 == 0);
console.log("Lambda Even Number",even);

//### Function #6: Map
var myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers() {
    var sqrt = sqrt*sqrt;
}
var sqrt = myArray.map((sqrt) => sqrt * sqrt);
console.log("Map Square Root",sqrt);

//### Function #7: Reduce
var myArray = [2, 3, 5, 10];

var multiply = myArray.reduce(function(a,b) {
    return a*b;
})
console.log("Reduce Multiply",multiply);