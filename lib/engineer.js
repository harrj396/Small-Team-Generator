class engineer {
    
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = gitHub;
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

    getGitHub() {
        return this.gitHub;
    }
  
    getRole() {
      return "engineer";
    }
  
  }
  
  module.exports = engineer;