---
template: BlogPost
path: /let-var-const
date: 2020-04-13
title: let, var or const ?
thumbnail: 'https://i1.wp.com/programmingwithmosh.com/wp-content/uploads/2019/03/javascript-736400_960_720.png?fit=720%2C720&ssl=1'
metaDescription: Meta description for Hello World
---


Previously all variable declarations were done with *var* keyword. In ES6 or EcmaScript2015 along with a lot of amazing features, one interesting feature that came is let and const can also be used in variable decalartions. In this blog, we will look at the key differences between let, var and const.

Before deepdiving into the varibale decalarations, let's first understand about variables' scope.

## Function Scope vs Block Scope

In Javascript, there are two types of scopes, function scope and block scope.
### Function Scope
Scope of variable or function is limited to a function i.e, variables and functions defined inside a function are not accessible outside the function.

``` js
function foo() {
    var age = 45
    console.log(age) //45
}
foo()
console.log(age) //ReferenceError: age is not defined
```
So what happended is the scope of variable _age_ is only inside the function foo() becuase visibility of var variable is limited to a function and when it is accessed outside the function, it gave an error that *age is not defined*.
### Block Scope
A block is any chunk of code bounded by {}. Scope of variable or function is limited to a block i.e, variables and functions defined inside a block are not accessible outside the block.

``` js
if (true) {
    var name = "Joe"
    let age = 30
    console.log(name) //Joe
    console.log(age) //30
}
console.log(name) //Joe
console.log(age) // ReferenceError: age is not defined
```
Did you notice that name is visible outside the if block while age isn't? This is because of the fact that var variables' scope is limited to a function while a let variable's scope is limited to a block, that's why age can't be accessed outside the *If Block*.
## let

As discussed above, let works in terms of block scope. let can be updated but cannot be re-declared. Let's see what does it mean

``` js
let age = 60;
age=45;

let age=21;  //SyntaxError: Identifier 'age' has already been declared
```
At fisrt we initialised age as 60, and then successfully updated it to 45. but after redeclaring it, it threw an error. But if the variables are in different scopes then it works fine because then they both will be treated as different variables.
``` js
let age = 60;
age=45;
if(true){
    let age=60;
    console.log(age); //60
}
console.log(age); //45
```
Also, let variables are not hoisted by JS.
``` js
console.log(i) //ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i); //0 1 2 3 4
    }, 0);
}
```

## const

const variables are similar to let variables. The key difference is that they are immutable i.e, const variables cannot be redeclared.  Due to this, every const variable must be initialized at the time of declaration. But it also works fine if the variables are in different scopes.
``` js
const age = 45
if (true) {
    const age = 80
    console.log(age) //80
}
console.log(age) //45
age = 15  //TypeError: Assignment to constant variable.
console.log(age) 
```
but this is not the way it seems, const variable works differently with objects. Let's take an example:
```js
const name={
    firstName: "John",
    lastName: "Doe"
}
console.log(name);  //{ firstName: 'John', lastName: 'Doe' }
name.firstName= "Joe";
name.age=45;
console.log(name); { firstName: 'Joe', lastName: 'Doe', age: 45 }
```
Wondering how's that possible? *Name* is a constant object then how we are able to change to change its properties? It's because const keyword doesnot make doesn't create immutable variables,but it creates immutable bindings i.e, the variable identifier cannot be reassigned but when the content is an object, its properties can be altered. Likely let, Const variables are also not hoisted by JS.
``` js
console.log(name); //ReferenceError: Cannot access 'name' before initialization
const name = 'John'
```

## var

var keyword declares a function scoped or globally scoped variable. Unlike let variables, they can be redeclared. 
``` js
var a = "hello World"
var a = 123 
a = true
```

Variable hoisting is possible in var declarations.
``` js
console.log(i) //undefined
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i); //5 5 5 5 5
    }, 0);
}
```
Beacuse var is hoisted above and setTimeout() executes after the loop ends as setTimeout() adds the callback at the end of queue after specified delay.

## Conclusion

* let :
    * block scoped variables
    * No hoisting i.e, Reference error while accessing a variable before it's declared

* var :
    * function or global scoped variables
    * hoisting i.e, Undefined while accessing a variable before it's declared

* const :
    * block scoped variables
    * No hoisting i.e, Reference error while accessing a variable before it's declared
<!-- Oh, and here's a great quote from this Wikipedia on
[salted duck eggs](https://en.wikipedia.org/wiki/Salted_duck_egg).

> A salted duck egg is a Chinese preserved food product made by soaking duck
> eggs in brine, or packing each egg in damp, salted charcoal. In Asian
> supermarkets, these eggs are sometimes sold covered in a thick layer of salted
> charcoal paste. The eggs may also be sold with the salted paste removed,
> wrapped in plastic, and vacuum packed. From the salt curing process, the
> salted duck eggs have a briny aroma, a gelatin-like egg white and a
> firm-textured, round yolk that is bright orange-red in color.

![Chinese Salty Egg](./salty_egg.jpg) -->
