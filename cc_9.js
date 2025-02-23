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
