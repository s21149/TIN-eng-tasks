function Student(firstName, lastName, id, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades; 

    this.firstAndLastName = function () {
        console.log("First name : " + this.firstName);
        console.log("Last name : " + this.lastName);
    }

    this.averageGrade = function () {
        let sum = 0;
        let avg = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        avg = sum / this.grades.length;
        return avg;
    }

}

Student.prototype.courseList = ["ALG", "NAI", "PPJ", "ZPR", "BYT"];

function createStudent (firstName, lastName, id) {
    return new Student(firstName, lastName, id);
}

let maciek = createStudent("maciek", "kowalski", 12345);

maciek.firstAndLastName();
console.log(maciek.courseList);