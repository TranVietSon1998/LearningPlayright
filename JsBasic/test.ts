class Student{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}
let Son = new Student("Son", 20);
console.log(Son.name);
console.log(Son.age);

