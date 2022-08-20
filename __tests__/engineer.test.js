// Import class constructors
const Employee = require('../lib/employee')
const Engineer = require('../lib/engineer');

describe('Engineer', () => {

    describe("Engineer data creation", () => {
        it("should create an object with an engineer's name, id, email address, and Github username", () => {
            const engineer = new Engineer("John Smith", 1, "john.smith@domain.com", "johnsmith123");
        
            expect(engineer).toBeInstanceOf(Engineer);
            expect(engineer.name).toBe("John Smith");
            expect(engineer.id).toBe(1);
            expect(engineer.email).toBe("john.smith@domain.com");
            expect(engineer.github).toBe("johnsmith123");
        });
    });

    describe("getName", () => {
        it("should return the engineer's name", () => {
            const engineer = new Engineer("John Smith", 1, "john.smith@domain.com", "johnsmith123");
            
            expect(engineer.getName()).toBe("John Smith");
        });
    });

    describe("getId", () => {
        it("should return the engineer's id", () => {
            const engineer = new Engineer("John Smith", 1, "john.smith@domain.com", "johnsmith123");
            
            expect(engineer.getId()).toBe(1);
        });
    });

    describe("getEmail", () => {
        it("should return the engineer's email address", () => {
            const engineer = new Engineer("John Smith", 1, "john.smith@domain.com", "johnsmith123");
            
            expect(engineer.getEmail()).toBe("john.smith@domain.com");
        });
    });

    describe("getGithub", () => {
        it("should return the engineer's Github username", () => {
            const engineer = new Engineer("John Smith", 1, "john.smith@domain.com", "johnsmith123");
            
            expect(engineer.getGithub()).toBe("johnsmith123");
        });
    });

    describe("getRole", () => {
        it("should return the string Engineer", () => {
            const engineer = new Engineer("John Smith", 1, "john.smith@domain.com", "johnsmith123");
            
            expect(engineer.getRole()).toBe("Engineer");
        });
    });
});