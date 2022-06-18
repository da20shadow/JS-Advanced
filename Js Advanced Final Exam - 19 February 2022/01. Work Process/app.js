function solve() {

    const firstNameInput = document.getElementById('fname');
    const lastNameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const birthInput = document.getElementById('birth');
    const positionInput = document.getElementById('position');
    const salaryInput = document.getElementById('salary');
    const addWorkerBtn = document.getElementById('add-worker');
    const tableBody = document.getElementById('tbody');
    let sum = document.getElementById('sum');

    addWorkerBtn.addEventListener('click', (e) => {

        e.preventDefault();

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const email = emailInput.value;
        const birth = birthInput.value;
        const position = positionInput.value;
        const salary = Number(salaryInput.value);

        if (firstName && lastName && email && birth && position && salary){

            const tr = createElement('tr');
            tr.appendChild(createElement('td',firstName));
            tr.appendChild(createElement('td',lastName));
            tr.appendChild(createElement('td',email));
            tr.appendChild(createElement('td',birth));
            tr.appendChild(createElement('td',position));
            tr.appendChild(createElement('td',salary));

            const actionsTd = createElement('td');

            const firedBtn = createElement('button','Fired','fired');
            firedBtn.addEventListener('click',()=>{
                tr.remove();
                let currentSum = Number(sum.textContent);
                let newSum = currentSum - salary;
                sum.textContent = newSum.toFixed(2);
            })

            const editBtn = createElement('button','Edit','edit');
            editBtn.addEventListener('click', ()=> {
                tr.remove();
                firstNameInput.value = firstName;
                lastNameInput.value = lastName;
                emailInput.value = email;
                birthInput.value = birth;
                positionInput.value = position;
                salaryInput.value = salary;
                let currentSum = Number(sum.textContent);
                let newSum = currentSum - salary;
                sum.textContent = newSum.toFixed(2);
            })

            actionsTd.appendChild(firedBtn);
            actionsTd.appendChild(editBtn);

            tr.appendChild(actionsTd);

            tableBody.appendChild(tr);
            let currentSum = Number(sum.textContent);
            sum.textContent = (currentSum + Number(salary)).toFixed(2);

            firstNameInput.value = '';
            lastNameInput.value = '';
            emailInput.value = '';
            birthInput.value = '';
            positionInput.value = '';
            salaryInput.value = '';
        }

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
solve()