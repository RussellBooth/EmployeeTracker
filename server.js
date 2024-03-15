//import and require mysql2
const mysql = require('mysql2');
//require dotenv for password
require('dotenv').config();
//connect to the mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: process.env.DB_PASSWORD,
        database: 'employee_db',
    },
    console.log(`connected to the employee_db database.`)
);

//class housing the functions to call the query to the database
class Database {

    //function to query the database to select all the departments from the departments table
    findDep() {
        return db.promise().query(`SELECT id, dep_name AS department FROM departments`)
    };

    //function to query the database and add a new department to the departments table
    addDep(depName) {
        return db.promise().query(`INSERT INTO departments SET ?`, depName)
    };

    //function to query the database and select all employees from the employee table
    seeEmpList() {
        return db.promise().query(`SELECT employees.id , first_name, last_name, manager_id, 
        role_id, roles.role_salary, roles.role_title, departments.dep_name FROM employees
        LEFT JOIN roles ON employees.role_id = roles.id
        LEFT JOIN departments ON roles.dep_id = departments.id`)
    };

    //function to query the database and view the job title, role id, department, and salary that belongs to a role
    seeRoleList() {
        return db.promise().query(`SELECT roles.id, roles.role_title, roles.role_salary, roles.dep_id, departments.dep_name FROM roles 
        LEFT JOIN departments ON roles.dep_id = departments.id`)
    };
    

    //function to query the database and add a new role, with it's name salary and department 
    //NEED TO FIX*** how to get departments to populate from the department list and add from there
    addRole (roleTitle, roleSalary, depID) {
        return db.promise().query(`INSERT INTO roles SET ?`, roleTitle, roleSalary, depID)

    }

    //function to query the database and add an employee, with their first name, last name, role, and manager
    //NEED TO FIX** how to get the role id to populate from the role title
    addEmp(firstName, lastName, roleID, manager) {
        return db.promise().query(`INSERT INTO employees SET ?`, firstName, lastName, roleID, manager)
    }

    //function to query the database and update an employee's role
    //NEED TO FIX** how to get role id to populate from the role title
    updateEmpID(newRoleID) {
        return db.promise().query(`UPDATE employees SET role_id = ? WHERE role_id = ?`, newRoleID)
    }

    updateEmpManager(newManager) {
        return db.promise().query(`UPDATE employees SET manager_id = ? WHERE manager_id = ?`, newManager)
    }

    //function to call role id
    callRoleID() {
        return db.promise().query(`SELECT role_id FROM roles`)
    }

    //function to call manager id
    callManagerID() {
        return db.promise().query(`SELECT manager_id FROM employees`)
    }
}


//exports the database class to use in index.js
module.exports = new Database();