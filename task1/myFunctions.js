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
    let i = 1
        arrButtons.forEach((button) => {
            setTimeout(() => button.show(), i*1000)
            i = i+1    
        })
}


export function displayColorButton(){
    let newCBtn = new ColorButton(arrTexts[0], arrColors[0], 'colorBtn', arrColors[2])
    setTimeout(() => newCBtn.show(), 5000)
}