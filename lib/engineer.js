// Import employee
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // Return Github username
    getGithub() {
        return this.github;
    }
    // Override employee type
    getRole() {
        return "Engineer";
    }
    
}
// To be exported
module.exports = Engineer;