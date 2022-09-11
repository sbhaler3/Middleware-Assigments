
/*function greetTheStudent(studentName){
    return 'Hello there ${studentName}';
} */

/*const greetTheStudent = function(studentName){
    return 'Hello there ${studentName}';
} */

const  greatTheStudent = studentName => 'Hello There ${studentName}';

const fullName = function (firstName, middleName, lastName){
    return '${lastName}, ${middleName}, ${firstName}';
}
const titleName = fullName('Mary', 'R', 'Jane');
console.log(titleName);

