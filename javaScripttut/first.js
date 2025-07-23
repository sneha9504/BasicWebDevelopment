// const greeting = function (){
//     console.log("hello everyone");
// }

// greeting();

// function addition(a,b){
//     return a+b;

// }
// let sum = addition(10,2);
// console.log(sum);

// let greets =()=>{console.log("good mornng")}

// greets();
// const robot = {
//     name: "Bender",

//     announceRegular: function () {
//         console.log("Hi, I am " + this.name);
//         setTimeout(function () { 
//             console.log("Regular: Still " + this.name);
//         }, 100);
//     },

//     announceArrow: function () {
//         console.log("Hello, I am " + this.name);
//         setTimeout(() => {
//             console.log("Arrow: Still " + this.name);
//         }, 100);
//     }
// };
// robot.announceRegular();
// robot.announceArrow();

// let arr = [];

// arr.push(10);
// arr.push(20);

// console.log(arr.length);
// console.log(arr);

// arr.splice(1,1,99);
// console.log(arr);


// const students = ["Alice", "Bob", "Charlie"];
// for (let i = 0; i < students.length; i++) {
// console.log(`Student at index ${i}: ${students[i]}`);
// }
// for (const student of students) {
// console.log(student);
// }

// students.forEach(function(student, index) {
// console.log(`${student} is at position ${index}`);
// });

// students.forEach((student) => console.log(student));


// const headChefCookbook = {
//     makeFancyOmelette: function () {
//         console.log("Making a super fancy omelette! 🍳");
//     },
//     greetCustomer: function () {
//         console.log("Welcome to our restaurant!");
//     }
// };

// const traineeJoe = {
//     name: "Joe",
//     makeSandwich: function () {
//         console.log(this.name + " is making a delicious sandwich! 🥪");
//     }
// };
// traineeJoe.makeSandwich();

// const janeTheTrainee = Object.create(headChefCookbook);
// janeTheTrainee.name = "Jane"; // Jane has her own name
// janeTheTrainee.makeFancyOmelette(); // Output: Making a super fancy omelette!

// janeTheTrainee.greetCustomer(); // Output: Welcome to our restaurant!
// // Also from the cookbook!
// // What if Jane also knows how to make something specific?
// janeTheTrainee.makeAwesomeSmoothie = function () {
//     console.log(this.name + " is blending an awesome smoothie! 🥤");
// };
// janeTheTrainee.makeAwesomeSmoothie();


// console.log("First: I'm making a sandwich."); // 1st
// setTimeout(() => {
//     console.log("Third: Sandwich is ready! 🥪"); // 3rd

// }, 2000); 
// console.log("Second: I'm washing the dishes while I wait."); // 2nd

// async function getRandomQuote() {
//     try {
//         const response = await
//             fetch('https://jsonplaceholder.typicode.com/todos/1');

//         if (!response.ok) {
//             throw new Error(`HTTP error! status:${response.status}`);
//         }
//         const data = await response.json();
//         console.log(`Quote: "${data.content}" -${data.author}`);
//     } catch (error) {
//         console.error("Could not fetch the quote:", error);
//     }
// }
// getRandomQuot
// console.log([...'hello'].length);

// Promise.resolve(5).then(x=>x*2)
// const sum = (array) => {
//     let total = 0
//     for (const arr of array) {
//         total +=arr;
//     }
//     return total;
// }

// let addition = sum([1, 2, 3, 4, 5]);

// console.log(addition);



