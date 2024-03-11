console.log("Hello typescript!")

function greet(name: string) {
    console.log(`Hello, ${name}!`)
}

greet("Eric");

var a = 100
var b
console.log(a)
console.log(b)

// a = "Hello"

var c: number = 100
var d: string = "Hello"
var e: boolean = true
var f: any = "Hello"
// f = 100
// f = true

// Union Type
var g: number | string = 100
