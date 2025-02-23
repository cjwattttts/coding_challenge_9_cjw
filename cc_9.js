//TASK 1
class Employee { // creating employee class
    constructor(name, id, department, salary) {
        this.name =name; // sets employee name
        this.id= id; // sets employee ID #
        this.department = department; // sets employee department
        this.salary = salary; // sets empoloyee's monthly salary
    }

    getDetails() { // returns employee details
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    calculateAnnualSalary() { // calculates the annual salary
        return this.salary * 12;
    }
}

// Test cases 
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); 
// Expected output: 60000

//TASK 2 
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); // calls parent consutructor
        this.teamSize = teamSize; // sets the team size 
    }

    getDetails() { // includes teamSize in getDetails
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    calculateBonus() { // calculates 10 percent bonus of salary
        return this.calculateAnnualSalary() * 0.1;
    }
}

// Test cases
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); 
// Expected output: 9600

//TASK 3
class Company {
    constructor(name) {
        this.name = name; // sets company name
        this.employees = []; // stores employees
    }

    addEmployee(employee) { // adds an employee
        this.employee.push(employee);
    }

    listEmployees() { // lists all current employees
        this.employees.forEach(emp => console.log(emp.getDetails()));
    }
}

// Test cases 
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"