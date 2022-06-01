function create(words) {
   for (const word of words) {
      let childDiv = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      childDiv.appendChild(p);

      childDiv.addEventListener('click',(e) => {
         e.target.querySelector('p').style.display = 'block';
      })

   document.getElementById('content').appendChild(childDiv);
   }
}