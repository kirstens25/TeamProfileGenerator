class Employee {

    constructor(name, id, email) {
        this.id = id;
        this.email = email;
        this.name = name;
         if(!id || !email || !name) {
            throw Error('Cannot complete without id, name or email')
        }
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