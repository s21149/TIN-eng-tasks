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

let michal = new Student("Michal", "Tomys", 21149, [2,2,2,2]);
michal.firstAndLastName();
console.log(michal.averageGrade());