import { gameLogic } from "./index.js";

const menu = document.querySelector(".welcome-container");
const button = document.querySelector(".start");
const musicCheckBox = document.getElementById("music") ;
const music = document.querySelector("audio");

button.addEventListener('click',event => {
    
    if(musicCheckBox.checked){
        music.volume = 0.005;
        music.loop = true;
        music.play();
    }
    menu.remove()
    gameLogic();

})