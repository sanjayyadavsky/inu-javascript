// for (initialization, conditon, increment/decrement){
// code
// }

// let i;
// for (let i = 1; i < 5; i++) {
//   console.log(`${i}`);
// }

// for (let i = 1; i < 5; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }


// normal for loop 
// let i;
// for (let i=1; i <5; i++){
//     console.log(i)
// }


// now to run inner loop

// let x;
// for (let x = 1; x <=5; x++){
//     let y;
//     for (let y=1; y < 5; y++ ){
//         console.log(`${x} * ${y} = ${x*y}`)
//     }
// }

// let con = ["India", "Sweden", "Norway", "Iceland"];
// let newcountry =[]
// for (let i =1; i < con.length; i++){
//     // console.log(con[i]);
//     newcountry.push(con[i].toUpperCase());
// }
// console.log(newcountry)

// to make square of arry number

// let i ;
// for(let i=0; i<=7; i++){
//    let square = Math.pow(i,2)
//    console.log(square)
// }


//while (condition) {
    // code block to be executed
    // i++ increment or decrement
//}

//   let i=0;
//   while(i <= 5){
//     console.log(i);
//     i++;
//   }

// given to do TODO: while (i % 2 == 0)

// let i = 0;
// while (i % 2 == 0){
//     console.log(i);
//     i++
// }

// let i =0;
// do {
//     console.log(i);
//     i++
// }while(i <= 5);


// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum); // Output: 15


// let num = [1,2,3,4,5];
// for (let munber of num){
//     console.log(munber);
// }

// let con = ["India", "Sweden", "Norway", "Iceland"];
// for (let cont of con){
//     console.log(cont)
// }

// let con = ["India", "Sweden", "Norway", "Iceland"];
// for(let cont of con){
//      console.log(cont.toUpperCase())
// }



// let con = ["India", "Sweden", "Norway", "Iceland"];
// const newArr = [];
// for (let cont of con){
   
//     newArr.push(cont.toUpperCase());
// }
// console.log(newArr);




// const sports = ["soccer", "baseball"];
// const total = sports.push("football", "swimming");

// console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
// // console.log(total); // 4


//break and continue

// for (let i =1; i<=5; i++){
//     if (i==3){
//         continue
//     }
//     console.log(i)
// }

// for (let i =1; i<=5; i++){
//     if (i==3){
//         break
//     }
//     console.log(i)
// }



// function 
// function without parameter

// function squ(){
//     let x =7;
//     let y = 8;
//     let z = x*y;
// console.log(z)
// }
// squ() this is how to call function

// function with parameter
// function squ(x,y){
//     console.log(x*y)
// }
// squ(20,40);


// function toprintFullName(firstName, lastName){
//     let fullName = firstName + " " + lastName;
//     return fullName
// }
// console.log(toprintFullName("Sanjay", "Yadav"))


// function  sumOfArray(Arr){
//   let sum = 0;
//   for (let i =0; i < Arr.length; i++){
//     sum =+ Arr[i];
//   }
//    return sum
// }
// console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8]))
// let x = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(x.length)




// const SumofAll = (...args) => {
//   let sum = 0;
//   for (let element of args) {
//     sum = sum + element;
//   }
//   return sum;
// };

// console.log(SumofAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));


// const sumofAll = (...args) => {
//     let sum =0;
//     for ( let elemnt of args){
//         sum = sum + elemnt;
//     }
//     return sum;
// };
// console.log(sumofAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));


