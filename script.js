//your JS code here. If required.
let btn = document.getElementById("submit");
btn.addEventListener("click",()=>{
	let size = document.getElementById("fontsize").value;
	let color = document.getElementById("fontcolor").value;
	let cook = document.cookie = `Fontsize = ${size}`;
	let colorCook = document.cookie = `fontcolor = ${color}`;
	document.getElementById("fontsize").style.value = size;
	document.getElementById("fontcolor").style.value = color;
})