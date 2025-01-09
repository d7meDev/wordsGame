const counter = document.querySelector(".header .counter h1");
function Counter(){
   function startCounter(){
      const startTime = Date.now();
      const counterID = setInterval(updateTime,1);
      function updateTime(){
         const currentTime = new Date(Date.now() - startTime);
          
          counter.textContent = `${currentTime.getMinutes()}:${currentTime.getSeconds().toString().padStart(2,"0")}`;
     
        }
   }
    


   

   function stopCounter(){
      clearInterval(counterID);
   }

   return {startCounter,stopCounter};
}

export {Counter};