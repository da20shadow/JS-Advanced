window.addEventListener('load', solve);

function solve() {

    const clientNameInput = document.getElementById('client-name');
    const clientPhoneInput = document.getElementById('client-phone');
    const descriptionInput = document.getElementById('description');
    const productTypeSelect = document.getElementById('type-product');

    const receivedOrders = document.getElementById('received-orders');
    const completedOrders = document.getElementById('completed-orders');
    const clearBtn = document.querySelector('.clear-btn');
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = clientNameInput.value;
        const phone = clientPhoneInput.value;
        const description = descriptionInput.value;
        const product = productTypeSelect.value;

        if (name && phone && description) {

            const div = createElement('div', '', 'container');
            div.appendChild(createElement('h2', `Product type for repair: ${product}`));
            div.appendChild(createElement('h3', `Client information: ${name}, ${phone}`));
            div.appendChild(createElement('h4', `Description of the problem: ${description}`));

            const startBtn = createElement('button', 'Start repair', 'start-btn');
            startBtn.addEventListener('click', () => {
                startBtn.setAttribute('disabled', true);
                finishBtn.removeAttribute('disabled');
            })

            const finishBtn = createElement('button', 'Finish repair', 'finish-btn', 'disabled true');
            finishBtn.addEventListener('click', () => {
                startBtn.remove();
                finishBtn.remove();
                completedOrders.appendChild(div);
            })


            div.appendChild(startBtn);
            div.appendChild(finishBtn);

            receivedOrders.appendChild(div);

            clientNameInput.value = '';
            clientPhoneInput.value = '';
            descriptionInput.value = '';
        }

    })

    clearBtn.addEventListener('click',()=>{
        const allCompletedOrders = Array.from(completedOrders.querySelectorAll('.container'));
        allCompletedOrders.forEach(el => {
            el.remove();
        })
    })

    function createElement(tag, content, className, attr) {
        const el = document.createElement(tag);

        if (content) {
            el.textContent = content;
        }

        if (className) {
            el.className = className;
        }

        if (attr) {
            const [type, value] = attr.split(' ');
            el.setAttribute(type, value);
        }

        return el;
    }

}