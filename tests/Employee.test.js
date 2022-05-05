// heading

const Employee = require("../Lib/Employee");
// sub

// content

describe('Testing Employee Class', () => {

    describe('Employee class contains requested attribute methods', () => {

        // check whether we can create object from class
        test('whether we can create object from class', () => {
            const employee = new Employee(52, 'steve', 'great@email.com')

            expect(employee).toBeInstanceOf(Employee);
            expect(employee).toBeInstanceOf(Object);

        });
        // resulting in expected outcome
        test('if employee has entered name', () => {
            expect(true).toBe(false);

        });

        test('Employee class constructor to accept 3 args (id, name, email)', () => {
            const employee = new Employee(52, 'steve', 'great@email.com')

        });
            test('if employee has entered email', () => {
                // set up environment
                // define truth

                // run the code

                // compare the result
                expect(true).toBe(false);

            });

            test('if employee has entered id', () => {
                expect(true).toBe(false);

            });

            test('whether getName() returns inputted name', () => {


            });
            test('whether getId() returns inputted id', () => {


            });

            test('whether getEmail() returns inputted email', () => {


            });

            // resulting in unexpected outcome
            test('whether test breaks if user does not enter any input', () => {
                expect(true).toBe(false);

            });

            test('should only allow a valid email address', () => {
                expect(true).toBe(false);

            });
        });
    });