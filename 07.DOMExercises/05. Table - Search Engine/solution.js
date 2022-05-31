function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let cells = document.querySelectorAll('tbody tr');
      let searchInput = document.getElementById('searchField');
      cells = Array.from(cells);

      for (const cell of cells) {
         cell.classList.remove('select');
         if (cell.textContent.includes(searchInput.value)){
            cell.className = 'select';
         }
      }
      searchInput.value = '';
   }
}