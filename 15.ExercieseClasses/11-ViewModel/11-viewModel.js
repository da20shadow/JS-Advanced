class TextBox {

    constructor(selector, regex) {
        this._value = '';
        this._elements = Array.from(document.querySelectorAll(selector));
        this._invalidSymbols = regex;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        this.elements.forEach(el => el.value = value);
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }
}

const firstInput = document.querySelectorAll('input')[0];
const secondInput = document.querySelectorAll('input')[1];


let textBox1 = new TextBox('.textbox', /^[a-z]+$/);
textBox1.value = 'Something';
// let textBox2 = new TextBox(secondInput,/^[a-z]+$/);
