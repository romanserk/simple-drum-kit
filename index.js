
//detecting button press
var drumBtn = document.querySelectorAll(".drum");

for (var i = 0; i < drumBtn.length; i++){
  drumBtn[i].addEventListener("click", function(){

var buttoniNNERhtml = this.innerHTML;

pressToSound(buttoniNNERhtml);
 buttonAmination(buttoniNNERhtml);

  })
}


//detecting key press
document.addEventListener("keypress", function(event){
  pressToSound(event.key);
  buttonAmination(event.key);

})


function pressToSound(key){
  var crash;
  switch (key){

  case "l":
  crash = new Audio("sounds/crash.mp3");
  crash.play();
  break;

  case "k":
  crash = new Audio("sounds/kick-bass.mp3");
  crash.play();
  break;

  case "j":
  crash = new Audio("sounds/snare.mp3");
  crash.play();
  break;

  case "d":
  crash = new Audio("sounds/tom-1.mp3");
  crash.play();
  break;

  case "s":
  crash = new Audio("sounds/tom-2.mp3");
  crash.play();
  break;

  case "a":
  crash = new Audio("sounds/tom-3.mp3");
  crash.play();
  break;

  case "w":
  crash = new Audio("sounds/tom-4.mp3");
  crash.play();
  break;

  default: console.log("wrong button");

  }
}


function buttonAmination(key){
  var currBtn = document.querySelector("." + key);

setTimeout(function(){
  currBtn.classList.remove("pressed");

},150);
currBtn.classList.add("pressed");

}
