// 4 pillars of dom
                             
// 1.selection of element
// 2.changing html
// 3.changing css
// 4.event listner

// var a=document.querySelectorAll("h1");
// a.forEach(function(a){
//      console.log(a);
// })
// var w=document.getElementById("dex");
// w.addEventListener("click",function(){
//     w.innerHTML="Jai Mata Di";
//     w.style.color="red";
//     w.style.fontSize="70px";
//     w.style.fontWeight="600"; 
// })
// let text = "We are \"Vikings\" the so-called \"Vikings\" from the \"Vikings\" north.";
// console.log(text.replace(/VIKINGS/ig,"DEXTER"))

// let tags=["temp strings","second","third"];
// let html=`<h1>${text}<\h1>`;
// for(const x of tags){
//     html+=`<li>${x}</li>`;
// }
// html+=`</ul`;
// document.getElementById("dex").innerHTML=html;
// setTimeout(func,5000);
// function func(){
//     console.log("jai mata di");
// }

const loda=require("lodash");
const srr=[1,[2,[3,[4]]]];
const nee=loda.flattenDeep(srr);
console.log(nee);
