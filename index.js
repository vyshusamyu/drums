
//code for detecting button press
var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i=0;i<numberOfDrums;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
    var button1 = this.innerHTML;
    
    makesound(button1) ;
    buttonAnimator(button1)
    //instead of rewriting the whole switch case i am just passing the same makesound function with button1 as parameter
    //so it applies the switch case to button instead of key here
    
  });

}
//code for detecting keyboard press
document.addEventListener("keydown",function(event){//triggering the property called event..event triggrs the keydown
  makesound(event.key);
  buttonAnimator(event.key)//event contains prop called key that tells which keyboard key is pressed

})

function makesound(key){
  
    switch (key) {
      case 'a':
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

      case 's':
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

      case 'd':
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

      

      case 'j':
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

      case 'k':
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

      case 'l':
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

      default:
        break;
    }

}
function buttonAnimator(currentkey){
  var activebutton=document.querySelector("."+currentkey);
  activebutton.classList.add("pressed");


setTimeout(function() {
  activebutton.classList.remove("pressed");
}, 100);
}

