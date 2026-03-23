import {Button} from './myButton.js'


class ColorButton extends Button {
    constructor(btnText, btnBgColor, btnTitle, fColor) {
        this.btnText = btnText
        this.btnBgColor = btnBgColor
        this.btnTitle = btnTitle
        this.fColor = fColor
    }
    show(){
        document.write(`<p title="${this.btnTitle}" style="background-color:${this.btnBgColor}, color:${this.fColor}">${this.btnText}</p>`);
    }
}