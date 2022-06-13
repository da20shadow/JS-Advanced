class Employee {
    #parent = null;
    #card = null;

    constructor(firstName,lastName,occupation,imgUrl,parentId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;
        this.imgUrl = imgUrl;
        this.#parent = document.getElementById(parentId);
    }

    generateCardHtml(){
        this.#card = document.createElement('div');
        this.#card.classList.add('card');

        let img = document.createElement('img');
        img.src = this.imgUrl;
        img.setAttribute('alt','Avatar');

        let div = document.createElement('div');
        div.classList.add('container');

        let h4 = document.createElement('h4');
        h4.textContent = `${this.firstName} ${this.lastName}`;

        let p = document.createElement('p');
        p.textContent = this.occupation;

        div.appendChild(h4);
        div.appendChild(p);

        this.#card.appendChild(img);
        this.#card.appendChild(div);

        return this.#card;
    }

    

    render(){
        this.#parent.appendChild(this.generateCardHtml());
    }
}