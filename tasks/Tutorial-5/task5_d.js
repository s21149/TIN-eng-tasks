function Student(firstName, lastName, id, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + " " + lastName;
    this.id = id;
    this.grades = grades; 
    this.average = (grades.reduce((a,b) => a + b, 0)) / grades.length;

    Object.defineProperties(Student.prototype, {
        average : {
            get: function () {return this._average;},
            set: function (val) {this._average = val;}
        },

        fullName : {
            get: function () {return this._fullName},
            set: function (val) {this._fullName = val}
        }
    });

    this.firstAndLastName = function () {
        console.log("First name : " + this.firstName);
        console.log("Last name : " + this.lastName);
    }

}

let michal = new Student("Michal", "Tomys", 21149, [2,2,2,2]);
michal.firstAndLastName();
console.log(michal.average);
console.log(michal.fullName);
michal.fullName = "abc";
console.log(michal.fullName);