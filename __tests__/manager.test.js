// Import class constructors
const Employee = require('../lib/employee')
const Manager = require('../lib/manager')

describe("Manager", () => {

    describe("Manager data creation", () => {
        it("should create an object with a manager's name, id, email addres and office number", () => {
            const manager = new Manager("John Smith", 1, "john.smith@domain.com", 101);
            
            expect(manager).toBeInstanceOf(Manager);
            expect(manager.name).toBe("John Smith");
            expect(manager.id).toBe(1);
            expect(manager.email).toBe("johnsmith@domain.com");
            expect(manager.officeNumber).toBe(101);
        });
    });

    describe("getName", () => {
        it("should return the manager's name", () => {
            const manager = new Manager("John Smith", 1, "john.smith@domain.com", 101);
            
            expect(manager.getName()).toBe("John Smith");
        });
    });

    describe("getId", () => {
        it("should return the manager's id", () => {
            const manager = new Manager("John Smith", 1, "john.smith@domain.com", 101);
            
            expect(manager.getId()).toBe(1);
        });
    });

    describe("getEmail", () => {
        it("should return the manager's email address", () => {
            const manager = new Manager("John Smith", 1, "john.smith@domain.com", 101);
            
            expect(manager.getEmail()).toBe("johnsmith@domain.com");
        });
    });

    describe("getOfficeNumber", () => {
        it("should return the manager's office number", () => {
            const manager = new Manager("John Smith", 1, "john.smith@domain.com", 101);
            
            expect(manager.getOfficeNumber()).toBe(101);
        });
    });

    describe("getRole", () => {
        it("should return the string Manager", () => {
            const manager = new Manager("John Smith", 1, "john.smith@domain.com", 101);

            expect(manager.getRole()).toBe("Manager");
        });
    });
});

