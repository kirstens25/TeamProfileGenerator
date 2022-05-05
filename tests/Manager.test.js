const Manager = require('../Lib/Manager');
const Employee = require('../Lib/Employee');

// Test Manager Class
describe('Testing Manager Class', () => {
    
test('whether manager has added office number', () => {
const testOfficeNumber = 1989;
const manager = new Manager('name', 250, 'sarah@email.com', testOfficeNumber);
expect(manager.officeNumber).toBe(testOfficeNumber);
})

test('whether getRole() returns string of manager', () => {
    const role = 'Manager'
    const manager = new Manager('name', 250, 'sarah@email.com', 1000);
    expect(manager.getRole()).toBe(role);
})

test('whether getOfficeNumber() returns office number', () => {
    const testOfficeNumber = 100;
    const manager = new Manager('name', 250, 'sarah@email.com', testOfficeNumber);
    expect(manager.getOfficeNumber()).toBe(testOfficeNumber);
});


});