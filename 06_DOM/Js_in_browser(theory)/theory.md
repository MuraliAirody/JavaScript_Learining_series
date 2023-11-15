## JavaScript Execution Context – How JS Works Behind the Scenes

When the JavaScript engine scans a script file, it makes an environment called the Execution Context that handles the entire transformation and execution of the code.

#### There are two types of execution contexts: 
global and function. The global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript. A function execution context is created whenever a function is called, representing the function's local scope.

### Phases of the JavaScript Execution Context
#### There are two phases of JavaScript execution context:

1. Creation phase: In this phase, the JavaScript engine creates the execution context and sets up the script's environment. It determines the values of variables and functions and sets up the scope chain for the execution context.

2. Execution phase: In this phase, the JavaScript engine executes the code in the execution context. It processes any statements or expressions in the script and evaluates any function calls.



###### each and everything happens in js is in execution, majorly there are 2 components one is memory and another one is code. Both the phases and components applicable for both global and functional execution context



```js
var n = 5;

function square(n) {
  var ans = n * n;
  return ans;
}

var square1 = square(n);
var square2 = square(8);  

console.log(square1)
console.log(square2)
```

![execution context](https://github.com/MuraliAirody/JavaScript_Learning_series/assets/71452201/d2d502ff-155b-486c-875f-e08785497cc0)

At the very beginning, the JavaScript engine executes the entire source code, creates a global execution context, and then does the following things:

1. Creates a global object that is window in the browser and global in NodeJs.
2. Sets up a memory for storing variables and functions.
3. Stores the variables with values as undefined and function references.

It starts going through the entire code line by line from top to bottom. As soon as it encounters n = 5, it assigns the value 5 to 'n' in memory. Until now, the value of 'n' was undefined by default.

Then we get to the 'square' function. As the function has been allocated in memory, it directly jumps into the line var square1 = square(n);. square() will be invoked and JavaScript once again will create a new function execution context.

Once the calculation is done, it assigns the value of square in the 'ans' variable that was undefined before. The function will return the value, and the function execution context will be destroyed.

The returned value from square() will be assigned on square1. This happens for square2 also. Once the entire code execution is done completely, the global context will look like this and it will be destroyed also.

refer Execution context and call stack from freeCodeCamp [here](https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/)

## Script tag

#### script tag used to insert script inside the HTML page, with the help of script tag '\<script>\</script>' able to insert external and also inter js code also 

### Advantage of having separate script file and using it inside the html page by using 'scr' attribute of '\<script>\</script>' tag

1. separation of concern (readability of code increases)
2. Browser caching (the browser will load the script file only once; even if it is commented down after the load, it will store the file inside the cache and increase the response speed).

Note: if the both internal and external script present at a time, script tag only consider external script ('src') which have higher priority.


## DOM

### Difference between NODE and ELEMENT

###### In the context of the Document Object Model (DOM), a node is an interface that represents an object in an HTML or XML document. It can be an element, attribute, text, comment, or any other type of object that can appear in a document tree. The DOM treats an HTML or XML document as a tree structure, where each node is an object of the document. Each node can have a parent and/or children.

###### An element is a specific type of node that represents an HTML or XML element. Elements are nodes, but not all nodes are elements. Elements have additional properties and methods that are specific to elements. For example, an element has a tag name, attributes, and child nodes.

###### In summary, the difference between a node and an element is that an element is a specific type of node that represents an HTML or XML element, while a node can be any object in an HTML or XML document


```
document.body.firstChild.nodeName // return the node name it may element/text/comment

document.body.firstElementChild.nodeName // return the first element only eg:<div>/<span>
```

### Attribute Methods

1. hasAttribute("attribute name")
2. getAttribute("attribute name")
3. setAttribute("attribute name","attribute value)
4. removeAttribute("attribute name")
5. attribute("attribute name") //collection of all the attribute


### Creation of element and Insertion

###### (available in file three.html)[https://github.com/MuraliAirody/JavaScript_Learning_series/blob/main/06_DOM/three.html]


some other properties used while insertion of node 

1. node.append("created node/element")
   
   //add the node inside and at the end of created node
2. node.prepend("created node/element")

   //insert at the beginning of the node

3. node.before("created node/element")
   
   //insert before the node
4. node.after("created node/element")

   // insert after the node

5. node.replaceWith("created node/element") 

   //replace the node with given node  

###### (check the code in the five.html)[https://github.com/MuraliAirody/JavaScript_Learning_series/blob/main/06_DOM/five.html] 

##### append can accept multiple arguments and can add multiple items at once, while appendChild can only accept one argument and can add only one item at a time.
##### append can accept a DOMString as an argument, while appendChild can only accept a Node object.
```
const parent = document.createElement('div');
const child = document.createElement('p');
parent.append(child, 'Appending Text');

const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);

```