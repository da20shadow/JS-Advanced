function solve() {
    let displayMovie = document.querySelector('#movies ul');
    let archive = document.querySelector('#archive ul');

    archive.nextElementSibling.addEventListener('click', () => archive.innerHTML = null);
    document.querySelector('button').addEventListener('click', addMovieOnScreen);

    function addMovieOnScreen(e) {
        e.preventDefault();
        let [name, hall, price] = document.querySelectorAll('#container input');

        if (name.value && hall.value && Number(price.value) || price.value === '0') {

            displayMovie.innerHTML +=
                `<li>
                    <span>${name.value}</span>
                    <strong>Hall: ${hall.value}</strong>
                    <div>
                      <strong>${price.value}</strong>
                      <input placeholder="Tickets Sold">
                      <button>Archive</button>
                    </div>
                </li>`

            name.value = null;
            hall.value = null;
            price.value = null;

        }

        Array.from(displayMovie.querySelectorAll('button')).forEach(btn => btn.addEventListener('click', addToArchive));

        function addToArchive(btn) {

            let ticketPrice = btn.target.parentNode.children[0];
            let ticketsSold = btn.target.parentNode.children[1];

            if (Number(ticketsSold.value) || ticketsSold.value === '0') {

                archive.innerHTML +=
                    `<li>
                        <span>${btn.target.parentNode.parentNode.children[0].textContent}</span>
                        <strong>Total amount: ${(ticketPrice.textContent * ticketsSold.value).toFixed(2)}</strong>
                        <button>Delete</button>
                    </li>`

                btn.target.parentNode.parentNode.remove();
                Array.from(archive.querySelectorAll('button'))
                    .forEach(btn => btn.addEventListener('click', (btn) => btn.target.parentNode.remove()));

            }
        }
    }
}
//Second solution
// function solve() {
//     const form = document.getElementById('add-new');
//     const inputs = Array.from(document.querySelectorAll('input'));
//     const movie = {
//         name: inputs[0],
//         hall: inputs[1],
//         price: inputs[2],
//     }
//     const archive = document.getElementById('archive');
//     form.addEventListener('submit',addMovie);
//
//     function addMovie(e){
//         e.preventDefault();
//         if (movie.name.value.trim() === '' || movie.hall.value === ''
//             || isNaN(Number(movie.price.value))){
//             return;
//         }
//
//         const li = document.createElement('LI');
//         const span = document.createElement('SPAN');
//         span.textContent = movie.name.value;
//         const strong = document.createElement('STRONG');
//         strong.textContent = "Hall: " + movie.hall.value;
//         li.appendChild(span);
//         li.appendChild(strong);
//
//         const div = document.createElement('div');
//         const divStrong = document.createElement('STRONG');
//         divStrong.textContent = Number(movie.price.value).toFixed(2);
//         div.appendChild(divStrong);
//         const divInput = document.createElement('INPUT');
//         divInput.setAttribute('placeholder','Tickets Sold');
//         div.appendChild(divInput);
//         const divBtn = document.createElement('BUTTON');
//         divBtn.textContent = 'Archive'
//         divBtn.addEventListener('click',addToArchive);
//         div.appendChild(divBtn);
//
//         li.appendChild(div);
//
//         const moviesSection = document.querySelector('#movies ul');
//         console.log(moviesSection)
//         moviesSection.appendChild(li);
//         movie.name.value = '';
//         movie.hall.value ='';
//         movie.price.value = '';
//
//         function addToArchive(){
//             if (typeof divInput.value === 'number'){
//                 let multiply = Number(divInput.value);
//                 let price = Number(divStrong.textContent);
//                 let total = price * multiply;
//                 divInput.remove();
//                 divBtn.remove();
//                 let deleteBtn = document.createElement('button');
//                 deleteBtn.textContent = 'Delete';
//                 deleteBtn.addEventListener('click',deleteArchive);
//                 div.appendChild(deleteBtn);
//                 divStrong.textContent = total.toFixed(2);
//                 archive.appendChild(li);
//             }
//         }
//         function deleteArchive(){
//             li.remove();
//         }
//     }
//     const clearBtn = archive.children[2];
//     console.log(clearBtn)
//     clearBtn.addEventListener('click',clearArchives);
//
//     function clearArchives(){
//         const archiveList = Array.from(archive.querySelectorAll('li'));
//         archiveList.forEach(li => li.remove());
//     }
// }

