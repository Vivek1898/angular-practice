// add two numbers
let num1:number = 5;
let num2:number = 10;

console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);

// add two strings
let str1:string = "Hello";
let str2:string = "World";

console.log(`${str1} ${str2}`);

// add two booleans
let bool1:boolean = true;
let bool2:boolean = false;

console.log(`${bool1} and ${bool2} is ${bool1 && bool2}`);

// add two arrays
let arr1:number[] = [1, 2, 3];
let arr2:number[] = [4, 5, 6];

console.log(`${arr1} and ${arr2} is ${arr1.concat(arr2)}`);

// add two objects
let obj1 = { name: "John", age: 30 };
let obj2 = { name: "Mary", age: 25 };

console.log(`${obj1} and ${obj2} is ${obj1.name} and ${obj2.name}`);

// Increment a number
let num3:number = 5;
console.log(`Increment of ${num3} is ${++num3}`);

// Decrement a number
let num4:number = 5;
console.log(`Decrement of ${num4} is ${--num4}`);

//conditional statements
let num5:number = 5;
let num6:number = 10;

if(num5 > num6){
    console.log(`${num5} is greater than ${num6}`);
}
else if(num5 < num6){
    console.log(`${num5} is less than ${num6}`);
}
else{
    console.log(`${num5} is equal to ${num6}`);
}

//switch case
let num7:number = 5;

switch(num7){
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;

    default:
        console.log("Invalid number");
        break;
}

//loops
//for loop
for(let i=0; i<5; i++){
    console.log(i);
}

//while loop
let i:number = 0;
while(i<5){
    console.log(i);
    i++;
}

//do while loop
let j:number = 0;
do{

    console.log(j);
    j++;
}
while(j<5);

//for in loop
let arr3:number[] = [1, 2, 3, 4, 5];
for(let k in arr3){
    console.log(k);
}

//for of loop
let arr4:number[] = [1, 2, 3, 4, 5];
for(let k of arr4){
    console.log(k);
}
