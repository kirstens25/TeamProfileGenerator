class Employee {

    constructor(name, id, email) {

        if(!id || !email || !name) {
            throw Error('Cannot complete without id, name or email')
        }
        this.id = id;
        this.email = email;
        this.name = name;
    }
    getEmail() {
        return this.email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;