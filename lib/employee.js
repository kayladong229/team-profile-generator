class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Return name from input
    getName() {
        return this.name;
    }
    // Return ID from input
    getId() {
        return this.id;
    }
    // Return email address fron input
    getEmail() {
        return this.email;
    }
    // Return employee type
    getRole () {
        return "Employee";
    }
}
// To be exported
module.exports = Employee;