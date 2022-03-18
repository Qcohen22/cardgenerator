let spade = [1,2,3,4,5,6,7,8,9,10,"K", "Q", "J","A"]
let arr = spade[Math.floor(Math.random()*spade.length)]
let suit = ["♦","♥","♠","♣"]
let icon = suit[Math.floor(Math.random()*suit.length)]
 document.querySelector("#cards").innerHTML = arr
document.querySelector("#icon").innerHTML = icon