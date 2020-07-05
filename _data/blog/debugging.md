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

![image info](/assets/debugging/log.png)

## warn()

It is used to output warning messages in console.

![image info](/assets/debugging/warn.png)

## info()

It is used to output informative messages in console

![image info](/assets/debugging/info.png)

## error()

It is used to output error messages in console.

![image info](/assets/debugging/error.png)

## table()

It is used to console output in a nice tabular format.

![image info](/assets/debugging/table.png)

## dir()

It is used to display object in a nice interactive manner. It let's us see the contents of child objects.

![image info](/assets/debugging/dir.png)

## tracing()

It is used to print the stack trace which helps to know and understand the code execution flow.

![image info](/assets/debugging/trace.png)


## clear()

It is used to clear the console.

![image info](/assets/debugging/clear.png)

## time()

It is used to track the time take to execute the operation.

![image info](/assets/debugging/time.png)

## count()

It is used to count the number of times the same response is recorded.

![image info](/assets/debugging/count.png)

### How about styling the console??

Console can be made more interactive by adding colors to it. To add styling add %c into the message. Anthing after %c will get styled by the properties specified in other arguements.

![image info](/assets/debugging/styles.png)
