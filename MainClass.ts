import * as readline from 'readline';
import { CrudService } from "./CrudService";
import { Person } from './Person';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class MainClass{
    private crud = new CrudService();
    mainMethod(){
        console.log("1.Create Persone\n2.Get All Persons\n3.Update Person\n4.Delete Person");

        rl.question("Choose one: ", (one) => {
            switch(one){
                case "1":{
                    rl.question("Enter Id: ", (id) => {
                        rl.question("Enter Name: ", (name) => {
                            rl.question("Enter Age: ", (age) => {
                                let per : Person = new Person();
                                per.Id = parseInt(id);
                                per.Name = name;
                                per.Age = parseInt(age);
            
                                this.crud.createPerson(per);
                                this.mainMethod();
                            });
                        });
                    });
                }

                case "2":{
                    this.crud.getPersons();
                    this.mainMethod();
                }

                case "3":{
                    rl.question("Enter Exist Id: ", (existId) => {
                        rl.question("Enter new Name: ", (newName) => {
                            rl.question("Enter new Age: ", (newAge) => {
                                let per : Person = new Person();
                                per.Id = parseInt(existId);
                                per.Name = newName;
                                per.Age = parseInt(newAge);

                                this.crud.updatePerson(parseInt(existId), per);
                                this.mainMethod();
                            })
                        })
                    });
                    
                }

                case "4":{
                    rl.question("Enter Exist Id: ", (existId) => {
                        this.crud.deletePerson(parseInt(existId));
                        this.mainMethod();
                    });
                }
            }
            this.mainMethod();
        });
    }
}

let man : MainClass = new MainClass();
man.mainMethod();