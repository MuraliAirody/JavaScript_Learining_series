# Execution context
![](https://github.com/MuraliAirody/JavaScript_Learning_series/assets/71452201/8cd25270-8259-4c58-b0d5-fc393105c4ff)

- Global Execution Context: This is the default or base execution context. Variables and functions that are not inside any function are part of the global execution context. In the diagram, the global execution context initializes variables n, square1, square2, and a function square.

- Function Execution Context: This is created each time a function is invoked or called. In the diagram, the function square is called twice with different arguments (5 and 8), creating separate execution contexts for each call. Each function execution context shows memory allocation and code execution, calculating the square of the input numbers.

- Call Stack: This is the stack data structure that stores all the execution context objects in a LIFO (Last In, First Out) manner. When a function is called, a new execution context is created and added (pushed) to the call stack. When the function returns, its execution context is removed (popped) from the stack. In the diagram, after each function execution, the context is destroyed, returning control to the global context.

- Variable and Function Hoisting: In the global execution context, variables are initially set to undefined and functions are fully defined. This is due to a JavaScript mechanism called hoisting.

- Execution: The code part shows sequential line-by-line code execution including variable assignments and function calls. After the entire code execution is done, the global context will be destroyed.
