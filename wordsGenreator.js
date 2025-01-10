
async function genreateWord() {
let word = "";
let succses = false;
while(!succses){
    try {
        const res = await fetch(`https://random-word-api.vercel.app/api?words=1&length=${(Math.floor(Math.random() * 5)) + 3}`);
        if(!res.ok){
            throw new Error("rseponse did not succeed")
        }
        const data = await res.json();
        [word] = data;

        succses = true;
        
    }

    catch(error){
        
        console.error("try again!")
    }
}

  return word;
    
}
async function getWord(){
    const wordBox = document.createElement("div");
    wordBox.classList.add("word-box")
    let postion = Math.floor((Math.random() * 31)) + 30;
    wordBox.style.left= `${postion}%`
    wordBox.style.transform = `trasnlateX(-${postion}%)`
    let word = await genreateWord();
    word = word.charAt(0).toUpperCase() + word.substring(1);
    wordBox.innerHTML = `<h3>${word}</h3>
                        <img src="Bubble.png" alt="">`;
    return wordBox;
}

export {getWord};
