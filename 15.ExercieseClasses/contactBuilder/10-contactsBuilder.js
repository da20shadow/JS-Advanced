class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    set online(value) {
        this._online = value;
        if (this.online === true && this.titleDiv) {
            this.titleDiv.classList.add('online');
        } else if (this.titleDiv) {
            this.titleDiv.classList.remove('online');
        }
    }

    get online() {
        return this._online;
    }

    render(id) {
        const el = document.querySelector(`#${id}`);

        const art = document.createElement('article');
        const titleDiv = document.createElement('div');
        const button = document.createElement('button');
        const infoDiv = document.createElement('div');
        const phoneSpan = document.createElement('span');
        const emailSpan = document.createElement('span');

        this.titleDiv = titleDiv;
        this.online === true ? this.titleDiv.classList.add('online') : '';

        titleDiv.classList.add('title');
        infoDiv.classList.add('info');
        infoDiv.style.display = 'none';
        titleDiv.textContent = `${this.firstName} ${this.lastName}`;
        phoneSpan.innerHTML = `&phone; ${this.phone}`;
        emailSpan.innerHTML = `&#9993; ${this.email}`;
        button.innerHTML = '&#8505;';
        button.addEventListener('click', () => {
            infoDiv.style.display === 'block'
                ? infoDiv.style.display = 'none'
                : infoDiv.style.display = 'block';
        });

        titleDiv.appendChild(button);
        infoDiv.appendChild(phoneSpan);
        infoDiv.appendChild(emailSpan);
        art.appendChild(titleDiv);
        art.appendChild(infoDiv);

        el.appendChild(art);
    }
}


// class Contact {
//     constructor(firstName,lastName,phone,email) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.phone = phone;
//         this.email = email;
//         this.online = false;
//     }
//
//     // set online(value){
//     //     this._online = value;
//     //     if (this.online === true){
//     //         document.querySelector('.title').classList.add('online');
//     //     }else {
//     //         document.querySelector('.title').classList.remove('online');
//     //     }
//     // }
//     //
//     // get online(){
//     //     return this._online;
//     // }
//
//     generateHtml(){
//
//         let article = document.createElement('article');
//         let title = document.createElement('div');
//         title.classList.add('title');
//         this.online ? title.classList.add('online') : '';
//         title.textContent = `${this.firstName} ${this.lastName}`;
//         let button = document.createElement('button');
//         button.innerHTML = '&#8505;';
//         button.addEventListener('click',show);
//         title.appendChild(button);
//         let info = document.createElement('div');
//         info.classList.add('info');
//         info.style.display = 'none';
//         let phone = document.createElement('span');
//         phone.textContent = '\u260E' + this.phone;
//         info.appendChild(phone);
//         let email = document.createElement('span');
//         email.innerHTML = `&#9993; ${this.email}`
//         info.appendChild(email);
//         article.appendChild(title);
//         article.appendChild(info);
//
//         function show(){
//
//             if (info.style.display === 'none'){
//                 info.style.display = 'block';
//             }else {
//                 info.style.display = 'none';
//             }
//
//         }
//         return article;
//     }
//
//     render(id){
//         document.getElementById(id).appendChild(this.generateHtml());
//     }
// }