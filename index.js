const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/work-template.js');

const teamMembers = []

function buildmanager() {
inquirer
  .prompt([ {
    type:"input",
    name:"managersName",
    message:"What is your teams managers name?"
   },
   {
    type:"input",
    name:"managersId",
    message:"What is your teams managers ID?"
   },
   {
    type:"input",
    name:"managersNumber",
    message:"What is your teams managers office number?"
   },
   {
    type:"input",
    name:"managersEmail",
    message:"What is your teams managers Email?"
   }

  ])
  .then((answer) => {
    console.table(answer)
    // build a new manager with the class
    const manager = new Manager(
      answer.managersName,
      answer.managersId,
      answer.managersNumber,
      answer.managersEmail,
    )
    // add new manager to team
    teamMembers.push(manager)
    // calls function to build engineer
    buildengineer()
  })
  .catch((error) => {
    console.log(error)
  });
}

function buildengineer(){
  inquirer
  .prompt([ {
    type:"input",
    name:"engineerName",
    message:"What is your teams engineer's name?"
   },
   {
    type:"input",
    name:"engineerId",
    message:"What is your teams engineer's ID?"
   },
   {
    type:"input",
    name:"engineerGithub",
    message:"What is your teams engineer's GitHub username?"
   },
   {
    type:"input",
    name:"engineerEmail",
    message:"What is your teams engineer's Email?"
   }

  ])
  .then((answer) => {
    console.table(answer)
    // build a new manager with the class
    const engineer = new Engineer(
      answer.engineerName,
      answer.engineerId,
      answer.engineerGithub,
      answer.engineerEmail,
    )
    // add new engineer to team
    teamMembers.push(engineer)
    // calls function to build intern
    buildintern()
  })
  .catch((error) => {
    console.log(error)
  });
}

function buildintern(){
  inquirer
  .prompt([ {
    type:"input",
    name:"internName",
    message:"What is your teams intern's name?"
   },
   {
    type:"input",
    name:"internId",
    message:"What is your teams intern's ID?"
   },
   {
    type:"input",
    name:"internSchool",
    message:"What school is this intern from?"
   },
   {
    type:"input",
    name:"internEmail",
    message:"What is your teams intern's Email?"
   }

  ])
  .then((answer) => {
    console.table(answer)
    // build a new manager with the class
    const intern = new Intern(
      answer.internName,
      answer.internId,
      answer.internSchool,
      answer.internEmail,
    )
    // add new intern to team
    teamMembers.push(intern)
    // ends adding members
    close()
  })

  .catch((error) => {
    console.log(error)
  });
}

function close(){
  fs.mkdirSync(DIST_DIR);
  fs.writeFile(distPath, render(teamMembers), (err) =>
    err ? console.error(err) : console.log("created HTML page!"))
}

buildmanager();
// TODO: troubleshoot render(teamMembers) not loading properly


// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js