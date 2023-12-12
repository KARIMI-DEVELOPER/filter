var btnAll = document.querySelector('#all')
var btnfamily = document.querySelector('#btnfamily')
var btnholiday = document.querySelector('#btnholiday')
var btnhoneymoon = document.querySelector('#btnhoneymoon')
var btnreligious = document.querySelector('#btnreligious')
var btnwinter = document.querySelector('#btnwinter')

// contents
var boxfamily = document.querySelector('#Family')
var boxholiday = document.querySelector('#Holiday')
var boxhoneymoon = document.querySelector('#honeymoon')
var boxreligious = document.querySelector('#religious')
var boxwinter = document.querySelector('#winter')

btnfamily.addEventListener("click", function(){
   console.log("ha ha")
   boxholiday.style.display="none"
   boxhoneymoon.style.display="none"
   boxreligious.style.display="none"
   boxwinter.style.display="none"
   boxfamily.style.display="block"
   boxfamily.style.display="flex"
});
btnholiday.addEventListener("click", function(){
    boxfamily.style.display="none"
   boxhoneymoon.style.display="none"
   boxreligious.style.display="none"
   boxwinter.style.display="none"
   boxholiday.style.display="block"
   boxholiday.style.display="flex"
} )
btnhoneymoon.addEventListener("click", function(){
    boxfamily.style.display="none"
   boxholiday.style.display="none"
   boxreligious.style.display="none"
   boxwinter.style.display="none"
   boxhoneymoon.style.display="block"
   boxhoneymoon.style.display="flex"
} )
btnreligious.addEventListener("click", function(){
    boxfamily.style.display="none"
   boxhoneymoon.style.display="none"
   boxholiday.style.display="none"
   boxwinter.style.display="none"
   boxreligious.style.display="block"
   boxreligious.style.display="flex"
} )
btnwinter.addEventListener("click", function(){
    boxfamily.style.display="none"
   boxhoneymoon.style.display="none"
   boxreligious.style.display="none"
   boxholiday.style.display="none"
   boxwinter.style.display="block"
   boxwinter.style.display="flex"
} )
btnAll.addEventListener("click", function(){
    boxholiday.style.display="block"
   boxhoneymoon.style.display="block"
   boxreligious.style.display="block"
   boxwinter.style.display="block"
   boxholiday.style.display="flex"
   boxhoneymoon.style.display="flex"
   boxreligious.style.display="flex"
   boxwinter.style.display="flex"
} )