



class NumberGenerator {
    constructor(){

        this.value = 0;
        this.container = document.createElement("div")
        this.display = document.createElement("div");

        this.generateBtn = document.createElement("button");
        this.generateBtn.textContent = 'Generate';
        
        this.increaseBtn = document.createElement("button");
        this.increaseBtn.textContent = "↑";
        this.decreaseBtn = document.createElement("button");
        this.decreaseBtn.textContent = "↓";

        this.newsContainer = document.createElement("div")
        this.newsContainer.classList.add('news-container')
        this.container.appendChild(this.display);
        this.container.appendChild(this.increaseBtn);
        this.container.appendChild(this.generateBtn);
        this.container.appendChild(this.decreaseBtn);

        this.generateBtn.addEventListener("click", () => this.generate())
        this.increaseBtn.addEventListener("click", () => this.change("↑"))
        this.decreaseBtn.addEventListener("click", () => this.change("↓"))
        document.body.append(this.container)
        document.body.append(this.newsContainer)
    }



    generate(){

        this.value = Math.floor(Math.random() * 101);
        this.display.textContent = this.value;
        this.generateNews()
    }

    change(textContent){
        if (textContent == "↓"){
            this.value -= 1;
        }
        else if (textContent == "↑"){
            this.value += 1;
        }
        this.display.textContent = this.value
        this.generateNews()
    }

    generateNews(){
        while (this.newsContainer.hasChildNodes()) {
            this.newsContainer.removeChild(this.newsContainer.firstChild);
        }
        for(let i =0; i < this.value; i++){
        let newsblock = document.createElement("div");
        let title = document.createElement("h1")
        title.textContent = `Title #${i}`
        let newsContent = document.createElement("p");
        newsContent.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum vel lacus vitae gravida. Duis tempor, eros quis facilisis imperdiet, orci libero vehicula dui, at semper tortor enim sit amet justo. Suspendisse fringilla maximus felis vel lacinia. Nulla facilisi. Maecenas efficitur vestibulum lacus, in bibendum nulla gravida ac. Quisque porttitor mollis ex sed suscipit. Mauris ac auctor sapien, sed venenatis massa. Donec pretium lobortis sem quis vestibulum. In hac habitasse platea dictumst. Integer vel porta lectus. In id tellus laoreet, porta metus sed, interdum mi. Aenean interdum magna non dui varius pretium. Curabitur eu sodales dui. Nunc ultricies neque a hendrerit elementum.";
        let removeBtn = document.createElement("button")
        removeBtn.textContent = "Remove";
        
        newsblock.classList.add("news-block")
        
        newsblock.append(title)
        newsblock.append(newsContent);
        newsblock.append(removeBtn)

        removeBtn.addEventListener("click", () => this.remove(newsblock))
        
        this.newsContainer.append(newsblock)
        }
    }

    remove(container){
        container.remove();
        this.value -= 1;
        this.display.textContent = this.value
        this.generateNews()
    }
}