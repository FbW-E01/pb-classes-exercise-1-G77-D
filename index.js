class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // Complete the code!
    this.fullName = function () {
      console.log(`${this.firstname} ${this.lastname}`);
    };
    this.email = function () {
      console.log(
        `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`
      );
    };
  }
}

emp1 = new Employee("John", "Smith");
emp1.fullName();
emp1.email();

emp2 = new Employee("Mary", "Sue");
emp2.fullName();
emp2.email();

emp3 = new Employee("Antony", "Walker");
emp3.fullName();
emp3.email();
