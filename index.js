// var student = {
//   name : "David Rayy",
//   sclass : "VI",
//   rollno : 12 
// };

//exercise-1
// for (const [key] of Object.entries(student)) {
//   console.log(`${key}`);
// }

//exercise-2
// console.log(student);

// delete student.rollno

// for (let key in student) {
//   console.log(`${key}: ${student[key]}`);
// }

//exercise-3
// const objWithSum = {
//   a: 10,
//   b: 10
// };

// const sum = objWithSum.a + objWithSum.b

// const newObjWithSum = {
//   ...objWithSum,
//   sum: sum
// };

// console.log(newObjWithSum);

//exercise-4

// const objWithRes = {
//   n: 13,
//   info: "n is smaller than 20"
// };

// if (objWithRes.n>10) {
//   const newObjWithRes = {
//     ...objWithRes,
//     info: "n is bigger than 10"
//   };
//   console.log(newObjWithRes);
// } else{
//   console.log(objWithRes);
// }