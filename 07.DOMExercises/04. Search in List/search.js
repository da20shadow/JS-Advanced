function search() {
    let towns = document.querySelectorAll('#towns li');
    let input = document.getElementById('searchText');
    let foundMatches = document.getElementById('result');

    towns = Array.from(towns);

    let matches = 0;

    for (const town of towns) {
        if (town.textContent.includes(input.value)){
            town.style.textDecoration = 'underline';
            town.style.fontWeight = 'bold';
            matches++;
        }else{
            town.style.textDecoration = 'none';
            town.style.fontWeight = 'normal';
        }
    }
    foundMatches.textContent = `${matches} matches found`;
    input.value = '';
}
