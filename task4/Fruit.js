

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