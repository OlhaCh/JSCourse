window.addEventListener('DOMContentLoaded', function () {
    class options {
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign
        }
        newDiv(text = 'hello') {
            let el = document.createElement('div');
            el.textContent = text;
            document.body.appendChild(el);
            let newStyle = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}; text-align:${this.textAlign}; `
            el.style.cssText = newStyle;

        }
    }
const nObj=new options(200, 200, 'blue', 20, 'center');
nObj.newDiv('gfhgfghf');
});