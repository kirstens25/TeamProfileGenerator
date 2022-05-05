const Engineer = require ('../Lib/Engineer');
const Employee = require ('../Lib/Employee');

// Test Engineer Class
describe('Testing Engineer Class', () => {
    
    test('whether engineer has added github username', () => {
    const testGithub = 'sarah123';
    const engineer = new Engineer('name', 250, 'sarah@email.com', testGithub);
    expect(engineer.github).toBe(testGithub);
    })
    
    test('whether getRole() returns string of engineer', () => {
        const role = 'Engineer'
        const engineer = new Engineer('name', 250, 'sarah@email.com', 'sarah123');
        expect(engineer.getRole()).toBe(role);
    })
    
    test('whether getGithub() returns office number', () => {
        const testGithub = 100;
        const engineer = new Engineer('name', 250, 'sarah@email.com', testGithub);
        expect(engineer.getGithub()).toBe(testGithub);
    });
    
    });