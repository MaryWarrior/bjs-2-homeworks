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
        if(marks != ''){
            for (let i = 0; i < marks.length; i++) {
                    this.marks.push(marks[i]);
            }
        }
    }
}

Student.prototype.getAverage = function () {
    if(this?.marks){
        if(this.marks.length > 0){
            let countMarks = 0;
            let summMarks = 0;
            for (let i = 0; i < this.marks.length; i++) {
                summMarks = summMarks + this.marks[i]
                countMarks = countMarks + 1;
            }
            average = summMarks/countMarks;
            return average;
        } else return 0;
    } else return 0;
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
}