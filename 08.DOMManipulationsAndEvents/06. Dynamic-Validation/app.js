function validate() {
    let emailInput = document.getElementById('email');

    emailInput.addEventListener('change',validateEmail);

    function validateEmail(e){
        let email = e.target.value;
        if (email.match(/[a-z]+[@][a-z]+[.]+[a-z]+/gm)){
            e.target.className = '';
        }else{
            e.target.className = 'error';
        }
    }
}