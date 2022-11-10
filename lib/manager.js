// TODO: Add super Javascript to replace copying employee.js
class manager {
    
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber;
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }

    getOfficeNumer() {
        return this.officeNumer;
    }
  
    getRole() {
      return "manager";
    }
  
  }
  
  module.exports = manager;