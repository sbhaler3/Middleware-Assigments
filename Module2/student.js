var students = [];

var student = {
    name: 'Jophn Smith',
    birthYear: 2002,
    course : 'IFT 234',
    grade: 90,
    active : true,
    age : function calculate(){
        if(this.active){
        return 2022 - this.birthYear;

    }}

}

var student2 = {
    name: 'Dighe',
    birthYear: 1996,
    course : 'IFT 345',
    grade: 100,
    active : false,
    age : function(){
        if(this.active){
        return 2022 - this.birthYear;
        
    }else{return 0;
}}

}

students.push(student);
students.push(student2);
students.forEach((item)=> console.log(item.age()));


//console.log(student['name']);
//console.log(studnet.name);
//console.log(student2.age());
//console.log(student.age());



