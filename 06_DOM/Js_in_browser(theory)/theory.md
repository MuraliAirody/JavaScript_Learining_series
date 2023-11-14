
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