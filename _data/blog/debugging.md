---
template: BlogPost
path: /debugging
date: 2020-07-05
title: Debugging Javascript Applications
thumbnail: "/assets/js.png"
metaDescription: Meta description for Hello World
---

Logging is an important ascpect to debug simple and complex applications. This helps the developer to see what's going on in the application, how it is reacting to changes, where the code is breaking etc.

The most common and standard way to log the data is log() method of console object.

But, console object has some other really intereting method to create logs like `warn` `info` `error` etc.

## log()

It is used to output messages in console

![image info](./pictures/image.png)

## warn()

It is used to output warning messages in console.

![image info](./pictures/image.png)

## info()

It is used to output informative messages in console

![image info](./pictures/image.png)

## error()

It is used to output error messages in console.

![image info](./pictures/image.png)

## table()

It is used to console output in a nice tabular format.

![image info](./pictures/image.png)

## dir()

It is used to display object in a nice interactive manner. It let's us see the contents of child objects.

![image info](./pictures/image.png)

## tracing()

It is used to print the stack trace which helps to know and understand the code execution flow.

![image info](./pictures/image.png)

## asserting()

It is used to run assertion tests. if the first argument is false, then only it prints the subsequent arguments to console.

![image info](./pictures/image.png)

## clear()

It is used to clear the console.

![image info](./pictures/image.png)

## time()

It is used to track the time take to execute the operation.

![image info](./pictures/image.png)

## count()

It is used to count the number of times the same response is recorded.

![image info](./pictures/image.png)

### How about styling the console??

Console can be made more interactive by adding colors to it. To add styling add %c into the message. Anthing after %c will get styled by the properties specified in other arguements.
