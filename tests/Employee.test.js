// get 'Employee' class from separate folder
const Employee = require("../Lib/Employee");

// Test Employee Class
describe('Testing Employee Class', () => {

    describe('Employee class contains requested attribute methods', () => {

        const defaultId = 250;
        const defaultName = 'Sarah';
        const defaultEmail = 'sarah@email.com';


        // check whether we can create object from class
        test('whether we can create object from class', () => {
            const employee = new Employee(defaultName, defaultId, defaultEmail);

            expect(employee).toBeInstanceOf(Employee);
            expect(employee).toBeInstanceOf(Object);
        });

        // test with expected outcome
        test('if employee has entered name', () => {
            const testName = "Sarah";
            const employee = new Employee(testName);
            expect(employee.name).toBe(testName);
        });

        test('if employee has entered id', () => {
            const testId = "250";
            const employee = new Employee("name", testId);
            expect(employee.id).toBe(testId);

        });

        test('if employee has entered email', () => {
            const testEmail = "sarah@email.com";
            const employee = new Employee("name", 250, testEmail);
            expect(employee.email).toBe(testEmail);

        });

        test('whether getName() returns inputted name', () => {
            const testName = "Sarah";
            const employee = new Employee(testName);
            expect(employee.getName()).toBe(testName);
        });

        test('whether getId() returns inputted id', () => {
            const testId = 250;
            const employee = new Employee("name", testId);
            expect(employee.getId()).toBe(testId);
        });

        test('whether getEmail) returns inputted email', () => {
            const testEmail = "sarah@email.com";
            const employee = new Employee("name", 250, testEmail);
            expect(employee.getEmail()).toBe(testEmail);
        });
        
        test('getrole() should display string of employee', () => {
            const role = "Employee";
            const employee = new Employee("Sarah", 250, "sarah@email.com");
            expect(employee.getRole()).toBe(role);
        });
    });
});