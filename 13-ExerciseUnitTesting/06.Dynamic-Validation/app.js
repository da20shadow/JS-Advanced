function validate() {
    let email = document.getElementById('email');

    email.addEventListener('change', ()=> {
        const theEmail = email.value;
        const pattern = /^[a-z]+[@][a-z]+[.][a-z]+$/;
        if (!pattern.test(theEmail)){
            email.className = 'error';
        }else {
            email.className = '';
        }
    })
}