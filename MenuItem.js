export class MenuItem{
    constructor(name, iconSrc){
        this.name = name;
        this.iconSrc = iconSrc;
        this.menuItem = document.createElement("li")

        //this.icon = document.createElement("p")


        //this.icon.textContent = this.iconSrc
        this.menuItem.textContent = this.iconSrc
        this.menuItem.classList.add("menuItem")
        this.menuItem.name = this.name
        


        //container.append(this.icon)
        //container.append(this.menuItem)
        return this.menuItem


    }


    render(){
        //this.container = document.createElement("div")
        this.menuItem = document.createElement("li")

        //this.icon = document.createElement("p")


        //this.icon.textContent = this.iconSrc
        this.menuItem.textContent = this.name
        this.menuItem.classList.add("menuItem")


        //container.append(this.icon)
        //container.append(this.menuItem)
        return this.menuItem
    }


    showText(){
        this.menuItem.classList.add("showText")
    }
}