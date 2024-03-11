interface IPerson{
    name: string;
    age: number;
    salary: number;
    display: () => void;
}
var p: IPerson = {
    name: 'John',
    age: 25,
    salary: 10000,
    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`)
    
    }
};
console.log(p)
p.display();

var p1 = {
    name: 'John',
    age: 25
}
console.log(p1)

var p2 = {
    fname: 'John',
    age: 25,
    salary: 10000
};
console.log(p2);