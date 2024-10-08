function Student(name, gender, age) {

  this.name=name;
  this.gender=gender;
  this.age=age;
  this.marks=[];
}

Student.prototype.setSubject = function (subjectName) {

  this.subject=subjectName;
}

Student.prototype.addMarks = function (...marks) {

  if (!this.marks){
    return;
  }
  this.marks.push(...marks);
}

Student.prototype.getAverage = function () {

    if (!this.marks||this.marks.length==0){
        return 0;
    }
    let result = this.marks.reduce((sum,mark)=>sum+mark,0)/this.marks.length;

    return result;
}

Student.prototype.exclude = function (reason) {

  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
