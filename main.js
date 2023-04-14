let btn = document.getElementById("btn");
let hexArray = [1,2,3,4,5,6,"A","B","C","D","E","F"];
let colorName =document.querySelector(".color-name");

btn.onclick=()=> {
  
  let randomColor = [];

  for(let i = 0 ; i < 6 ; i++) {
    randomColor.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
  }

  colorName.innerHTML=`#${randomColor.join("")}`;
  
  document.body.style.backgroundColor=`#${randomColor.join("")}`;
}

// ==== Second Method ====

// let randomColor = Math.floor(Math.random()*16777215).toString(16);

// document.body.style.backgroundColor=`#${randomColor}`;


// ==== Third Method ====

// let randomColor= `${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}`;

// document.body.style.backgroundColor=`rgb(${randomColor})`;