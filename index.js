"use strict";
let arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9];
arr1.push(...arr2);
const [, , a, , , ...q] = arr1;
console.log(a, q);
// type Add = (v1: number, v2: number) => number;
// const add:Add = (v1, v2)=>{
//  return v1 + v2
// }
// const result = add(3,4)
// console.log(result);
// type User = {
//     name: string;
//     age: number;
//     location: string;
//     id: string;
// }
// const student:User = {
//     name: "nur alom",
//     age: 32,
//     location: "babuganj barisal",
//     id: "453-ieboetlreadLeir"
// }
// console.log(student);
