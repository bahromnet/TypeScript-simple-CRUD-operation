
import { Person } from './Person';


export class CrudService
{
    private persons : Person[] = [];

    createPerson(newPerson : Person){
        this.persons.push(newPerson);
        console.log("Person added:", newPerson);
    }

    getPersons(){
        console.log("Persons list:")
        this.persons.forEach((person) =>{
            console.log(`Id: ${person.Id}\nName: ${person.Name}\nAge: ${person.Age}`);
        });
    }

    updatePerson(id : number, newPerson : Person){
        let index = this.persons.findIndex((person) => person.Id == id);
        if (index !== -1){
            this.persons[index] = newPerson;
            console.log("Person updated:", newPerson);
        }
        else{
            console.log("Person not found");
        }
    }

    deletePerson(id : number){
        let index = this.persons.findIndex((p) => p.Id == id);
        if (index !== -1){
            let deletedPerson = this.persons.splice(index, 1)[0];
            console.log("Person deleted:", deletedPerson);
        }
        else{
            console.log("Person not found");
        }
    }

}

