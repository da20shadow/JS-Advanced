function solve() {
    const creatorInput = document.getElementById('creator');
    const titleInput = document.getElementById('title');
    const categoryInput = document.getElementById('category');
    const contentInput = document.getElementById('content');

    const articleList = document.querySelector('main section');

    const createBtn = document.querySelector('.create');

    createBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const creator = creatorInput.value;
        const title = titleInput.value;
        const category = categoryInput.value;
        const content = contentInput.value;

        const article = createElement('article');

        const div = createElement('div','','buttons');
        const delBtn = createElement('button','Delete','btn delete');
        delBtn.addEventListener('click',()=>{
            article.remove();
        })

        const archiveBtn = createElement('button','Archive','btn archive');
        archiveBtn.addEventListener('click',()=>{
            article.remove();
            document.querySelector('.archive-section ol')
                .appendChild(createElement('li',title));
            const titles = Array.from(document.querySelectorAll('.archive-section ol li'));
            titles.sort((li1,li2) => li1.textContent.localeCompare(li2.textContent));

            appendCh(titles,document.querySelector('.archive-section ol'));
        })

        div.appendChild(delBtn);
        div.appendChild(archiveBtn);

        const children = [];
        children.push(createElement('h1',title),
            createElement('p','Category:','',`strong ${category}`),
            createElement('p','Creator:','', `strong ${creator}`),
            createElement('p',content),div)

        appendCh(children,article);

        articleList.appendChild(article);

        creatorInput.value = '';
        titleInput.value = '';
        categoryInput.value = '';
        contentInput.value = '';
    })

    function createElement(tag,content,className,child){
        const el = document.createElement(tag);
        if (content){
            el.textContent = content;
        }
        if (className){
            el.className = className;
        }
        if (child){
            const c = child.split(' ');
            const cLen = c.length;

            const theTag = c[0];
            const theChild = document.createElement(theTag)

            if (cLen === 2){
                theChild.textContent = c[1];
            }

            if (cLen === 3){
                theChild.className = c[2];
            }
            el.appendChild(theChild);
        }
        return el;
    }
    function appendCh(childArr,parent){
        childArr.forEach(c => {
            parent.appendChild(c);
        })
    }

}
