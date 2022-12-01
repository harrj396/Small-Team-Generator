// TODO: Add super Javascript to replace copying employee.js
const Employee = require("./Employee");

class Intern extends Employee {
    
    
   constructor(name, id, email, internSchool) {
      super(name, id, email)
      this.internSchool = internSchool;
    }
  
    getSchool() {
        return this.internSchool;
    }
  
    getRole() {
      return "intern";
    }
  
  }
  
  module.exports = Intern;