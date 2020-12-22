'use strict'

class Animal {
  constructor(name) {
    this.name = name;
    this.next = null;
    }
    
    class AnimalShelter extends Animal {
      constructor() {
        this.front = null;
        this.end = null;
      }
      
      enqueue(animal) {
        const newAnimal = new Animal(animal);
        if(!this.front) {
          this. front = newAnimal;
          this.end = this.front
        } else { 
          this.end.next = newAnimal;
          this.end = newAnimal;
        }
      }
          
          dequeue(pref)
  }
}