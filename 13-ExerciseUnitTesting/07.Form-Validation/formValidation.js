function validate() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const email = document.getElementById('email');
    const companyNumber = document.getElementById('companyNumber');

    document.getElementById('company').addEventListener('change', (e) => {
        if (e.currentTarget.checked) {
            document.getElementById('companyInfo').style.display = 'block';
        } else {
            document.getElementById('companyInfo').style.display = 'none';
        }
    })

    document.getElementById('registerForm').addEventListener('submit', validation);

    let invalidInputs = [];
    function validation(e) {
        e.preventDefault();

        const usernamePattern = /^[a-zA-Z0-9]{3,20}$/gm;
        if (!usernamePattern.test(username.value)) {
            invalidInputs.push(username);
        }

        let passPattern = /^[\w]{5,15}$/;

        if (!passPattern.test(password.value) || password.value !== confirmPassword.value){
            invalidInputs.push(password);
            invalidInputs.push(confirmPassword);
        }

        const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
        if (!emailPattern.test(email.value)) {
            invalidInputs.push(email);
        }

        const checkBox = document.getElementById('company');
        if (checkBox.checked) {
            const cpattern = /^[0-9]{4}$/;
            if (!cpattern.test(companyNumber.value)){
                invalidInputs.push(companyNumber);
            }
        }

        invalidInputs.forEach(field => {
            field.style.borderColor = 'red';
        })
        invalidInputs.length === 0
            ? document.querySelector('#valid').style.display = 'block'
            : document.querySelector('#valid').style.display = 'none';
    }
}
