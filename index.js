var nod = document.querySelectorAll(".drum").length

for (let i = 0; i < nod; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let btnInHTML = this.innerHTML
        sound(btnInHTML) 
        btnani(btnInHTML);       

    })
}
addEventListener("keydown",function(event){
        sound(event.key);
        btnani(event.key);
})

function sound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/crash.mp3')
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/snare.mp3')
            audio.play();
            break;
    
        default:
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play();            
            setTimeout(() => {
                var audio = new Audio('sounds/tom-2.mp3')
            audio.play();
            }, 200);            
            setTimeout(() => {
                var audio = new Audio('sounds/tom-3.mp3')
            audio.play();
            }, 300);            
            setTimeout(() => {
                var audio = new Audio('sounds/tom-4.mp3')
            audio.play();
            }, 400);            
            setTimeout(() => {
                var audio = new Audio('sounds/snare.mp3')
            audio.play();
            }, 500);            
            setTimeout(() => {
                var audio = new Audio('sounds/kick-bass.mp3')
            audio.play();
            }, 600);            
            setTimeout(() => {
                var audio = new Audio('sounds/crash.mp3')
            audio.play();
            }, 900);            
                        
            break;
    }
}
function btnani(ckey) {
    active = document.querySelector("."+ckey)
    active.classList.add("pressed");
    setTimeout(() => {
        active.classList.remove("pressed");
    }, 300);    
}
















































// This is how we can pass a function as an argument

// function add(a,b) {
//     console.log(a+b)    
// }
// function multiply(a,b) {
//     console.log(a*b);    
// }
// function calc(a,b,news) {
//     return news(a,b);    
// }
// calc(4,5,add);

// function anotherAddEventListener(typeOfEvent, callback) {
//     var eventHappened = {
//          eventType: "keypress",
//         key: "p", 
//         duration: 2
//     }
//     if (eventHappened.eventType===typeOfEvent) {
//         callback(eventHappened)
//     }
// }

// anotherAddEventListener("keypress",function(event){
//     console.log(event); 
// })