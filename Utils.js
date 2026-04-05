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



export function timer(){

}


export function stopTimer(){

}