# This
- In JavaScript, arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical context.<br><br> Even though the getThis function is defined inside the user object, because it’s an arrow function, it does not create its own this context. Instead, it uses the this value from the surrounding scope where it was defined, which is the global scope in this case.

- On the other hand, regular functions (defined with the function keyword) do have their own this context, which is why getThisAgain returns the user object.

This is a unique aspect of JavaScript’s function context and scope rules. It’s one of the reasons why arrow functions are not recommended when you want to access object properties using this inside the function.

n JavaScript, the this keyword refers to the object that the function is a property of. However, the value of this behaves differently in arrow functions and regular functions.

Regular functions: In regular functions (those defined with the function keyword), this is determined by how the function is called. When you call a method on an object like user.greeting(), this inside that method refers to the object on which the method is called (in this case, user). So, this.username inside the greeting method correctly refers to user.username.

Arrow functions: In arrow functions (() => {}), this is lexically bound. It means that it uses this from the code that contains the arrow function. In your case, the getThis arrow function is defined in the global scope, so this inside getThis refers to the global object. In a Node.js environment, the global object is global, but in a browser environment, the global object is window. If you’re running this code in strict mode, this will be undefined.

So, in your code, user.getThis() returns {} because this inside the getThis arrow function refers to the global object or undefined (in strict mode), not the user object.

On the other hand, user.getThisAgain() returns the user object because getThisAgain is a regular function, and this inside a regular function refers to the object on which the function is called.