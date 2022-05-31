function focused() {
    let inputElements = Array.from(document.querySelectorAll('input'));

    for (const inputElement of inputElements) {
        inputElement.addEventListener('focus',onfocus)
        inputElement.addEventListener('blur', onblur)
    }
    function onfocus(e){
        e.target.parentNode.className = 'focused';
    }
    function onblur(e){
        e.target.parentNode.className ='';
    }
}