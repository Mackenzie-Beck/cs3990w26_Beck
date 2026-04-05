




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


    show(container){
        // insert block built by render into dom
        container.appendChild(this.render());
    }
}