



export class DropDownMenu{
    constructor(title, options){

        this.options = options

        this.container = document.createElement("div")
        this.title = document.createElement("h1")
        this.title.textContent = title
        this.title.classList.add("menu-header")

        this.container.append(this.title)
        this.title.addEventListener("click", this)

        document.body.append(this.container)
    }

    handleEvent(event){

        this.title.classList.toggle("open");
    }
}