// Import class constructors
const Employee = require('../lib/employee')

describe("Employee", () => {

    describe("Employee data creation", () => {
        it("should create an object with an employee's name, id, and email address", () => {
            const employee = new Employee("John Smith", 1, "john.smith@domain.com");

            expect(employee instanceof Employee).toBe(true);
            expect(employee.name).toEqual("John Smith");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("john.smith@domain.com");
        });
    });

    describe("getName", () => {
        it("should return the employee's name", () => {
            const employee = new Employee("John Smith", 1, "john.smith@domain.com");

            expect(employee.getName()).toEqual("John Smith");
        });
    });

    describe("getId", () => {
        it("should return the employee's ID number", () => {
            const employee = new Employee("John Smith", 1, "john.smith@domain.com");

            expect(employee.getId()).toEqual(1);
         });
    });

    describe("getEmail", () => {
        it("should return the employee's email address", () => {
            const employee = new Employee("John Smith", 1, "john.smith@domain.com");

            expect(employee.getEmail()).toEqual("john.smith@domain.com");
        });
    }); 

    describe("getRole", () => {
        it("should return the string Employee", () => {
            const employee = new Employee("John Smith", 1, "john.smith@domain.com");

            expect(employee.getRole()).toEqual("Employee");
        });
    });
})



