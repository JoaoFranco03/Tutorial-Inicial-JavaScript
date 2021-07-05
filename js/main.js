// Create Human Resources Employees
const HR_Employees = {
    id : 1,
    department_code : 1,
    name : "John Smith",
    age : 25,
    email : "john.smith@loremipsum.com",
    wage : 1570,
};

//Print all HR Employees
console.log('Human Resources Employees:',HR_Employees);

//Create and Print Departement Codes
const department_codes = [1,2,3];
console.log('Department Codes Before Change:', department_codes);

//Change and Print the new Departement Codes
department_codes[2] = 4; 
console.log('Department Codes After Change:', department_codes);

// Change John Smith E-mail
HR_Employees.email = "john.smith@enterprise.com"
console.log('John new email:', HR_Employees.email);

//Cycle
for (var i = 0; i < 10; i++) {
    console.log("i for:", i);
}
console.log("i global:", i);

//Sum of Example Wages
const sum  = (a, b) => a + b;
console.log('Sum of Example Wages (1200 + 1000):',sum(1200, 1000));

//Sum of John Smith Wage with Example Wage
const sum_withExample  = (a, b = 1000) => a + b;
console.log('Sum of John Smith Wage with Example Wage (1570 + 1000):',sum_withExample(HR_Employees.wage, 1000));

//Sum of John Smith Wage with Emily Stone Wage
const Design_Employees = {
    id : 1,
    department_code : 4,
    name : "Emily Stone",
    age : 22,
    email : "emily.stone@loremipsum.com",
    wage : 1800,
};
console.log('Sum of John Smith Wage with Emily Stone Wage (1570 + 1800):',sum(HR_Employees.wage, Design_Employees.wage));

//Print Name and Age of Employee / 1st Option
const user = {
    name : "Mariah John",
    age : 14,
};

const {name, age} = user

console.log("The name of the employee is", name, "and she is", age, "years old");

//Print Name and Age of Employee / 2nd Option

const {name: Name, age: Age} = user

console.log("Name", name);
console.log("Age", age);

//Print Departments

const departments_names = ["Human Resources", "Software Development", "Design"]

var department1 = departments_names[0];
var department2 = departments_names[1];
var department3 = departments_names[2];

console.log("Department 1 is the", department1, "Departement");
console.log("Department 2 is the", department2, "Departement");
console.log("Department 3 is the", department3, "Departement");

//Print Numbers Array

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [...numbers1, 6];

console.log("Numbers1:", numbers1);
console.log("Numbers2:", numbers2);

//John Smith Current and Previous Email 
const JohnSmith_Before = {
    ...HR_Employees,
    email : "john.smith@loremipsum.com",
};

console.log("John Smith Current Email:", HR_Employees);
console.log("John Smith Previous Email:", JohnSmith_Before);

//Highest Wage
const wages = [HR_Employees.wage, Design_Employees.wage];
const highest = Math.max(...wages);

console.log("The Highest wage is", highest, "€");

//Spell Name
const nameArray = {...HR_Employees.name};

console.log("John Smith spelled is:", nameArray);

//Sum Wages
const sum1 = function(...args)   {
    console.log("args:", args);
    let total = 0;

    for (let arg of args) {
        total += arg;
    }

    return total;
};

const total = sum1(HR_Employees.wage, Design_Employees.wage);
console.log("The Sum of all wages is:", total);

//Template Literals
let hello = `Hi ${HR_Employees.name}, be welcome to the company`;

console.log(hello);

//map()

const SD_Department = [
    {
        id : 1,
        department_code : 2,
        name : "Jennifer Pratt",
        age : 19,
        email : "jennifer.pratt@loremipsum.com",
        wage : 1100,
    },
    {
        id : 2,
        department_code : 2,
        name : "Justin Holland",
        age : 39,
        email : "justin.holland@loremipsum.com",
        wage : 1800,
    },
    {
        id : 3,
        department_code : 2,
        name : "Tom Nicholson",
        age : 25,
        email : "tom.nicholson@loremipsum.com",
        wage : 2360,
    },
];

console.log("Software Development Department Employees:", SD_Department);

//const SD_Employees_Id = [];

//for (let i = 0; i < SD_Department.length; i++) {
//    SD_Employees_Id.push(SD_Department[i].id);
//}

const SD_Employees_Id = SD_Department.map(user => user.id);

console.log("Software Development Department Employees IDs", SD_Employees_Id);

const  liItems = SD_Department.map(user => `<li id="{user.id}">{user.name}</li>`);

console.log("liItems:", liItems);

//filter

const users = [
    {
        id : 1,
        name : "Hugh Sharma",
        deleted: true,
    },
    {
        id : 2,
        name : "Nella Yang",
        deleted: false,
    },
];

console.log('users:', users);

const deletedUsers = users.filter(user => {
    return user.deleted;
});

console.log("Deleted Users", deletedUsers);

//Classes/SubClasses

class Employee{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    login() {
        return `${this.name} is logged in`;
    }
}

class Intern extends Employee {
    constructor(id, name) {
        super (id, name);
        this.room = 1;
    }

    enroll() {
        return `${this.name} is enrolled`;
    }
}

const intern = new Intern (1, 'Sarah');

console.log('New Login:', intern.login());
console.log('New Intern:', intern.enroll());