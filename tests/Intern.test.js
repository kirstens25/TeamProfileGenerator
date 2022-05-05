const Employee = require('../Lib/Employee');
const Intern = require('../Lib/Intern');

// Test Intern Class
describe('Testing Intern Class', () => {
    
    test('whether engineer has added school name', () => {
    const testSchool = 'Sunnydale High School';
    const intern = new Intern('name', 250, 'sarah@email.com', testSchool);
    expect(intern.school).toBe(testSchool);
    })
    
    test('whether getRole() returns string of intern', () => {
        const role = 'Intern'
        const intern = new Intern('name', 250, 'sarah@email.com', 'Sunnydale High School');
        expect(intern.getRole()).toBe(role);
    })
    
    test('whether getSchool() returns school name', () => {
        const testGithub = 100;
        const engineer = new Engineer('name', 250, 'sarah@email.com', testGithub);
        expect(engineer.getGithub()).toBe(testGithub);
    });
    
    });
