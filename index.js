const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const htmlGeneration = require(`./src/work-template.js`);

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/work-template.js');

const teamMembers = [];

// start inquierer prompt, starts with asking for managers name, then engineer name, then intern name.  Then generate the HTML page with that info.  
// push each new object into an array, then add array to HTML.

// function for creating manager - inquirer questions
  // take those questions and create a new Manager with the user provided answers
  // push that new Manager to the team members array

  // follow the same pattern for each type of employee
  // build a function for them that uses inquirer


// STRUCTURING IT

// start with manager function, since every team needs a manager
// at the end of manager function, call a createTeam function

// this function would simply ask the user which type of employee they would like to add, based on their choice, run the correesponding function

// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js