# Project Related to async

## 1. BackGround Color Changer

## Project link
(Replit link)[https://replit.com/@MuraliAirody/Background-color-changer]

### HTML

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div class="main">
    <h1>BackGround Color Changer</h1>
    <p>Click on start to change the background color,stop to stop the changes</p>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
  </div>
  <script src="script.js"></script>

  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
</body>

</html>
```

### JS

```js
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

const getrandomColor = ()=>{
  const hexaCode = "0123456789ABCDEF"
  let color = "#"

  for(let i=0;i<6;i++){
    color+=hexaCode[Math.floor(Math.random()*16)]
  }
  return color;
}
let interval 
const startChangingColor = function(){
//   console.log("inside start")
  interval = setInterval(setBgColor,1000)
  
}

const setBgColor = function(){
  document.body.style.backgroundColor = getrandomColor()
}

const stopChangingColor = function(){
//   console.log("inside stop")
   clearInterval(interval)
  interval = null

}

start.addEventListener("click",startChangingColor)
stop.addEventListener("click",stopChangingColor)
```

### CSS

```css
html {
  height: 100%;
  width: 100%;
}

body{
  background-color: black;
  color: white;
}

.main{
  margin:100px auto;
  width:80%;
  border: 1px white solid;
  text-align: center;
  padding:20px;
  background-color: #dcdcdc;
  color: black;
}

button{
  padding:10px;
  border-radius: 15px;
}
 button:first-of-type{
  background-color: green;
}
 button:nth-of-type(2){
  background-color: red;
}
/* 
div button:first-child{
  background-color: green;
}

div button:nth-child(2){
  background-color: red;
} */


```

## 2. Key Checker

## Project Link
(Replit Link)[https://replit.com/@MuraliAirody/KeyChecker]

### HTML

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div class="project">
    <div id="insert">
      <div class="key">Press the key and watch magic</div>
    </div>
  </div>
  <script src="script.js"></script>

  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
</body>

</html>
```

### JS

```js
const insert = document.querySelector("#insert")

window.addEventListener("click",(e)=>{
    insert.innerHTML = `
      <div class='color'>
      <table>
      <tr>
        <th>Key</th>
        <th>Keycode</th> 
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key === ' ' ? 'Space' : e.key}</td>
        <td>${e.keyCode}</td> 
        <td>${e.code}</td>
      </tr>

    </table>
      </div>
    `;
})
```

### CSS

```css
html {
  height: 100%;
  width: 100%;
}
table,
th,
td {
  border: 1px solid #e7e7e7;
}
.project {
  background-color: #1c1c1c;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
}

.color {
  color: aliceblue;
  display: flex;
  flex-direction: row;
}
```