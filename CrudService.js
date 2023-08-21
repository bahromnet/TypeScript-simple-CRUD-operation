"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudService = void 0;
var CrudService = /** @class */ (function () {
    function CrudService() {
        this.persons = [];
    }
    CrudService.prototype.createPerson = function (newPerson) {
        this.persons.push(newPerson);
        console.log("Person added:", newPerson);
    };
    CrudService.prototype.getPersons = function () {
        console.log("Persons list:");
        this.persons.forEach(function (person) {
            console.log("Id: ".concat(person.Id, "\nName: ").concat(person.Name, "\nAge: ").concat(person.Age));
        });
    };
    CrudService.prototype.updatePerson = function (id, newPerson) {
        var index = this.persons.findIndex(function (person) { return person.Id == id; });
        if (index !== -1) {
            this.persons[index] = newPerson;
            console.log("Person updated:", newPerson);
        }
        else {
            console.log("Person not found");
        }
    };
    CrudService.prototype.deletePerson = function (id) {
        var index = this.persons.findIndex(function (p) { return p.Id == id; });
        if (index !== -1) {
            var deletedPerson = this.persons.splice(index, 1)[0];
            console.log("Person deleted:", deletedPerson);
        }
        else {
            console.log("Person not found");
        }
    };
    return CrudService;
}());
exports.CrudService = CrudService;
