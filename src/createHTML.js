// Creates manager card
const createManager = (manager) => {
    return `
    `;
}
// Creates engineer card
const createEngineer = (engineer) => {
    return `
    `;
}
// Creates intern card
const createIntern = (intern) => {
    return `
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
    ${cards}
    `;
}

module.exports = createHTML;