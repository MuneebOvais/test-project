//Code that blinks screen red

// window.onload=myInit();

// function myInit(){
// var tag=document.querySelector("body");
// var isRed=false;
// setInterval(function(){
//     if(isRed)
//     {
//         tag.style.background="white";
//     }
//     else
//     {
//         tag.style.background="red";
//     }
//     isRed=!isRed;
// },1000);
// }

//Code that changes background of body upon clicking on button

var btn=document.querySelector("button");
// var isWhite=true;
// btn.addEventListener("click",function(){
//     if(isWhite){
//     document.body.style.background="blue";
//     this.innerHTML="Click again Puta!"
//     }
//     else
//     {
//         document.body.style.background="white"
//         this.innerHTML="Click me Puta!"
//     }
//     isWhite= !isWhite;
// });

//Shorter logic for above code

btn.addEventListener("click",function(){
    document.body.classList.toggle("purple");
})