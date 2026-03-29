



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
        //generate list of elements 

        if (this.title.classList.contains("open")){
            this.menuItems = document.createElement("div");
            for(let i =0; i < this.options.length; i++){
                let container = document.createElement("div");
                let content = document.createElement("p");
                content.textContent = this.options[i]
                container.append(content)
                this.container.append(container)
                this.menuItems.append(container);

            }
            this.container.append(this.menuItems);
        }
        else{
            if (this.menuItems) {
                this.menuItems.remove();
            }
        }


    }
}