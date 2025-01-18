import { Counter } from './counter.js';
import { getWord } from './wordsGenreator.js';
import { destroyHeart } from './heart_destroy.js';

const words = [];
let score = 0;
let hearts = 3;
const counterController = Counter();
const inputWord = document.querySelector("input");



async function gameLogic() {
    counterController.startCounter();
    inputWord.focus()
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
                    inputWord.removeEventListener('input',trackPlayerinputWord)
                
                }

               

        })
        
        

    }, 3000)

    inputWord.addEventListener('input',event =>{
        event.preventDefault();
        trackPlayerinputWord()
    })
             
        function trackPlayerinputWord(){
            
            let targtedWord = words[0].firstElementChild.textContent.toLowerCase();;
            if(targtedWord.startsWith(inputWord.value.toLowerCase())){
               if(targtedWord.length === inputWord.value.length ){
                 setTimeout(()=>{inputWord.value = "";},100)
                 words.shift().remove();
               }
            }
            else{
                inputWord.value = "";
            }
        }



  

}


export {gameLogic};