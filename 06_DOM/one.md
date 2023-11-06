```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .bg-black{
            background-color: #212121;
            color: #fff;
        }
    </style>
</head>
<body class="bg-black">
    <div>
        <h1  id="title" class="heading">DOM learning on Chai aur code 
            <span style="display: none;">test text</span></h1>
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, tenetur?</h2>    
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, tenetur?</h2>    
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, tenetur?</h2>    
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, tenetur?</h2>    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, id! Quasi, est voluptatem, omnis at consectetur velit corrupti vel temporibus impedit aliquid, minima nostrum! Molestias tempore veritatis adipisci eaque corrupti.</p>
        
        <input type="password" name="" id="">

        <ul>
            <li class="item">One</li>
            <li class="item">Two</li>
            <li class="item">Three</li>
            <li class="item">Four</li>
        </ul>
    </div>
</body>
</html>

```

```
document.getElementById('title')

  <h1 id=​"title" class=​"heading">
        ​"DOM learning on Chai aur code "
        <span style=​"display:​ none;​">​test text​</span>
  ​</h1>​

document.getElementById('title').id
  title

document.getElementById('title').className
  heading

document.getElementById('title').getAttribute('class')
 heading

document.getElementById('title').getAttribute('id')
 title

document.getElementById('title').setAttribute('class','head')
  <h1 id=​"title" class=​"head">
        ​"DOM learning on Chai aur code "
        <span style=​"display:​ none;​">​test text​</span>
  ​</h1>​

document.getElementById('title').setAttribute('class','head heading')  

 <h1 id=​"title" class=​"head heading">
        ​"DOM learning on Chai aur code "
        <span style=​"display:​ none;​">​test text​</span>
  ​</h1>​

const title = document.getElementById('title')
title 
 <h1 id=​"title" class=​"heading">
        ​"DOM learning on Chai aur code "
        <span style=​"display:​ none;​">​test text​</span>
  ​</h1>​

title.style.background = "green"
title.style.padding = "15px"
title.style.borderRadius="10px"   
```
![Screenshot 2023-11-05 170950](https://github.com/murali-1999/JavaScript_Learining_series/assets/71452201/aa7bda48-07e7-44ec-b06a-1a7ffdaf85ab)

textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows human-readable elements

textContent returns every element in the node. In contrast, innerText is aware of styling and won't return the text of hidden elements.

![Screenshot 2023-11-06 131445](https://github.com/murali-1999/JavaScript_Learining_series/assets/71452201/bb2e2efe-9bc9-40dd-bfc8-ba61e2bba1ec)

![Screenshot 2023-11-06 135652](https://github.com/murali-1999/JavaScript_Learining_series/assets/71452201/da519d58-42e2-49e4-8aee-c974dcafd4d1)
![Screenshot 2023-11-06 135154](https://github.com/murali-1999/JavaScript_Learining_series/assets/71452201/4394b76d-5af8-4ce0-a3d5-4217e0f392ff)



![Screenshot 2023-11-06 144923](https://github.com/murali-1999/JavaScript_Learining_series/assets/71452201/5b640e9e-f333-45fb-909e-f37a46e462a8)

![Screenshot 2023-11-06 145601](https://github.com/murali-1999/JavaScript_Learining_series/assets/71452201/f294936b-4b60-47aa-b711-5826729ec0ab)
