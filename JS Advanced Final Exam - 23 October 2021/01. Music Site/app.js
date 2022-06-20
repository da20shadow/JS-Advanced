window.addEventListener('load', solve);

function solve() {

    const genreInput = document.getElementById('genre');
    const nameInput = document.getElementById('name');
    const authorInput = document.getElementById('author');
    const dateInput = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');

    const allHitsContainer = document.querySelector('.all-hits-container');
    const savedContainer = document.querySelector('.saved-container');
    const totalLikes = document.querySelector('.likes p');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const genre = genreInput.value;
        const name = nameInput.value;
        const author = authorInput.value;
        const date = dateInput.value;

        if (genre && name && author && date) {

            const div = createElement('div', '', 'hits-info');
            div.appendChild(createElement('img', '', '', 'src ./static/img/img.png'));
            div.appendChild(createElement('h2', `Genre: ${genre}`));
            div.appendChild(createElement('h2', `Name: ${name}`));
            div.appendChild(createElement('h2', `Author: ${author}`));
            div.appendChild(createElement('h3', `Date: ${date}`));

            const saveSongBtn = createElement('button', 'Save song', 'save-btn');
            saveSongBtn.addEventListener('click', () => {
                savedContainer.appendChild(div);
                likeSongBtn.remove();
                saveSongBtn.remove();
            })

            const likeSongBtn = createElement('button', 'Like song', 'like-btn');
            likeSongBtn.addEventListener('click', () => {
                likeSongBtn.setAttribute('disabled', true);
                let likes = Number(totalLikes.textContent.split(' ')[2]);
                likes++;
                totalLikes.textContent = `Total Likes: ${likes}`;
            })


            const deleteSongBtn = createElement('button', 'Delete', 'delete-btn');
            deleteSongBtn.addEventListener('click', () => {
                div.remove();
            })


            div.appendChild(saveSongBtn);
            div.appendChild(likeSongBtn);
            div.appendChild(deleteSongBtn);

            allHitsContainer.appendChild(div);

            genreInput.value = '';
            nameInput.value = '';
            authorInput.value = '';
            dateInput.value = '';
        }

    })

    function createElement(tag, content, className, attr, id) {
        const el = document.createElement(tag);
        if (content) {
            el.textContent = content
        }
        if (className) {
            el.className = className
        }
        if (attr) {
            const [type, value] = attr.split(' ');
            el.setAttribute(type, value);
        }
        if (id) {
            el.id = id
        }
        return el;
    }

}


Unexpected
error: expected
'<img src="./static/img/img.png">' +
'<h2>Genre:Pop</h2>' +
'<h2>Name:PondeReplay</h2>' +
'<h2>Author:Rihanna</h2>' +
'<h2>Date:26.11.2009</h2>' +
'<button class="save-btn">Savesong</button>' +
'<button class="like-btn">Likesong</button>' +
'<button class="delete-btn">Delete</button>'
to
equal
'<img src="./static/img/img.png">' +
'<h2>Genre:Pop</h2>' +
'<h2>Name:PondeReplay</h2>' +
'<h2>Author:Rihanna</h2>' +
'<h3>Date:26.11.2009</h3>' +
'<buttonclass="save-btn">Savesong</button>' +
'<buttonclass="like-btn">Likesong</button>' +
'<buttonclass="delete-btn">Delete</button>'