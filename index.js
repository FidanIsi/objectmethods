var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 
};

// exercise-1
// for (const key in student) {
//   console.log(key);
// }


// exercise-2
// console.log(student);
// delete student.rollno;
// console.log(student);


//exercise-3
// const objWithSum = {
//   a: 10,
//   b: 10
// };

// let sum = objWithSum.a + objWithSum.b;
// const newObjWithSum = {sum}
// Object.assign(newObjWithSum, objWithSum)
// console.log(newObjWithSum);


//exercise-4
const objWithRes = {
  n: 13,
  info: "n is smaller than 20"
};

const newObjWithRes = {}

if (objWithRes.n > 10) {
  Object.assign(newObjWithRes, objWithRes)
  newObjWithRes.info = "n is bigger than 10"
}

console.log(newObjWithRes);