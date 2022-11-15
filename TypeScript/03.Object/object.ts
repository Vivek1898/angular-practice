//Object - Object is a data type in TypeScript.
//  It is used to store the collection
//   of key-value pairs. It is a reference data type. It is used to store the data in the form of key-value pairs. It is a reference data type. It is used to store the data in the form of key-value pairs.

// 1. Object Declaration
// 2. Object Initialization
// 3. Object Accessing
// 4. Object Methods
// 5. Object Iteration
// 6. Object Destructuring

// 1. Object Declaration
// Object declaration is done using the object keyword.
// let obj1 = new Object();
// let obj2 = {};

// 2. Object Initialization
// Object initialization is done using the key-value pairs. let obj1 = {

// object for students

let student1 = {
    name: "John",
    age: 30,
    course: "Angular"
};

let student2 = {
    name: "Mary",
    age: 25,
    course: "React"
};

// Intreface for student

interface Student {
    name: string;
    age: number;
    course: string;
}

let student3: Student = {
    name: "John",
    age: 30,
    course: "Angular"
};

let student4: Student = {
    name: "Mary",
    age: 25,
    course: "React"

};

// 3. Object Accessing
// Object accessing is done using the dot(.) notation.



console.log(`Name: ${student3.name}`);
console.log(`Age: ${student3.age}`);
console.log(`Course: ${student3.course}`);


// Nested employee interface



interface Employee {
    name: string;
    age: number;
    address: {
        city: string;
        state: string;
    }
}

let emp1: Employee = {
    name: "John",
    age: 30,
    address: {
        city: "Bangalore",

        state: "Karnataka"
    }
};









