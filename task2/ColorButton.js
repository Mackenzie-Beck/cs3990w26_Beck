


export class ColorButton{
    constructor(color){
        this.color = color;

        this.container = document.createElement("div")
        this.container.style.backgroundColor = `hsl(${color}, 100%, 50%)`


        this.container.dataset.color = color
        this.container.classList.add("color-button")
    }
}