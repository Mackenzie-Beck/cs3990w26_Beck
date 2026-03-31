



export class DropDownMenu{
    constructor(title, options){

        this.options = options

        this.container = document.createElement("div")
        this.listContainer = document.createElement("div")
        this.title = document.createElement("h1")
        this.title.textContent = title
        this.title.classList.add("menu-header")

        this.imageContainer = document.createElement("div");
        // this.imageContainer.textContent = "Test"
        

        this.listContainer.append(this.title)
        this.container.append(this.listContainer)
        this.container.append(this.imageContainer)
        this.title.addEventListener("click", this)

        document.body.append(this.container)
    }

    handleEvent(event){
        
        if (event.target == this.title){
            this.title.classList.toggle("open");
            //generate list of elements 

            if (this.title.classList.contains("open")){
                this.menuItems = document.createElement("div");
                for(let i =0; i < this.options.length; i++){
                    let container = document.createElement("div");
                    let content = document.createElement("p");
                    content.classList.add("menu-item")
                    content.textContent = this.options[i]
                    container.append(content)
                    this.container.append(container)
                    this.menuItems.append(container);
                    
                }
                this.listContainer.append(this.menuItems);
                this.menuItems.addEventListener("click", this)
            }
            else{
                if (this.menuItems) {
                    this.menuItems.remove();
                    for (let child of this.imageContainer.querySelectorAll("img")){
                    child.remove()
                }
                    }
            }
        }
        else if (event.target.tagName === "P" && this.menuItems.contains(event.target)) {
            for (let child of this.menuItems.querySelectorAll("p")){
                child.classList.remove("menu-item-selected");
            }
            event.target.classList.toggle("menu-item-selected");
            for (let child of this.imageContainer.querySelectorAll("img")){
                child.remove()
            }
            let sweetImage = document.createElement("img")
            sweetImage.setAttribute("src", `./images/${event.target.textContent}.jpeg`)
            this.imageContainer.append(sweetImage)
            console.log(`./images/${event.target.textContent}.jpeg`)
        }



    }
}