// TODO: Add super Javascript to replace copying employee.js

const Employee = require("./employee");

class Engineer extends Employee {
    
    constructor(name, id, email, engineerGitHub) {
      super(name, id, email)
      this.engineerGithub = engineerGitHub;
    }

    getGitHub() {
        return this.engineerGitHub;
    }
  
    getRole() {
      return "engineer";
    }
  
  }
  
  module.exports = Engineer;