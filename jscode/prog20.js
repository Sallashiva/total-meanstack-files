// 1 JavaScript program to swap two variables
// var a = prompt('Enter the first variable: ');
// var b = prompt('Enter the second variable: ');

// //create a temporary variable
// var temp;

// //swap var   iables
// temp = a;
// a = b;
// b = temp;
 
// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);

// program 2 to check if the number is even or odd
// take input from the user
// var number = prompt("Enter a number: ");

// //check if the number is even
// if(number % 2 == 0) {
//     console.log("The number is even.");
// }

// // if the number is odd
// else {
//     console.log("The number is odd.");
// }

// program 3 to find the largest among three numbers

// take input from the user
// var num1 = parseFloat(prompt("Enter first number: "));
// var num2 = parseFloat(prompt("Enter second number: "));
// var num3 = parseFloat(prompt("Enter third number: "));
// var largest;

// // check the condition
// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }

// // display the result
// console.log("The largest number is " + largest);

// program 4 to check if a number is prime or not

// take input from the user
// var number = prompt("Enter a positive number: ");
// var isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (var i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }
// program 5 to print prime numbers between the two numbers

// take input from the user
// var lowerNumber = prompt('Enter lower number: ');
// var higherNumber = prompt('Enter higher number: ');

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// // looping from lowerNumber to higherNumber
// for (var i = lowerNumber; i <= higherNumber; i++) {
//     var flag = 0;

//     // looping through 2 to user input number
//     for (var j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }
// program  6 to find the factorial of a number

// take input from the user
// var number = prompt('Enter a positive integer: ');

// // checking if number is negative
// if (number < 0) {
//     console.log('Error! Factorial for negative number does not exist.');
// }

// // if number is 0
// else if (number === 0) {
//     console.log(`The factorial of ${number} is 1.`);
// }

// // if number is positive
// else {
//     var fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     console.log(`The factorial of ${number} is ${fact}.`);
// }

// program  7 to generate a multiplication table

// take input from the user
// var number = prompt('Enter an integer: ');

// //creating a multiplication table
// for(var i = 1; i <= 10; i++) {

//     // multiply i with number
//     var result = i * number;

//     // display the result
//     console.log(`${number} * ${i} = ${result}`);
// }
// program 8 to generate fibonacci series up to n terms

// take input from the user
// var number = prompt('Enter the number of terms: ');
// var n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (var i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

// program 9 to find the factors of an integer

// take input
// var num = prompt('Enter a positive number: ');

// console.log(`The factors of ${num} is:`);

// // looping through 1 to num
// for(var i = 1; i <= num; i++) {

//     // check if number is a factor
//     if(num % i == 0) {
//         console.log(i);
//     }
// }

// program  10 to find the ASCII value of a character

// take input from the user
// var string = prompt('Enter a character: ');

// // convert into ASCII value
// var result = string.charCodeAt  (0);

// console.log(`The ASCII value is: ${result}`);

// given program 11 value find out whether is char or number or special char
// var char=prompt( 'enter the value');

// if((char=='a')||(char=='e')||(char=='i')||(char=='o')||(char=='u') || (char=='A')||(char=='E')||(char=='I')||(char=='O')||(char=='U')){
//     console.log('print vovel');
// }
// else if((char>='a')&&(char<='z') || (char>='A')&&(char<='Z')) {
// console.log('given consonate');
// }
// else if((char>=0 && char<=9)){
//     console.log('print given value is number');
// }
// else{
//     console.log('print given is special charcetr');
// }
// program   12 given char is vowel or consonat
// var valu;
// valu=prompt('enter the single charecter');
// switch(valu){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'O':
//     case 'U':{
//         console.log('print given is vovel');
//         break;
//     }
//     default :{
//         console.log('print given is consonet');
//     }
// }

// program 13 to check if the string is palindrome or not

// function checkPalindrome(str) {

//     // convert string to an array
//     var arrayValues = string.split('');

//     // reverse the array values
//     var reverseArrayValues = arrayValues.reverse();

//     // convert array to string
//     var reverseString = reverseArrayValues.join('');

//     if(string == reverseString) {
//         console.log('It is a palindrome');
//     }
//     else {
//         console.log('It is not a palindrome');
//     }
// }

// //take input
// var string = prompt('Enter a string: ');

// checkPalindrome(string);

// program 14 to sort words in alphabetical order

// take input
// var string = prompt('Enter a sentence: ');

// // converting to an array
// var words = string.split(' ');

// // sort the array elements
// words.sort();

// // display the sorted words
// console.log('The sorted words are:');

// for (var element of words) {
//   console.log(element);
// }

// program to 15  merge and remove duplicate value from an array

// function getUniqueAfterMerge(arr1, arr2){

//   // merge two arrays
//   var arr = arr1.concat(arr2);
//   var uniqueArr = [];

//   // loop through array
//   for(var i of arr) {
//       if(uniqueArr.indexOf(i) === -1) {
//           uniqueArr.push(i);
//       }
//   }
//   console.log(uniqueArr);
// }

// var array1 = [1,2,3,5];
// var array2 = [2, 3, 5]

// // calling the function
// // passing array argument
// getUniqueAfterMerge(array1, array2);

// program 16 to perform intersection between two arrays using Set
// intersection contains the elements of array1 that are also in array2

// function performIntersection(arr1, arr2) {

//     // converting into Set
//     var setA = new Set(arr1);
//     var setB = new Set(arr2);

//     var intersectionResult = [];

//     for (var i of setB) {
    
//         if (setA.has(i)) {
//             intersectionResult.push(i);
//         }
        
//     }
    
//  console.log(intersectionResult)

// }
  
// var array1 = [1, 2, 3, 5, 9];
// var array2 = [1, 3, 5, 8]; 

//  performIntersection(array1, array2);


// function countDown(n) {

    
//     console.log(n);

  
//     var n1 = n - 1;

  
//     if (n1 > 0) {
//         countDown(n1);  
//     }
// }

// countDown(4);
