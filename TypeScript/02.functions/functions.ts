
//functions
function add(num1:number, num2:number):number{
    return num1 + num2;
}

console.log(`Sum of 5 and 10 is ${add(5, 10)}`);

//function with optional parameters
function add1(num1:number, num2?:number):number{
    if(num2){
        return num1 + num2;
    }
    else{
        return num1;
    }
}

console.log(`Sum of 5 and 10 is ${add1(5, 10)}`);


//function with default parameters
function add2(num1:number, num2:number = 10):number{
    return num1 + num2;
}

console.log(`Sum of 5 and 10 is ${add2(5)}`);

//function with rest parameters

function add3(...nums:number[]):number{
    let sum:number = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
    }
    return sum;
}

console.log(`Sum of 5, 10, 15 and 20 is ${add3(5, 10, 15, 20)}`);

//function with anonymous function
let add4 = function(num1:number, num2:number):number{
    return num1 + num2;
}

console.log(`Sum of 5 and 10 is ${add4(5, 10)}`);

//function with arrow function

let add5 = (num1:number, num2:number):number => {
    return num1 + num2;
}

console.log(`Sum of 5 and 10 is ${add5(5, 10)}`);

//function with optional parameters and arrow function

let add6 = (num1:number, num2?:number):number => {
    if(num2){
        return num1 + num2;
    }
    else{
        return num1;
    }
}

console.log(`Sum of 5 and 10 is ${add6(5, 10)}`);

//function with default parameters and arrow function

let add7 = (num1:number, num2:number = 10):number => {
    return num1 + num2;
}

console.log(`Sum of 5 and 10 is ${add7(5)}`);

//function with rest parameters and arrow function

let add8 = (...nums:number[]):number => {

    let sum:number = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
    }
    return sum;
}


console.log(`Sum of 5, 10, 15 and 20 is ${add8(5, 10, 15, 20)}`);

//function with anonymous function and arrow function

let add9 = (num1:number, num2:number):number => {

    return num1 + num2;
}


console.log(`Sum of 5 and 10 is ${add9(5, 10)}`);

