const Employee = require("./employee");

// TODO: Add super Javascript to replace copying employee.js
class Manager extends Employee {
    
    constructor(name, id, email, managersNumber) {
      super(name, id, email)
      this.managersNumber = managersNumber;
    }
  
    getmanagersNumber() {
        return this.managersNumber;
    }
  
    getRole() {
      return "manager";
    }
  
  }
  
  module.exports = Manager;