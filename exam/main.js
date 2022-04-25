function addYear(){
   const y = new Date();
   document.getElementById("text").innerHTML = y.getFullYear();
}
function addMonth(){
   const m = new Date();
   document.getElementById("text").innerHTML = m.getMonth();
}
function addHour(){
   const h = new Date();
   document.getElementById("text").innerHTML = h.getHours();
}
setInterval(function addSecond(){
   const s = new Date();
   document.getElementById("text").innerHTML = s.getSeconds();
},1000)
