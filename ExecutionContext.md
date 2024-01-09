# Execution context
![](https://github.com/MuraliAirody/JavaScript_Learning_series/assets/71452201/8cd25270-8259-4c58-b0d5-fc393105c4ff)

- Global Execution Context: This is the default or base execution context. Variables and functions that are not inside any function are part of the global execution context. In the diagram, the global execution context initializes variables n, square1, square2, and a function square.

- Function Execution Context: This is created each time a function is invoked or called. In the diagram, the function square is called twice with different arguments (5 and 8), creating separate execution contexts for each call. Each function execution context shows memory allocation and code execution, calculating the square of the input numbers.

- Call Stack: This is the stack data structure that stores all the execution context objects in a LIFO (Last In, First Out) manner. When a function is called, a new execution context is created and added (pushed) to the call stack. When the function returns, its execution context is removed (popped) from the stack. In the diagram, after each function execution, the context is destroyed, returning control to the global context.

- Variable and Function Hoisting: In the global execution context, variables are initially set to undefined and functions are fully defined. This is due to a JavaScript mechanism called hoisting.

- Execution: The code part shows sequential line-by-line code execution including variable assignments and function calls. After the entire code execution is done, the global context will be destroyed.


# Hoisting
Hoisting in JavaScript refers to the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use a variable or a function in your code before it's declared.

However, it's important to note that only the declarations are hoisted, not the initializations. Let's look at examples for both variables and functions:

- Variable Hoisting
```js
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

```
In the above example, the variable x is hoisted to the top of its scope during compilation. So, even though we try to access it before the declaration, it doesn't throw an error. The first console.log(x) outputs undefined because only the declaration is hoisted, not the assignment.

- Function Hoisting:
```js
foo(); // Output: "Hello, I'm foo!"

function foo() {
  console.log("Hello, I'm foo!");
}
```

In this example, the function foo is hoisted to the top of its scope. So, when we call foo() before its declaration, it works without an error.

However, hoisting does not work the same way with function expressions:
```js
bar(); // TypeError: bar is not a function

var bar = function() {
  console.log("Hello, I'm bar!");
};

```

In this case, the variable bar is hoisted, but it's initialized with undefined. Attempting to call bar() before the assignment results in a TypeError because bar is not yet a function.


#### Global execution context creation in call stack
![Screenshot 2024-01-09 182659](https://github.com/MuraliAirody/JavaScript_Learning_series/assets/71452201/2271af17-9754-45de-8f59-e5ba62deef41)

#### function invoke creates Local execution context inside Global execution context

![Screenshot 2024-01-09 182725](https://github.com/MuraliAirody/JavaScript_Learning_series/assets/71452201/6f26e3dc-65c8-4730-99e3-6e0b40c3ba20)

#### Once the control reaches back to Global execution context, local execution context will be removed from call stack

![Screenshot 2024-01-09 182752](https://github.com/MuraliAirody/JavaScript_Learning_series/assets/71452201/ccb398e7-fe20-40d6-bae8-0107e30e5aa4)

#### Same thing repeats with the another function call also

![Screenshot 2024-01-09 182810](https://github.com/MuraliAirody/JavaScript_Learning_series/assets/71452201/fa6604b7-b272-4418-b6f2-8f014dee21ac)
![Screenshot 2024-01-09 182839](https://github.com/MuraliAirody/JavaScript_Learning_series/assets/71452201/2fcf6c80-4b5b-4e6e-82a6-9d40ef8e7e54)
![Screenshot 2024-01-09 183028](https://github.com/MuraliAirody/JavaScript_Learning_series/assets/71452201/bed2c315-8c7d-4d14-8990-8c8e2029d930)

