import {Button} from './myButton.js'
import {ColorButton} from "./myColorButton.js"
import {arrTexts, arrButtons, arrColors} from './myArrays.js'


export function generateButtons(){
        arrTexts.forEach((element, i) => {
            let newBtn = new Button(element, arrColors[i])
            arrButtons.push(newBtn)
        })
    }



export function displayButtons(){
        arrButtons.forEach((button) => {
            button.show()
        })
}


export function displayColorButton(){
    let newCBtn = new ColorButton(arrTexts[0], arrColors[0], 'colorBtn', arrColors[2])
    newCBtn.show()
}