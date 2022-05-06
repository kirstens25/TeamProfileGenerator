// node requirements
const inquirer = require ('inquirer');
const fs = require ('fs');
const createColleagues = require('./src/setup-page.js');

// library
const Engineer = require('./lib/Engineer');
const Intern = require ('./lib/Intern');
const Manager = require('./lib/Manager');

// answer array for questions
const staffDataQuestion = [];

// Ask questions for new staff member
const questions = async () => {
    const answers = await inquirer
    .prompt([
    {
        type: "input",
        message: "What is your full name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your Staff ID Number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type: "list",
        message: "What is your role?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"],
    },
    ])

// Differentiate questions for different roles
// if manager selected, prompt additional questions
if (answers.role === "Manager"){
    const managerAns = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is your office number?",
            name: "office number",
        },
    ])

    const newManager = new Manager (
        answers.name,
        answers.id,
        answers.email,
        managerAns.officeNumber
    );

    staffDataQuestion.push(newManager);
}

// if intern selected, prompt additional questions
if (answers.role === "Intern"){
    const internAns = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is your school name?",
            name: "school name",
        },
    ])

    const newIntern = new Intern (
        answers.name,
        answers.id,
        answers.email,
        internAns.school
    );

    staffDataQuestion.push(newIntern);

    if (answers.role === "Engineer"){
        const engineerAns = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your github username?",
                name: "github",
            },
        ])
    
        const newEngineer = new Engineer (
            answers.name,
            answers.id,
            answers.email,
            githubAns.github
        );
    
        staffDataQuestion.push(newEngineer);
    }
};
}

async function promptQuestions() {
    await questions()

    const addStaffAns = await inquirer
    .prompt([
        {
            name: 'addStaff',
            type: 'list',
            choices: ['add new staff member', 'finish & create team'],
            message: 'what would you like to do now?'
        }
    ])

    if (addStaffAns.addStaff === 'Add new member'){
        return promptQuestions()
    }
    return createTeam();
}

promptQuestions();

function createTeam () {
    console.log("new staff", staffDataQuestion)
    fs.writeFileSync(
        "./dist/index.html",
        createColleagues(staffDataQuestion),
        "utf-8"
    );
}


