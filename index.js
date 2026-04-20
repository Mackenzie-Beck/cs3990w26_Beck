import {hannaData, hannaMenu} from "Data.js"
import { MenuItem } from "MenuItem.js";
import {Item} from "Item.js"

const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = './Style.css'; 
document.head.appendChild(link);


$(document).ready(function(){


    $("#menu").css("background-color","#575757");
    $("h3").addClass("menuButton")
    $("h3").addClass("menuButton::hover")

    let menuList = document.createElement("ul")
    menuList.id = "menuList"
    menuList.classList.add("menuList")
    $("#menu").append(menuList)

    hannaMenu.forEach(function(data){
        let menuItem = new MenuItem(data.name, data.iconSrc)
        console.log(menuItem)
        $("#menuList").append(menuItem)

    })


$(document).on('click', 'h3', function(event){


$(".menuItem").each(function(index, element) {

    //console.log("Index: " + index + " ID: " + this.id);
    let icon = document.createElement("p")
    console.log(this.name)
    icon.textContent = this.name
    this.append(icon)
});

})



$(document).on('click', '.menuItem', function(event){
    // Cache the clicked element
    let clickedText = $(event.target).text().trim(); // Use .trim() to remove whitespace
    console.log(clickedText);
    $('#main').empty()
    hannaData.forEach(function(data){
        
        // Use the cached text here
        if (data.item === clickedText){
            console.log("test");
            let item = new Item(data.item, data.img, data.content);
            let renderItem = item.render();
            $("#main").append(renderItem);
        }
    });
});


});

