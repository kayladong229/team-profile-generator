// Import class constructors
const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

describe("Intern", () => {
    
    describe("Intern data creation", () => {
        it("should create an object with an intern's name, id, email and school", () => {
            const intern = new Intern("John Smith", 1, "john.smith@domain.com", "UC Berkeley");
            
            expect(intern).toBeInstanceOf(Intern);
            expect(intern.name).toBe("John Smith");
            expect(intern.id).toBe(1);
            expect(intern.email).toBe("john.smith@domain.com");
            expect(intern.school).toBe("UC Berkeley");
        });
    });

    describe("getName", () => {
        it("should return the intern's name", () => {
            const intern = new Intern("John Smith", 1, "john.smith@domain.com", "UC Berkeley");
            
            expect(intern.getName()).toBe("John Smith");
        });
    });

    describe("getId", () => {
        it("should return the intern's ID number", () => {
            const intern = new Intern("John Smith", 1, "john.smith@domain.com", "UC Berkeley");
            
            expect(intern.getId()).toBe(1);
        });
    });

    describe("getEmail", () => {
        it("should return the intern's email address", () => {
            const intern = new Intern("John Smith", 1, "john.smith@domain.com", "UC Berkeley");
            
            expect(intern.getEmail()).toBe("john.smith@domain.com");
        });
    });

    describe("getSchool", () => {
        it("should return the school the intern is currently attending", () => {
            const intern = new Intern("John Smith", 1, "john.smith@domain.com", "UC Berkeley");
            
            expect(intern.getSchool()).toBe("UC Berkeley");
        });
    });

    describe("getRole", () => {
        it("should return the string Intern", () => {
            const intern = new Intern("John Smith", 1, "john.smith@domain.com", "UC Berkeley");
            
            expect(intern.getRole()).toBe("Intern");
        });
    });
});
