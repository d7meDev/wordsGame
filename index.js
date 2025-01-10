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

    input.addEventListener('input',event =>{trackPlayerInput(event)})
             
        function trackPlayerInput(event){
            event.preventDefult();
            let targtedWord = words[0].firstElementChild.textContent.toLowerCase();;
            console.log("here")
            if(targtedWord.startsWith(input.value.toLowerCase())){
               if(targtedWord.length === input.value.length ){
                 input.value = "";
                 words.shift().remove();
               }
            }
            else{
                input.value = "";
            }
        }



  

}

gameLogic();