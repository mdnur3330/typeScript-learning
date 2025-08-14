"use strict";
const geeAdd = (v) => v + v;
const result = geeAdd(5);
console.log(result);
// interface Car {
//     brand: string;
//     mode: string;
//     year: string;
//     isElctric: boolean;
// }
// const getCarValue = (obj:Car, key: keyof Car) =>{
//     console.log(obj[key]);
// }
// const car:Car = {
//     brand: "tesla",
//     mode: "4323-ireu",
//     year: "22023",
//     isElctric: false
// }
// getCarValue(car, "isElctric")
// const getInfo = <T>(info: T): T =>{
//     return info
// }
// const result = getInfo<number>(4565)
// console.log(result);
// interface IAdmin<T,Tk> {
//     name: string;
//     roll: string;
//     access: boolean;
//     outher: T;
//     selary: Tk;
// }
// const admin: IAdmin<{
//         respons: boolean;
//         mov: boolean;
//     },number> = {
//     name: "ali akbar",
//     roll: "buyer",
//     access: true,
//     outher: {
//         respons: false,
//         mov: true,
//     },
//     selary: 4564,
// }
// type GenarekTy<T> = Array<T>
// const arr1: GenarekTy<number> = [3,4,5,6,7]
// const arr2: GenarekTy<string> = ["nur", "alom"]
// const arr3: GenarekTy<boolean> = [true,false]
// interface ArrNumber {
//     [index: number] : string
// }
// const arr: ArrNumber = ["1","1","1","1",]
// let naem : any; 
// naem= ("oewrti" as string).indexOf ("w")
// naem = 4564 as number
// console.log(naem);
// const add = (): never=>{
//     throw new Error()
// }
// const tree:string = "";
// const nalis = tree??"tree"
// console.log(nalis);
// let rahim: unknown;
// rahim = "rehim";
// rahim = 45,
// rahim = undefined
// const user: null  = null
// interface User {
//     name: string;
//     age: number;
//     location?: string;
// }
// const Peple1: User = {
//     name: "Samim",
//     age: 354,
//     location: "banglades"
// }
// const Peple2 : User = {
//     name: "Mahide",
//     age: 423,
// }
// type Shup22 = {
//     name: string;
// }
// type Shup11 = {
//     price: number;
// }
// type Saban = Shup11 & Shup22;
// const product: Saban = {
//     name: "merel",
//     price: 4354,
// }
// type Footboll = string | number | boolean;
// const footboll: Footboll ="ahmad salah"
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
