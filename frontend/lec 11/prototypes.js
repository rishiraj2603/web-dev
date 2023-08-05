function Student(name, age ,rollNo){
    this.name = name;
    this.age = age;
    this.rollNo = rollNo;
}

Student.prototype.getMarks = function(){
    console.log(this.marks);
}
// Student.prototype(getMarks);

let s1 = new Student('udhs',21, 821);
console.log(s1);
console.log(getMarks);