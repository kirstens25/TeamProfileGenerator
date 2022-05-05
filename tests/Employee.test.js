// heading

const Employee = require("../Lib/Employee");
// sub

// content

describe('Testing Employee Class', () => {

    describe('Employee class contains requested attribute methods', () => {

        const defaultId = 12;
        const defaultName = 'Sarah';
        const defaultEmail = 'sarah@email.com';


        // check whether we can create object from class
        test('whether we can create object from class', () => {
            const employee = new Employee(defaultName, defaultId, defaultEmail);

            expect(employee).toBeInstanceOf(Employee);
            expect(employee).toBeInstanceOf(Object);
        });

        test('should fail if it didn not pass in 3 arguments', () => {
            expect(() => new Employee()).toThrow(Error),
                expect(() => new Employee(defaultId)).toThrow(Error),
                expect(() => new Employee(defaultId, defaultName)).toThrow(Error),

                expect(new Employee(defaultName, defaultId, defaultName)).toBeInstanceOf(Employee);
        });


        // resulting in expected outcome
        test('if employee has entered name', () => {
            const testName = "Sarah";
            const employee = new Employee(testName);
            expect(employee.name).toBe(testName);
        });

        test('if employee has entered id', () => {
            const testId = "3221";
            const employee = new Employee("name", testId);
            expect(employee.id).toBe(testId);

        });

        test('if employee has entered email', () => {
            const testEmail = "sarah@email.com";
            const employee = new Employee("name", 21, testEmail);
            expect(employee.email).toBe(testEmail);

        });

        test('whether getName() returns inputted name', () => {
            const testName = "Sarah";
            const employee = new Employee(testName);
            expect(employee.getName()).toBe(testName);

        },
        )
    })})