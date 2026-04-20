

export class Item{
    constructor(name, image, content){
        this.name = name
        this.img = image
        this.content = content
    }
    render(){
        this.block = document.createElement("div");
        this.header = document.createElement("h1");
        this.header.textContent = this.name;
        this.image = document.createElement("img");
        this.image.src = this.img;
        this.paragraph = document.createElement("p");
        this.paragraph.textContent = this.content;
        this.block.appendChild(this.header);
        this.block.appendChild(this.image);
        this.block.appendChild(this.paragraph);

        return this.block
    }

}