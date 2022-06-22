function solution() {
    const input = document.querySelector('input');
    const addGiftBtn = document.querySelector('button');

    const listOfGifts = document.querySelectorAll('.card ul')[0];
    const sentGifts = document.querySelectorAll('.card ul')[1];
    const discardedGifts = document.querySelectorAll('.card ul')[2];

    addGiftBtn.addEventListener('click', () =>{

        console.log(listOfGifts)
        console.log(sentGifts)
        console.log(discardedGifts)

        const li = createElement('li',input.value,'gift');
        const sendBtn = createElement('button','Send','','sendButton');
        sendBtn.addEventListener('click',()=>{
            sentGifts.appendChild(li);
            sendBtn.remove();
            discardBtn.remove();
        })

        const discardBtn = createElement('button','Discard','','discardButton');
        discardBtn.addEventListener('click',()=>{
            discardedGifts.appendChild(li);
            sendBtn.remove();
            discardBtn.remove();
        })

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);

        listOfGifts.appendChild(li);

        const liElements = Array.from(listOfGifts.querySelectorAll('li'));
        liElements.sort((e1,e2) => e1.textContent.localeCompare(e2.textContent));

        liElements.forEach(el => listOfGifts.appendChild(el));

        input.value = '';
    })


    function createElement(tag,content,className,id){
        const el = document.createElement(tag);

        if (content){
            el.textContent = content;
        }
        if (className){
            el.className = className;
        }
        if (id){
            el.id = id;
        }
        return el;
    }
}