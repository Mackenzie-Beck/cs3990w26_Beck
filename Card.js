import {stopTimer} from "./Utils.js"




export class Card {
    constructor(question, options, correctAnswer){
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.done = false
    }
 
    render(){
        this.cardDiv = document.createElement("div");
        let question = document.createElement("p");
        question.textContent = this.question;
        let checkBtn = document.createElement("button");
        checkBtn.setAttribute("type", "button");
        checkBtn.textContent = "Check";

        this.cardDiv.appendChild(question);
        this.cardDiv.classList.add("card")
        this.cardDiv.classList.add("hidden")  // Start hidden



        this.options.forEach((option, index) => {
            let label = document.createElement("label");

            let radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "answer");
            radio.setAttribute("value", option);
            radio.setAttribute("id", `option-${index}`);

            label.setAttribute("for", `option-${index}`);
            label.appendChild(radio);
            label.append(option);

            this.cardDiv.appendChild(label);
        });

        checkBtn.onclick = () => {
            if (this.cardDiv.querySelector('input[name="answer"]:checked').value){
                const selected = this.cardDiv.querySelector('input[name="answer"]:checked').value;
                console.log(selected == this.correctAnswer)
                if(selected == this.correctAnswer){
                    this.done = true
                    const starIcon = document.createElement("i");
                    starIcon.className = "fas fa-star";
                    document.getElementById("stars").appendChild(starIcon);
                }
            }
        };

        this.cardDiv.appendChild(checkBtn);

        return this.cardDiv;
    }

    show(container){
        // insert block built by render into dom
        container.appendChild(this.render());
    }
}


export class AssetCard {
    constructor(asset, description){
        this.asset = asset
        this.description = description
    }

    render(){
        this.cardDiv = document.createElement("div");
        let asset = document.createElement("p");
        asset.innerHTML = this.asset;  // Changed from textContent to innerHTML
        this.cardDiv.append(asset)

        let description = document.createElement("p");
        description.textContent = this.description;
        this.cardDiv.append(description)

        this.cardDiv.classList.add("card")
        this.cardDiv.classList.add("hidden")  // Start hidden

        return this.cardDiv;
    }

    changeState(){
        const stars = document.getElementById("stars");
        if (this.asset == '<i class="fa-solid fa-gem"></i>'){
            console.log("gem!")
            const starIcon = document.createElement("i");
            starIcon.className = "fas fa-star";
            stars.appendChild(starIcon);
        }
        else if (this.asset == '<i class="fa-solid fa-paw"></i>'){
            console.log("Bear!")
            const lastStar = stars.querySelector("i:last-of-type");
            if (lastStar) {
                stars.removeChild(lastStar);
            }
        }
        else if (this.asset== '<i class="fa-solid fa-circle-xmark" style="color: red;"></i>'){
            document.getElementById("cardContainer").classList.add("hidden")
            let game_over = document.createElement("h1")
            game_over.id = "GameOver"
            game_over.textContent = "Game Over!"
            document.getElementById("title").append(game_over)
        }
    }

    show(container){
        // insert block built by render into dom
        container.appendChild(this.render());
    }
}