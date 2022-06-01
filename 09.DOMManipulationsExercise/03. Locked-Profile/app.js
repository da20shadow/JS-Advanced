function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('.profile button'));

    buttons.forEach(b => {
        b.addEventListener('click',getProfile);
    })

    function getProfile(e){
        let currentProfile = e.target.parentNode;
        let isLocked = currentProfile.querySelector('input').checked;
        if (!isLocked){
            if (e.target.textContent === 'Show more'){
                currentProfile.querySelector('div').style.display = 'block';
                e.target.textContent = 'Hide it';
            }else {
                currentProfile.querySelector('div').style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}