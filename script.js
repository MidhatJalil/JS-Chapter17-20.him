//Question #01
// let multiarr = [[1,2],[3,4],[5,6]];

// Quesyion #02
// let matrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];



// for(let i=0;i<matrix.length; i++){
//     document.write(`${matrix[i]}<br>`);
// }


// Question #03
// let num = 10;
// for (let i=1; i<=num; i++){
//     document.write(`${i} <br>`);
// }

//  Question #04
//  let userNum = +prompt('Please Enter the Number for Multiplication');
//  let tableLength = +prompt('Please Enter the Length');

//  document.write(`<h3> Multplication Number of ${userNum} and the length is ${tableLength} </h3><br><br>`)
//  for (let i=1; i<=tableLength; i++){
//     document.write(`${userNum} x ${i} = ${userNum*i} <br>`);
//  }

// Question #05

// var fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Strawberry']

// for (var i=0; i<fruits.length; i++){
//     document.write(`${fruits[i]} <br><br> `);
// }

// for (var i=0; i<fruits.length; i++){
//     document.write(`Element at index ${i} is ${fruits[i]} <br> <br>`);
// }

// // Question #06 (a) Counting
// let num1 = 15;
// document.write(`<h4>Counting:</h4>`);
// for (let i=1; i<=num1; i++){
//     document.write(`${i} , `);
// }

// // Question #06 (b) Reverse Counting
// document.write(`<h4>Reverse Counting:</h4>`);
// for (let i=10; i>0; i--){
//     document.write(`${i} , `);
// }

// // // Question #06 (c) Even Series
// let num2 = 20;
// document.write(`<h4>Even:</h4>`);
//  for (let i=0; i<=num2; i++){
//     if( i % 2 == 0){

//     document.write(`${i}, `);
// }
// }

// // // Question #06 (d) Odd Series

// let num3 = 20;
// document.write(`<h4>Odd:</h4>`);
// for (let i=0; i<=num3; i++){
//     if( i % 2 != 0){

//     document.write(`${i}, `);
// }
// }

// // Question #06 (e) Series
//  let num4 = 20;

//  document.write(`<h4>Series:</h4>`);
//  for (let i=1; i<=num4; i++){
//         if( i % 2 == 0){
    
//          document.write(`${i}k, `);
//      }
//      }


// Ques # 07

// let items = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// let search = prompt(`Welcome to Yummyy scrummyy. What do you want to order sir/ma'am?`);
// let foundIt = false;


// for(let i=0; i<=items.length; i++){
//   if ( items[i] === search){
//     foundIt = true;
//     A = items.indexOf(`${search}`);

// }
// }
// if(foundIt){
//  document.write(`${search} is available at index ${A}`);
    
// }




// else {
//     document.write(`We are sorry. ${search} is not available in our bakery.`);
   
//    }

//   Ques # 08

let Numbers = [24, 53, 78, 91, 12];
let largestNum = Numbers[0];

for(let i=0; i<Numbers.length; i++){
    if(Numbers[i] > largestNum){
        largestNum = Numbers[i];
    }
}
        document.write(`Largest Number is: ${largestNum}<br>`);
    
    
// Ques # 09

let Numbers2= [24, 53, 78, 91, 12];
let smallestNum = Numbers2[0];

for(let i=Numbers2.length; i>0 ; i--){
    if(Numbers[i] < smallestNum){
        smallestNum = Numbers2[i];
    }
}
        document.write(`Smallest Number is: ${smallestNum}`);
    
 
        
    
   

