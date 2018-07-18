class Person {
    constructor(name = 0, age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi this is ${this.name}`;
    }

    getDescription(){
        return `${this.name} is  ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            return description += `. This has major ${this.major}`;
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name , age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            return greeting += `. This has greeting is  ${this.homeLocation}`; 
        }
        return greeting;
    }

}

const me  = new Student('test', 24, 'computer science');
const trvel1  = new Traveller('test', 24, 'xyz');
console.log(trvel1.getGreeting())
console.log(me.getGreeting());
console.log(me.getDescription());
const other = new Student('test', 24);

console.log(me);
console.log(me.hasMajor());
console.log(other);
console.log(other.hasMajor());