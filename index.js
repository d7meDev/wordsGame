import { Counter } from './counter.js';
import { getWord } from './wordsGenreator.js';
import { destroyHeart } from './heart_destroy.js';

const words = [];
let score = 0;
let hearts = 3;
const counterController = Counter();
const input = document.querySelector("input");


async function gameLogic() {
    counterController.startCounter();
    const wordGenreatorID = setInterval(async () => {
        
        let word = await getWord();
        document.body.appendChild(word);
        words.push(word);
        word.addEventListener('animationend',event =>{
              
                hearts--;
                destroyHeart()
                word.remove()
                words.shift()
                if(hearts == 0){
                    counterController.stopCounter();
                    words.forEach(word => word.remove())
                    clearInterval(wordGenreatorID)
                    input.removeEventListener('input',trackPlayerInput)
                
                }

               

        })
        
        

    }, 3000)

    input.addEventListener('input',event =>{
        event.preventDefault();
        trackPlayerInput()
    })
             
        function trackPlayerInput(){
            
            let targtedWord = words[0].firstElementChild.textContent.toLowerCase();;
            if(targtedWord.startsWith(input.value.toLowerCase())){
               if(targtedWord.length === input.value.length ){
                 setTimeout(()=>{input.value = "";},100)
                 words.shift().remove();
               }
            }
            else{
                input.value = "";
            }
        }



  

}


export {gameLogic};