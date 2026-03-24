export class Button {
    constructor(btnText, btnBgColor, btnTitle) {
        this.btnText = btnText
        this.btnBgColor = btnBgColor
        this.btnTitle = btnTitle
    }

    show(){
        document.body.innerHTML += `<p title="${this.btnTitle}" style="background-color:${this.btnBgColor}; border:3px solid black; display: inline; margin: 10px">${this.btnText}</p>`;
    }
}