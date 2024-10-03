//Task 1
const engineering = new Department("Engineering");
const marketing = new Department("Marketing");
const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);
engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);
console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);

//Task 2
class Department {
    constructor(name, Employee) {
        this.name = engineering;
        this.Employee = James;
    }
} 
engineering.addEmployee(James);
function getDepartmentSalary() {
    const totalSalary = sales + Employee + Department;
}
return totalSalary;

//Task 3
class Manager {
    constructor(name, Employee, Bonus){
    this.name = engineering;
    this.Employee = James;
    this.Bonus = Bonus;
}
}

//Task 4
function calculateTotalSalaryWithBonus() {
    const bonusSalary = bonus + sales;
    return bonusSalary;
}
console.log(bonusSalary);

