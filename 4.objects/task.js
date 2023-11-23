function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = new Array();
  }

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(this?.marks){
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if(this?.marks && this.marks.length > 0){
        let summMarks = 0;
        for (let i = 0; i < this.marks.length; i++) {
            summMarks = summMarks + this.marks[i]
        }
        return summMarks/this.marks.length;
    } else return 0;
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
}