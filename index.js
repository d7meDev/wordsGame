import { Counter } from './counter.js';
import { getWord } from './wordsGenreator.js';
import { destroyHeart } from './heart_destroy.js';

const words = [];
let score = 0;
let hearts = 3;
const counterController = Counter();


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
                }
             

        })
        
        

    }, 3000)

  

}

gameLogic();