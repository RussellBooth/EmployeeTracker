/* making the table and data for the departments */
INSERT INTO departments (dep_name)
VALUES  ("Produce"),
        ("Meat"),
        ("Cashier"),
        ("Managers");

/* making the table and data for the roles*/
INSERT INTO roles (role_title, role_salary, dep_id)
VALUES  ("Produce manager", 40000, 4),
        ("Produce stocker", 30000, 1),
        ("Meat Manager", 40000, 4),
        ("Meat Cutter", 35000, 2),
        ("Meat Stocker", 30000, 2),
        ("Lead Cashier", 32500, 3),
        ("Secondary Cashier", 30000, 3),
        ("Key Carrier", 40000, 3),
        ("Assistant Grocery Manager", 45000, 4),
        ("Grocery Manager", 60000, 4);

/* making the table and data for employees */
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Joe", "Bargain", 10, null),
        ("Ova", "Seer", 9, 1),
        ("Chandler", "Mooney", 8, 2),      
        ("Frank", "Furter", 3, 1),
        ("Kale", "Masher", 1, 1),
        ("John", "Cash", 6, 3),
        ("Goodman", "Fisher", 4, 4),
        ("Edgar", "Planter", 2, 5),
        ("Coleen", "Aloot", 7, 3),
        ("Mister", "Fruits", 2, 5),
        ("Grammie", "Smith", 2, 5),
        ("Gresha", "Fowler", 5, 4),
        ("Frieda", "Ribley", 5, 4),
        ("Quoin", "Counter", 7, 3);
