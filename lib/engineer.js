// Import employee
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id);
        this.github = github;
    }

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