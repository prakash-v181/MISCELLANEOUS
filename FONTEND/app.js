// const stu1 = {
//     name: "Prakash",
//     age: 25,
//     marks: 95,
//     getMarks: function () {
//         return this.marks;
//     },
// };

// const stu2 = {
//     name: "vijay",
//     age: 25,
//     marks: 96,
//     getMarks: function (){
//         return this.marks;
//     },
// };

// const stu3 = {
//     name: "pralhad",
//     age: 26,
//     marks: 97,
//     getMarks: function () {
//         return this.marks;
//     },
// };

function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`I am ${this.name} and I am ${this.age} years old`);
        },
        };
        return person;
}
    
    