function deleteByEmail() {
    let inputEmail = document.querySelector('input[name="email"]');
    let tdEmailsList = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultOutput = document.getElementById('result');

    let emailsList = Array.from(tdEmailsList);

    let tdToDelete = emailsList.find(td => td.textContent === inputEmail.value.trim());
    if (tdToDelete){
        tdToDelete.parentNode.remove();
        resultOutput.textContent = 'Deleted.';
    }else {
        resultOutput.textContent = 'Not found.';
    }
    inputEmail.value = '';
    // emailsList.forEach(td => {
    //
    //     td.textContent === inputEmail
    //         ? td.parentNode.remove()
    //         : result = 'Not Found.'
    // })
}