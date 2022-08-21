// Import class constructors
const Employee = require('../lib/employee')
const Manager = require('../lib/manager')

describe("Manager", () => {

    describe("Manager data creation", () => {
        it("should create an object with a manager's name, id, email address and office number", () => {
            const manager = new Manager("John Smith", 1, "john.smith@domain.com", 101);
            
            expect(manager instanceof Manager).toBe(true);
            expect(manager.name).toBe("John Smith");
            expect(manager.id).toBe(1);
            expect(manager.email).toBe("john.smith@domain.com");
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
        it("should return the manager's ID number", () => {
            const manager = new Manager("John Smith", 1, "john.smith@domain.com", 101);
            
            expect(manager.getId()).toBe(1);
        });
    });

    describe("getEmail", () => {
        it("should return the manager's email address", () => {
            const manager = new Manager("John Smith", 1, "john.smith@domain.com", 101);
            
            expect(manager.getEmail()).toBe("john.smith@domain.com");
        });
    });

    describe("getRole", () => {
        it("should return the string Manager", () => {
            const manager = new Manager("John Smith", 1, "john.smith@domain.com", 101);

            expect(manager.getRole()).toBe("Manager");
        });
    });
});

