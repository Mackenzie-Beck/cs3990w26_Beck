import {Button} from './myButton.js'


export class ColorButton extends Button {
    constructor(btnText, btnBgColor, btnTitle, fColor) {
        super(btnText, btnBgColor, btnTitle)
        this.fColor = fColor
    }
    show(){
         document.body.innerHTML += `<p title="${this.btnTitle}" style="background-color:${this.btnBgColor}; color:${this.fColor}; border:3px solid black; display: inline; margin: 10px">${this.btnText}</p>`;
    }
}