// 4 pillars of dom
                             
// 1.selection of element
// 2.changing html
// 3.changing css
// 4.event listner

var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
btn.addEventListener("click", function() {
    bulb.style.backgroundColor = "yellow";
});