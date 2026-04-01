



export class ColorButton{
    constructor(color){
        this.color = color

        
        

    } 

    show(){
        let buttoncontainer = document.createElement("div")
        buttoncontainer.textContent = this.color
        buttoncontainer.style.backgroundColor = this.color
        buttoncontainer.setAttribute("data-color", this.color);
        document.getElementById("colors").append(buttoncontainer)
    }

}