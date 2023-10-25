//your JS code here. If required
let body=document.querySelector("body");
const str=document.createElement("p");

body.addEventListener("load", ()=>{
	str.innerText="DOM load Success";
body.appendChild(str);
})
