// let numberArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numberArrays.forEach((number) => {
//   console.log(number);
// });

// const student = {
//   id: 12345,
//   name: "Alice",
//   age: 20,
// };
// for (let key in student) {
//   console.log(`${key}: ${student[key]}`);
// }
// console.log("student.name:", student.name);
// console.log("student['age']:", student["age"]);

// let number = 12;
// let name = "my number is ";
// let isEvent = false;
// if (number % 2 === 0) {
//   isEvent = true;
// }
// console.log(name + number);
// console.log("isEvent:", isEvent);
// sayHello();

// function sayHello(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
//   console.log("Hello, World!");
// }

// sayHello(5);
// sayHello(10);

//Write max function
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log("max(10, 20):", max(10, 20));
console.log("max(-5, -2):", max(-5, -2));
console.log("max(0, 0):", max(0, 0));
