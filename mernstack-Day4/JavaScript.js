// Day 4 - JavaScript Basics

console.log("Welcome to JavaScript Day 4!");

// Variables
let name = "SECE Student";
const age = 20;
var course = "MERN Stack";

// Functions
function greetStudent(studentName) {
    return `Hello ${studentName}, welcome to ${course}!`;
}

// Arrays
const subjects = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"];

// Objects
const student = {
    name: "John Doe",
    age: 21,
    course: "Computer Science",
    greet: function() {
        return `Hi, I'm ${this.name}`;
    }
};

// Loops
console.log("Subjects in MERN Stack:");
for(let i = 0; i < subjects.length; i++) {
    console.log(`${i + 1}. ${subjects[i]}`);
}

// Arrow Functions
const calculateSum = (a, b) => a + b;

console.log(greetStudent(name));
console.log(student.greet());
console.log(`Sum of 5 and 3 is: ${calculateSum(5, 3)}`);