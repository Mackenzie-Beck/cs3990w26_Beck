import { ColorButton } from "./ColorButton.js"



export class PaletteMenu{
    constructor(numColors){
        this.container = document.createElement("div")
        this.numColors = numColors
        for(let i=0; i< numColors; i++){
            let colorVal = i * 10;
            let btn = new ColorButton(colorVal)
            this.container.append(btn.container)
        }

        this.container.classList.add("palette-menu")

        this.container.addEventListener("click", this)
        this.container.addEventListener("mouseover", this)
        document.body.append(this.container)
    }


    handleEvent(event){
        if (event.target.dataset.color){
            let colorVal = event.target.dataset.color
                if (event.type == "click"){
                    let block = document.getElementById("content")
                    block.style.color = `hsl(${colorVal}, 100%, 50%)`
                }
                else if(event.type == "mouseover"){
                    let block = document.getElementById("content")
                    block.style.backgroundColor = `hsl(${colorVal}, 100%, 50%)`
                }
        }
    }
}