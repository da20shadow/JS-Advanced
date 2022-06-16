window.addEventListener('load', solve);

function solve() {
    const addBtn = document.getElementById('add');
    let modelInput = document.getElementById('model');
    let yearInput = document.getElementById('year');
    let priceInput = document.getElementById('price');
    let descriptionInput = document.getElementById('description');
    let totalPrice = document.querySelector('.total-price');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (modelInput.value === '' || yearInput.value === '' || priceInput.value === '' || descriptionInput.value === '') {
            return;
        }

        if (Number(yearInput.value) < 0 || Number(priceInput.value) < 0) {
            return;
        }

        let price = Number(priceInput.value).toFixed(2);
        let model = modelInput.value;
        let year = yearInput.value;
        let description = descriptionInput.value;


        const tr = createElement('tr', '', 'info');
        const modelTd = createElement('td', model);
        const priceTd = createElement('td', price);

        tr.appendChild(modelTd);
        tr.appendChild(priceTd);

        const actionsTd = createElement('td');
        const moreBtn = createElement('button', 'More Info', 'moreBtn');
        moreBtn.addEventListener('click', () => {
            if (moreBtn.textContent === 'More Info') {
                moreBtn.textContent = 'Less Info';
                infoRow.style.display = 'contents';
            } else {
                moreBtn.textContent = 'More Info';
                infoRow.style.display = 'none';
            }
        })

        const buyBtn = createElement('button', 'Buy it', 'buyBtn');
        buyBtn.addEventListener('click', () => {
            tr.remove();
            infoRow.remove();
            let current = Number(totalPrice.textContent);
            current += Number(price);
            totalPrice.textContent = current.toFixed(2);

        })

        actionsTd.appendChild(moreBtn);
        actionsTd.appendChild(buyBtn);
        tr.appendChild(actionsTd);

        const infoRow = createElement('tr', '', 'hide');
        const yearTd = createElement('td', `Year: ${year}`);
        const descriptionTd = createElement('td', `Description: ${description}`);
        descriptionTd.setAttribute('colspan', 3);

        infoRow.appendChild(yearTd);
        infoRow.appendChild(descriptionTd);

        document.getElementById('furniture-list').appendChild(tr);
        document.getElementById('furniture-list').appendChild(infoRow);

        modelInput.value = '';
        yearInput.value = '';
        priceInput.value = '';
        descriptionInput.value = '';

    })

    function createElement(tag, textContent, className, styleDisplay) {
        let element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        if (textContent) {
            element.textContent = textContent;
        }

        if (styleDisplay) {
            element.style.display = styleDisplay;
        }

        return element;
    }
}