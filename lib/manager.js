class manager {
    
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
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
        return this.officeNumer
    }
  
    getRole() {
      return "manager";
    }
  
  }
  
  module.exports = manager;