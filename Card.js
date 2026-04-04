




export class Card {
    constructor(question, options, correctAnswer){
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
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
            const selected = this.cardDiv.querySelector('input[name="answer"]:checked').value;
            console.log(selected == this.correctAnswer)
        };

        this.cardDiv.appendChild(checkBtn);

        return this.cardDiv;
    }

    show(container){
        // insert block built by render into dom
        container.appendChild(this.render());
    }
}