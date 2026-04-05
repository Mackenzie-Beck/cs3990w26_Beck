import {questions, assets} from "./Data.js"



export function arrShuffle(){
    let allCards = [];
    allCards.push(...questions);
    allCards.push(...assets);
    for (let i = allCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        [allCards[i], allCards[j]] = [allCards[j], allCards[i]]; // Swap elements
    }
    return allCards;
}



export function timer(time){
    let timeContainer = document.createElement("div")
    timeContainer.textContent = time
    const interval = setInterval(function () {
        time = time - 1
        timeContainer.textContent = time
        if(time <=0){
            stopTimer(interval)
        }

    }, 1000)

    document.getElementById("title").append(timeContainer)

}


export function stopTimer(interval){
    console.log("stopTimer")
    clearInterval(interval)
    document.getElementById("cardContainer").classList.add("hidden")
    let game_over = document.createElement("h1")
    game_over.textContent = "Game Over!"
    document.getElementById("title").append(game_over)
}