class TextBox {

    //TODO: Да видя дали ми са отговорили питах ги какво се иска че в условието не е ясно
    constructor(selector, regex) {
        this.selector = Array.from(document.querySelectorAll(selector));

        this._elements = [];

        this.selector.forEach(el => {
            el.addEventListener('change', (e) => {
                this._value = e.currentTarget.value;
                console.log(this.isValid())
            })
            this._elements.push(el);
        })

        this._invalidSymbols = regex;

    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return this._invalidSymbols.test(this.value);
    }
}

const firstInput = document.querySelectorAll('input')[0];
const secondInput = document.querySelectorAll('input')[1];


let textBox1 = new TextBox('.textbox', /^[a-z]+$/);
// let textBox2 = new TextBox(secondInput,/^[a-z]+$/);
