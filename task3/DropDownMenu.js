



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
                this.container.append(this.menuItems);
                this.menuItems.addEventListener("click", this)
            }
            else{
                if (this.menuItems) {
                    this.menuItems.remove();
                }
            }
        }
        else if (event.target.tagName === "P" && this.menuItems.contains(event.target)) {
            for (let child of this.menuItems.querySelectorAll("p")){
                child.classList.remove("menu-item-selected");
            }
            event.target.classList.toggle("menu-item-selected");
        }



    }
}