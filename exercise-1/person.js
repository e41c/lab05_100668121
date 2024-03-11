var p = {
    name: 'John',
    age: 25,
    salary: 10000,
    display: function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Salary: ").concat(this.salary));
    }
};
console.log(p);
p.display();
var p1 = {
    name: 'John',
    age: 25
};
console.log(p1);
var p2 = {
    fname: 'John',
    age: 25,
    salary: 10000
};
console.log(p2);
