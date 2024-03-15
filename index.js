//import and require inquirer
const inquirer = require('inquirer');
//import and require database class from server.js
const Database = require('./server');

//the main inquirer menu with the list of all options to cycle through
function mainMenu () {
    inquirer
     .prompt ([
         {
             type: 'list',
             message: 'What would you like to do?',
             name: 'home',
             choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
         },
     ]).then((data) => {
        console.log(data);
     switch (data.home) {
         case 'View All Departments':
            seeDepList();
            break;
         case 'Add Department':
            addDept();
            break;
         case 'View All Employees':
             seeEmpList();
             break;
         case 'View All Roles':
             seeRoleList();
             break;
         case 'Add Role':
             addRole();
             break;
         case 'Add Employee':
             addEmp();
             break;
         case 'Update Employee Role':
             updateEmp();
         default:
            break;
         }
        })
     };
 

//function to see the department list
function seeDepList() {
    console.log(Database);
    Database.findDep().then(function ([rows]){
        console.table(rows);
        mainMenu();
})};

//function to add a department to the department list
function addDept() {
    inquirer.prompt([
         {
             type: 'input',
             message: 'Which Department would you like to add?',
             name: 'dep_name'
         },
     ]).then((response) => {
        console.table(response);
        Database.addDep(response).then(function (dat) {
            console.table("Success!");
            mainMenu();
        })
    })
 };

//function to see the list of employee data: their id's, first and last names, job title, department, salaries, and manager
function seeEmpList() {
    console.log(Database);
    Database.seeEmpList().then(function ([rows]){
        console.table(rows);
        mainMenu();
})};
 
//function to see the list of roles with their associated job title, role id, department, and salary
function seeRoleList() {
        console.log(Database);
        Database.seeRoleList().then(function ([rows]) {
            console.table(rows);
            mainMenu();
})};
 
//function to add new roles including their name, salary, and department id
function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the new role?',
            name: 'role_title'
        },
        {
            type: 'number',
            message: 'What is the salary of the new role?',
            name: 'role_salary'
        },
        {
            type: 'number',
            message: 'Which department does this role belong to? Press 1 for produce, 2 for meat, 3 for cashier, and 4 for manager',
            name: 'dep_id'
        }
    ]).then((response) => {
        console.table(response);
        Database.addRole(response).then(function (data) {
            mainMenu();
        }) 
})};

 
//function to add a new employee, using their first name, last name, what their role title is, and the manager they report to
function addEmp() {
    inquirer.prompt([
         {
             type: 'input',
             message: 'What is the Employees First Name?',
             name: 'first_name'
         },
         {
             type: 'input',
             message: 'What is the Employees Last Name?',
             name: 'last_name'
         },
         {
             type: 'list',
             message: 'What is the employees role?',
             name: 'role_id',
             choices: ['1', '2', '3' , '4', '5', '6', '7', '8', '9', '10']
         },
         {
             type: 'list',
             message: 'Who is the employees manager?',
             name: 'manager_id',
             choices: ['1', '2', '3', '4', '5']
         }
     ]).then((response) => {
        Database.addEmp(response).then(function (data) {
            console.table(response);
            mainMenu();
        })
    })
};

//function to update an employees role
function updateEmp() {
    inquirer.prompt([
        {
            type:'list',
            message: 'Which employee do you want to update?',
            name: 'employee.id',
            choices: ['Joe Bargain', 'Ova Seer', 'Chandler Mooney', 'Frank Furter', 'Kale Masher', 'John Cash', 'Goodman Fisher', 'Edgar Planter', 'Coleen Aloot', 'Mister Fruits', 'Grammie Smith', 'Gresha Fowler', 'Frieda Ribley', 'Quoin Counter']
        },
         {
             type: 'list',
             message: 'Which employee do you want to update?',
             name: 'role_id',
             choices: ['1', '2', '3' , '4', '5', '6', '7', '8', '9', '10']
         },
         {
             type: 'list',
             message: 'Which role do you want to assign the selected employee?',
             name: 'manager_id',
             choices: ['1', '2', '3', '4', '5']
         }
     ]).then((response) => {
        console.log(response);
        Database.updateEmpID(response.role_id).then(function (data) {
           
        });
        Database.updateEmpManager(response.manager_id).then(function (data) {
           mainMenu();
        });
     })
 }
 
 //runs the main program
 mainMenu(); 