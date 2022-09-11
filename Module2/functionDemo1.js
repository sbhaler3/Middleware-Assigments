var age = 10;
var salary = 15.00;
/*
console.log('The variable type of age is ${type of age}');
console.log('The variable type of salary is ${type of salary}');

var name = 'John Smith';
console.log('The Varibale type of name is ${typeof name}'); 
*/


const displayGreetings = function(name, year){
    console.log('Happy new year ${year} ${name} ')

}

const displayGreetingswithEmoji = function(name, year){ 
    console.log(`😃 happy new year ${year} ${name}😃`)
}

const greet = function(name,year, func)

{
    func(name, age,year);

}
greet('sam', 2022, displayGreetingswithEmoji);





