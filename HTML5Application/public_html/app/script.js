var startMenuButton = document.getElementById("startButton");
var startMenu = document.getElementById("startMenu");
var bar = document.getElementById("bar");
var windowContainer = document.getElementById("windowcontainer");
var startButtonClicked = false;

startMenuButton.onclick = function startButtonOnClick() {
  startMenu.style.visibility = "visible";
  
};

windowContainer.onclick = function(){
//Makes start menu not disappear when clicking on start button and startmenu 
//itself. Otherwise make it disappear when clicking everything els
    if(!startMenuButton.matches(':hover') && !startMenu.matches(':hover')){
        startMenu.style.visibility = "hidden";
    }
};

