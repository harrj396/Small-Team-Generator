// TODO: Add super Javascript to replace copying employee.js

const Employee = require("./employee");

class Engineer extends Employee {
    
    constructor(name, id, email) {
      super(name, id, email)
      this.github = gitHub;
    }

    getGitHub() {
        return this.gitHub;
    }
  
    getRole() {
      return "engineer";
    }
  
  }
  
  module.exports = Engineer;