// Declare constants
const inquirer = require('inquirer');
const fs = require('fs');
const createHTML = require('./src/createHTML')
// Import employee classes
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager');

// Array to house team members
const team = [];

const addManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the name of your team's manager?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is your manager's ID number?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is your manager's email address?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is your manager's office number?",
                name: 'officeNumber',
            }
        ])
        .then(managerAnswers => {
            const { name, id, email, officeNumber } = managerAnswers;
            const manager = new Manager(name, id, email, officeNumber);

            team.push(manager);
            console.log(manager);
        })
};

const addEmployee = () => {
    console.log(`\nPlease enter the information of all team employees.\n`)
    return inquirer
       .prompt([
            {
                type: 'list',
                message: "What is this employee's role?",
                name: 'role',
                choices: ["Engineer", "Intern"]
            },
            {
                type: 'input',
                message: "What is this employee's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is this employee's ID number?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is this employee's email address?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is this engineer's Github username?",
                name: 'github'
            },
            {
                type: 'input',
                message: "What school is this intern currently attending?",
                name: 'school'
            },
            {
                type: 'confirm',
                message: "Would you like to add more team members?",
                name: 'addNewEmployee',
                default: false
            }
        ])
        .then(employeeAnswers => {
            const { name, id, email, role, github, school, addNewEmployee } = employeeAnswers;
            let employee;

            if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
                console.log(employee);
            } else if (role === 'Intern') {
                employee = new Intern(name, id, email, school);
                console.log(employee);
            } 

        team.push(employee);

        if (addNewEmployee) {
            return addEmployee(team);
        } else {
            return team;
        }
    })
};



// Function to write team html file
writeToFile = (data) => {
    fs.writeFile('./dist/sample.html', data, (err) => {
        err 
        // Logs error if there is an error
        ? console.error(err) 
        // Returns success message if page is created
        : console.log('Thank you for your time. Your new html page has been created successfully.');
    });
}

// Function to initialize app
init = () => {
    addManager()
        .then(addEmployee)
        .then(team => {
            return createHTML(team);
        })
        .then(sampleHtml => {
            return writeToFile(sampleHtml);
        })
        .catch(err => console.log(err))
}

// Function call to initialize app
init();