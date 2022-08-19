class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Return name from input
    getName() {
        return `Name: ${this.name}`;
    }
    // Return ID from input
    getId() {
        return `ID: ${this.id}`;
    }
    // Return email address fron input
    getEmail() {
        return `Email: ${this.email}`;
    }
    // Return employee type
    getRole () {
        return "Employee";
    }
}
// To be exported
module.exports = Employee;