/* Fizz Buzz While Loop */

// var count = 1;
// var  result = [];
// while(count < 101){
//     if(count %3 === 0 && count %5===0){
//         result.push("FizzBuzz");
//         count++;
//     }
//     else if(count %3 === 0){
//         result.push("Fizz");
//         count++;
//     }
//     else if(count %5 === 0){
//         result.push("Buzz");
//         count++;
//     }
//     else{
//         result.push(count);
//         count++;
//     }
// }
// console.log(result);

/* Fizz Buzz For Loop */

// var result =[];
// for (i =1; i<101; i++){
//     if (i %3 === 0 && i%5 === 0){
//         result.push("FizzBuzz");
//     }
//     else if (i %3 === 0){
//         result.push("Fizz");
//     }
//     else if (i %5 === 0){
//         result.push("Buzz");
//     }
//     else{
//         result.push(i);
//     }
// }
// console.log(result);

/* Whos Cooking Lunch */

// var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// function whosPaying(names){
//     var num = Math.floor(Math.random() * (names.length));
//     // console.log(num);
//     return console.log(names[num] + " is going to buy lunch today!");
// }
// whosPaying(names);

/* 99 Bottles of Beer */

// function beer(n){
//     var count = 0
//     while(n >= 0){

//         if (n === 0){
//             console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " +count+" bottles of beer on the wall.")
//         }
//         else{
//             console.log(n+" bottles of beer on the wall, " +n+" bottles of beer.Take one down and pass it around, " +(n-1)+" bottles of beer on the wall.")
//         }
//         count++;
//         n--;

//     }
// }
// beer(22)

/* Fibonacchi Logic */

// function fibonacciGenerator (n) {
//     var fibSequence = [0, 1];
//     if (n === 0) {
//         return [];
//     }
//     if (n === 1) {
//         return [0];
//     }
//     for (var i = 2; i < n; i++) {
//         var nextNumber = fibSequence[i - 1] + fibSequence[i - 2];
//         fibSequence.push(nextNumber);
//     }

//     return console.log(fibSequence.slice(0, n));
// }

// fibonacciGenerator (2)


/*  */ 