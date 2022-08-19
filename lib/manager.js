// Import employee
const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // Override employee type
    getRole() {
        return 'Manager';
    }
}
// To be exported
module.exports = Manager;