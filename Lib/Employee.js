class Employee {

constructor(id, email, name){
    this.id = id;
    this.email = email;
    this.name = name;
}
getEmail(){
    return this.email;
}

getName(){
    return this.name;
}

getId(){
    return this.id;
}

getRole(){
    return 'Employee';
}
}

module.exports = Employee;