

class News{
    constructor(titleTXT, imagePath, newstext){
        //data
        this.titleTXT = titleTXT
        this.imagePath = imagePath
        this.newstext = newstext
        this.likes = 0

        //DOM elements
        this.likeCounter = document.createElement('h2')
        this.news = document.createElement("div")
        this.title = document.createElement("h1")
        this.image = document.createElement('img')
        this.likeBtn = document.createElement('button')
        this.hideBtn = document.createElement('button')
        this.text = document.createElement("p")




    }


    render(){
        this.title.innerText = `${this.titleTXT}`
        this.image.setAttribute('src', `${this.imagePath}`)
        this.text.innerText = `${this.newstext}`

        
        this.likeBtn.innerText = "Click Me"
        this.likeBtn.onclick = () => this.inclikes()
        this.hideBtn.innerText = 'Hide'
        this.hideBtn.onclick = () => this.hide()

        this.news.appendChild(this.title)
        this.news.append(this.likeCounter)
        this.news.appendChild(this.image)
        this.news.appendChild(this.text)
        this.news.append(this.likeBtn)
        this.news.append(this.hideBtn)


        return this.news
    }

    inclikes(){
        this.likes += 1;
        this.likeCounter.innerHTML += '&#9824;'
        
    }

    hide(){
        this.image.style.opacity = "50%"

        this.title.style.color = "#5c6664"
        this.text.style.color = "#5c6664"

        this.news.style.backgroundColor = "#b8c2c0"

        this.likeBtn.disabled = true
    }

    show(container){
        let newsInstance = this.render()
        container.append(newsInstance)
    }
}

let arrResources = [
    {
        srcImage: 'src/images/1.jpeg',
        newsTitle: 'Title1',
        newsContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam ligula a viverra fermentum. Pellentesque lobortis dui a dui malesuada viverra a nec enim. Nam. '

    },

    {
        srcImage: 'src/images/2.jpeg',
        newsTitle: 'title2',
        newsContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum libero in metus rutrum, et consectetur diam commodo. Aliquam ultricies metus elementum nunc molestie, non sagittis enim dapibus. Aenean sagittis at arcu non imperdiet. Ut nunc ligula, pellentesque ac congue. '
    },

    {
        srcImage: 'src/images/3.jpeg',
        newsTitle: 'title3',
        newsContent: 'Lorem ipsum dolor sit amllentesque ac congue. '
    }
];



function generatenews(){
    let content = document.getElementById('content')
    let allPelements = content.querySelectorAll('p')
    
    for(let i = 0; i < allPelements.length; i++){
        let newInstance = new News(arrResources[i].newsTitle, arrResources[i].srcImage, arrResources[i].newsContent)
        newInstance.show(allPelements[i])
    }
}


document.getElementById('myBtn').onclick = generatenews