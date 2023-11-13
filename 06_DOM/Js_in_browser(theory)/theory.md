
## Script tag

#### script tag used to insert script inside the HTML page, with the help of script tag '\<script>\</script>' able to insert external and also inter js code also 

### Advantage of having separate script file and using it inside the html page by using 'scr' attribute of '\<script>\</script>' tag

1. separation of concern (readability of code increases)
2. Browser caching (the browser will load the script file only once; even if it is commented down after the load, it will store the file inside the cache and increase the response speed).

Note: if the both internal and external script present at a time, script tag only consider external script ('src') which have higher priority.


### DOM

##### Difference between NODE and ELEMENT

###### In the context of the Document Object Model (DOM), a node is an interface that represents an object in an HTML or XML document. It can be an element, attribute, text, comment, or any other type of object that can appear in a document tree. The DOM treats an HTML or XML document as a tree structure, where each node is an object of the document. Each node can have a parent and/or children.

###### An element is a specific type of node that represents an HTML or XML element. Elements are nodes, but not all nodes are elements. Elements have additional properties and methods that are specific to elements. For example, an element has a tag name, attributes, and child nodes.

###### In summary, the difference between a node and an element is that an element is a specific type of node that represents an HTML or XML element, while a node can be any object in an HTML or XML document


```
document.body.firstChild.nodeName // return the node name it may element/text/comment

document.body.firstElementChild.nodeName // return the first element only eg:<div>/<span>
```

##### Attribute Methods

1. hasAttribute("attribute name")
2. getAttribute("attribute name")
3. setAttribute("attribute name","attribute value)
4. removeAttribute("attribute name")
5. attribute("attribute name") //collection of all the attribute


##### Creation of element and Insertion

(available in file three.html)[three.html]


