function solve() {
    const inputs = {
        title: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date'),
    }
    const sections = Array.from(document.querySelectorAll('section'));
    const [_,open, inProgress ,completed] = sections;

    const addTaskBtn = document.getElementById('add');
    addTaskBtn.addEventListener('click',addTask);

    function addTask(e){
        e.preventDefault();

        if (inputs.title.value === '' || inputs.description.value === '' || inputs.date.value === ''){
            return;
        }

        const article = createElement('article');
        article.appendChild(createElement('h3',inputs.title.value));
        article.appendChild(createElement('p',`Description: ${inputs.description.value}`));
        article.appendChild(createElement('p',`Due Date: ${inputs.date.value}`));
        const div = createElement('div','','flex');
        const startBtn = (createElement('button','Start','green',changeStatusInProgress));
        const deleteBtn = createElement('button','Delete','red',deleteTask);
        const finishBtn = createElement('button','Finish','orange',markAsCompleted);
        div.appendChild(startBtn);
        div.appendChild(deleteBtn);
        article.appendChild(div);

        open.children[1].appendChild(article);

        Object.values(inputs).forEach(i => i.value = '');

        function changeStatusInProgress(e){
            div.appendChild(finishBtn);
            inProgress.children[1].appendChild(article);
            e.currentTarget.remove();
        }

        function deleteTask(){
            article.remove();
        }

        function markAsCompleted(){
            div.remove();
            completed.children[1].appendChild(article);
        }
    }

    function createElement(tag,textContent,className,eventListener){

        let element = document.createElement(tag);

        if (textContent){
            element.textContent = textContent;
        }
        if (className){
            element.className = className;
        }
        if (eventListener){
            element.addEventListener('click',eventListener);
        }

        return element;
    }
}
