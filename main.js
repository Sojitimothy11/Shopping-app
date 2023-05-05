const price= document. querySelector(".price li");
const dish= document. querySelector(".dish li");

const prices= document. querySelector(".prices");
const dishes= document. querySelector(".dishes");

const click= document. querySelector(".click");
click.addEventListener('click',function(){

    
//create new li programatically
const newLi=document.createElement("LI");
const dishesLi=document.createElement("LI");
//get the value of the input
const liContent= document.createTextNode(prices.value)
const dishesContent=document.createTextNode(dishes.value)
//add the input inside the new li
newLi.appendChild(liContent);
dishesLi.appendChild(dishesContent)

//attach the li to the new li list
price.appendChild(newLi);
dish.appendChild(dishesLi);
})

