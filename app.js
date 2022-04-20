let spade = [1,2,3,4,5,6,7,8,9,10,"K", "Q", "J","A"]
let arr = spade[Math.floor(Math.random()*spade.length)]
let suit = ["♦","♥","♠","♣"]
let icon = suit[Math.floor(Math.random()*suit.length)]
if(icon==="♥") {
    document.querySelector("#icon").style.color="red"
}
if(icon==="♥") {
    document.querySelector("#iconTwo").style.color="red"
}
document.querySelector("#cards").innerHTML = arr
document.querySelector("#icon").innerHTML = icon
document.querySelector("#iconTwo").innerHTML = icon