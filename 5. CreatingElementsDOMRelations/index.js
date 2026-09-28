// Write your code below:
let header=document.getElementById("header")
let h3 = document.createElement('h3')
let heading = document.createTextNode("Buy high quality organic fruits online")   
h3.style.fontStyle="italic"
h3.appendChild(heading) 
header.appendChild(h3)



let div = document.getElementsByTagName("div")
let ul=document.querySelector(".fruits")

let para = document.createElement("p")
para.id="fruits-total"
let paraText = document.createTextNode("Total fruits:4");

para.appendChild(paraText)

div[1].insertBefore(para,ul)

