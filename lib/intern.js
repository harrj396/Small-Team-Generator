// TODO: Add super Javascript to replace copying employee.js
const Employee = require("./Employee");

class Intern extends Employee {
    
    
   constructor(name, id, email) {
      super(name, id, email)
      this.school = school;
    }
  
    getSchool() {
        return this.school;
    }
  
    getRole() {
      return "intern";
    }
  
  }
  
  module.exports = Intern;