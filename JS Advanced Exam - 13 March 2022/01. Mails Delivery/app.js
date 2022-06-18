function solve() {

    const recipientNameInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');

    const listMails = document.getElementById('list');
    const sentMails = document.querySelector('.sent-list');
    const trash = document.querySelector('.delete-list');

    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');

    resetBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        recipientNameInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    })

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (recipientNameInput.value && titleInput.value && messageInput.value ){

            const recipient = recipientNameInput.value;
            const title = titleInput.value;
            const message = messageInput.value;

            const li = createElement('li');

            li.appendChild(createElement('h4',`Title: ${title}`));
            li.appendChild(createElement('h4',`Recipient Name: ${recipient}`));
            li.appendChild(createElement('span',message));

            const div = createElement('div','','','list-action');
            const sendBtn = createElement('button','Send','','send','type submit');
            const delBtn = createElement('button','Delete','','delete','type submit');

            delBtn.addEventListener('click',()=>{

                li.remove();
                const deletedMsg = createElement('li');
                deletedMsg.appendChild(createElement('span',`To: ${recipient}`))
                deletedMsg.appendChild(createElement('span',`Title: ${title}`))
                trash.appendChild(deletedMsg);

            })


            sendBtn.addEventListener('click', ()=>{
                li.remove();
                const sentLi = createElement('li');
                sentLi.appendChild(createElement('span',`To: ${recipient}`));
                sentLi.appendChild(createElement('span',`Title: ${title}`));
                const sentDiv = createElement('div','','btn');
                const delButton = createElement('button','Delete','delete','','type submit');
                delButton.addEventListener('click',()=>{
                    sentDiv.remove();
                    trash.appendChild(sentLi);
                })
                sentDiv.appendChild(delButton);
                sentLi.appendChild(sentDiv);

                sentMails.appendChild(sentLi);
            })

            div.appendChild(sendBtn);
            div.appendChild(delBtn);
            li.appendChild(div);

            listMails.appendChild(li);

            recipientNameInput.value = '';
            titleInput.value = '';
            messageInput.value = '';

        }
    })

    function createElement(tag,content,className,id,attribute){
        let el = document.createElement(tag);

        if (content){
            el.textContent = content;
        }

        if (className){
            el.className = className;
        }

        if (id){
            el.id = id;
        }

        if (attribute){
            const [type, value] = attribute.split(' ');
            el.setAttribute(type,value)
        }

        return el;
    }

}
solve()