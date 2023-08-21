"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var CrudService_1 = require("./CrudService");
var Person_1 = require("./Person");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var MainClass = /** @class */ (function () {
    function MainClass() {
        this.crud = new CrudService_1.CrudService();
    }
    MainClass.prototype.mainMethod = function () {
        var _this = this;
        console.log("1.Create Persone\n2.Get All Persons\n3.Update Person\n4.Delete Person");
        rl.question("Choose one: ", function (one) {
            switch (one) {
                case "1": {
                    rl.question("Enter Id: ", function (id) {
                        rl.question("Enter Name: ", function (name) {
                            rl.question("Enter Age: ", function (age) {
                                var per = new Person_1.Person();
                                per.Id = parseInt(id);
                                per.Name = name;
                                per.Age = parseInt(age);
                                _this.crud.createPerson(per);
                                _this.mainMethod();
                            });
                        });
                    });
                }
                case "2": {
                    _this.crud.getPersons();
                    _this.mainMethod();
                }
                case "3": {
                    rl.question("Enter Exist Id: ", function (existId) {
                        rl.question("Enter new Name: ", function (newName) {
                            rl.question("Enter new Age: ", function (newAge) {
                                var per = new Person_1.Person();
                                per.Id = parseInt(existId);
                                per.Name = newName;
                                per.Age = parseInt(newAge);
                                _this.crud.updatePerson(parseInt(existId), per);
                                _this.mainMethod();
                            });
                        });
                    });
                }
                case "4": {
                    rl.question("Enter Exist Id: ", function (existId) {
                        _this.crud.deletePerson(parseInt(existId));
                        _this.mainMethod();
                    });
                }
            }
            _this.mainMethod();
        });
    };
    return MainClass;
}());
var man = new MainClass();
man.mainMethod();
