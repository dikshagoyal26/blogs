---
template: BlogPost
path: /call-bind-apply
date: 2020-07-05
title: What is call(), bind() and apply() ?
thumbnail: "/assets/js.png"
metaDescription: Meta description for Hello World
---

call(), bind() and apply() is the most common interview question. Yet most of us are not aware what these methods are? What do they do?

Before deepdiving into this, Let's first consider a simple example

```js
const fullName = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(fullName.getFullName()); // John Doe
```

Now lets say we have another object like

```js
const anotherFullName = {
  firstName: "Chloe",
  lastName: "Williams"
};
```

What if we have to print the full Name for object 'anotherFullName' as well?
Thinking about creating the same function again!! Well, Creating the same function isn't a good practice. Why?
Because what if we have more such objects, are we going to create same function for each one of them? and let's say we have to change someting afterwards, it won't be possible to edit all of them.

That's where call() method comes into picture...

```js
fullName.getFullName.call(anotherFullName);
// Chloe Williams
```

## call()

The call() method is an immediately invoking function and accepts reference as the first parameter. In this case the 'this' got replaced by anotherFullName and that's why it logged out 'Chloe Williams'

Now, what if the function accepts parameteres?

```js
const fullName = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function(city, state) {
    return (
      this.firstName + " " + this.lastName + " lives in " + city + ", " + state
    );
  }
};

console.log(fullName.getFullName("Mumbai", "Maharashtra")); // John Doe lives in Mumbai, Maharashra
```

call() method also accepts parameters, all the arguments passed after the reference are treated as parameters.

```js
fullName.getFullName.call(anotherFullName, "Mumbai", "Maharashtra");
// Chloe Williams lives in Mumbai, Maharashra
```

## apply()

The apply() method is also an immediately invoking function similar to call() method.

```js
const fullName = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function(...args) {
    return (
      this.firstName +
      " " +
      this.lastName +
      " lives in " +
      args[0] +
      ", " +
      args[1]
    );
  }
};

console.log(fullName.getFullName("Mumbai", "Maharashtra"));
// // John Doe lives in Mumbai, Maharashra

fullName.getFullName.apply(anotherFullName, ["Mumbai", "Maharashtra"]);
// Chloe Williams lives in Mumbai, Maharashra
```

The key difference between call() and apply() method is that apply() accepts only two parameters i,e, reference and an array of parameters; while the call() method accepts multiple parameters where the first one is always reference.

## bind()

bind() method looks similar to call() method but it binds reference to the function, creates a copy of the function and returns it, which can be invoked anytime later.

```js
const fullName = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function(city, state) {
    return (
      this.firstName + " " + this.lastName + " lives in " + city + ", " + state
    );
  }
};
console.log(fullName.getFullName("Mumbai", "Maharashtra")); // John Doe lives in Mumbai, Maharashra

const anotherFullName = {
  firstName: "Chloe",
  lastName: "Williams"
};

let statement = fullName.getFullName.bind(
  anotherFullName,
  "Mumbai",
  "Maharashtra"
);

console.log(statement);
//ƒ (city, state) {return (this.firstName + " " + this.lastName + " lives in " + city + ", " "+ state);}
console.log(statement()); // Chloe Williams lives in Mumbai, Maharashtra
```

Ergo, Congratulations!

We are done and dusted with .call(), .apply() and .bind() methods.

Hurray!

Next time you face this question, thank me ;)
