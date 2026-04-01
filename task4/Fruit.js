

export class Fruit{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }


    show(){
        let fruitContainer = document.createElement("li");
        fruitContainer.style.backgroundColor = this.color;
        fruitContainer.textContent = this.name;
        fruitContainer.setAttribute("data-color", this.color);
        document.getElementById("fruits").querySelector("ul").appendChild(fruitContainer);
    }

}



export class RatedFruit extends Fruit {
    constructor(name, color, initialRank){
        super(name,color)
        this.rating = initialRank
    }


    show(){
        let fruitContainer = document.createElement("li");
        fruitContainer.style.backgroundColor = this.color;
        fruitContainer.textContent = this.name;
        fruitContainer.setAttribute("data-color", this.color);

        let ratingdiv = document.createElement("div")
        let ratingtext = document.createElement("div")
        ratingtext.textContent = "Rating: "
        let starDiv = document.createElement("div")
        ratingdiv.append(ratingtext)
        ratingdiv.append(starDiv)

        // Add 5 stars
        for (let i = 1; i <= 5; i++) {
            let star = document.createElement("span");
            star.textContent = "★";
            star.classList.add("star");
            if (i <= this.rating) {
                star.classList.add("orange");
            }
            starDiv.appendChild(star);
        }

        fruitContainer.appendChild(ratingdiv);
        document.getElementById("fruits").querySelector("ul").appendChild(fruitContainer);
    }
}