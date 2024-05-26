//1. Miles-to-Kilometers Converter (Operators):
// let miles=130;
// let kms=miles*1.60934;
// console.log(`The distance of ${miles} kms  is equal to ${kms} miles` );
// 2.Evaluating a number game:
// let guessNum=Math.floor(Math.random()*10);
// console.log(`Your guess number is ${guessNum}`);
// let enteredNum=5;
// console.log(`your entered number Is ${enteredNum}`);
// if(guessNum>enteredNum){
//     console.log("Your Guess is High");
// }
// else if(guessNum<enteredNum){
//     console.log("your Guess is low");
// }
// else{
//     console.log("your Guess is correct");
// }
//3.Friend checker game:
// let yourfriends: string[] = [
//   "Mama",
//   "Waheed",
//   "Salu",
//   "babu",
//   "battery",
//   "half",
//   "Sheikh",
//   "samu",
// ];
// let enteredName: string = "samu";
// switch (enteredName) {
//   case "samu":
//     console.log("samu is your friend");
//     break;
//   case "Mama":
//     console.log(`Mama is your friend`);
//     break;
//   case "salu":
//     console.log("Salu is your friend");
//     break;
//   case "waheed":
//     console.log("waheed is your friend");
//     break;
//   default:
//     console.log("This is not your friend");
// }
// //4.Functions
// let num1=2;
// let num2=3;
// function calculateNum1(num1:number,num2:number){
//     let add=num1+num2;
//     return add;
// }
// function calculateNum2(num1:number,num2:number){
//     let multiply=num1*num2;
//     return multiply;
// }
// //1st call function
// let result1=calculateNum1(num1,num2)
// console.log(result1); 
// let result2=calculateNum2(num1,num2)
// console.log(result2);
// let num3=4;
// let num4=6;
// //2nd call function
// let result3=calculateNum1(num3,num4)
// console.log(result3);
// let result4=calculateNum2(num3,num4)
// console.log(result4);
// 5.Calculator project using function
// let num1 = 5;
// let num2 = 5;
// let Operator = "+";
// function Calculator(num1, num2, Operator) {
//     if (Operator === "+") {
//         return num1 + num2;
//     }
//     else if (Operator === "-") {
//         return num1 - num2;
//     }
//     else {
//         return "invalid operation"
//     }
// }
// console.log(`The result of ${num1}${Operator}${num2} is: ${Calculator(num1, num1, Operator)}`);
// Operator = "-"
// console.log(`The result of ${num1}${Operator}${num2} is: ${Calculator(num1, num2, Operator)}`);
// 6.Anonymous functions:
var anonymousfun = function (numa, numb) {
    return numa * numb;
};
var result = anonymousfun(2, 2);
console.log(result);
function normalfun(numa, numb) {
    return numa * numb;
}
var result2 = normalfun(2, 2);
console.log("Normal function:".concat(result2));
