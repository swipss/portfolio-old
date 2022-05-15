 document.addEventListener("DOMContentLoaded", function(event) {
        typeWriter()
 })
 
 let i = 0
 let text = "Hey, I'm Sten."
 let speed = 100

 function typeWriter() {
        if (i<text.length) {
               document.getElementById('title').innerHTML += text.charAt(i)
               i++
               setTimeout(typeWriter, speed)
        }
 }
 
 document.getElementById("work-button").onclick = function () {
        location.href = "#projects";
 };
 
 document.getElementById("back").onclick = function () {
        location.href = "#header";
 };



 