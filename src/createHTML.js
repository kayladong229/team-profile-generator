// Creates manager card
const createManager = (manager) => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
        <h4>${manager.getName()}</h4>
        <p><i class="fas fa-lightbulb-on fa-lg"></i> ${manager.getRole()}</p>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>
    `;
}
// Creates engineer card
const createEngineer = (engineer) => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header bg-secondary text-white">
        <h4>${engineer.getName()}</h4>
        <p><i class="fas fa-briefcase fa-lg"></i> ${engineer.getRole()}</p>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
    `;
}
// Creates intern card
const createIntern = (intern) => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header bg-warning">
        <h4>${intern.getName()}</h4>
        <p><i class="fas fa-backpack fa-lg"></i> ${intern.getRole()}</p>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</a></li>
        </ul>
    </div>
</div>
    `;
}

createHTML = (data) => {

    let cardArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = createManager(employee);
            cardArray.push(managerCard);
        } else if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);
            cardArray.push(engineerCard);
        } else if (role === 'Intern') {
            const internCard = createIntern(employee);
            cardArray.push(internCard);
        }
    }
    // Join strings
    const cards = cardArray.join('');

    const createTeam = createTeamPage(cards);
    return createTeam;
}

// Function to create HTML page
const createTeamPage = (cards) => {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Information</title>
        <!-- Link to Bootstrap -->
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
         <!-- Link to Font Awesome -->
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <!-- Link to external font -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet">
        <!-- Link to local css file -->
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1 class="bg-info text-white text-center display-4">Our Team</h1>
        </header>
        <main>
            <div class="container d-flex justify-content-around">
                <!-- Employee cards go here -->
                ${cards}
            </div>
        </main>
    </body>
</html>
    `;
}
// Export to index.js
module.exports = createHTML;