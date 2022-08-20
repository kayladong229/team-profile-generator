// Import employee
const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // Return school intern is attending
    getSchool() {
        return this.school;
    }
    // Override employee type
    getRole() {
        return "Intern";
    }
}

// To be exported
module.exports = Intern;