function extractText() {
    let liItems = document.querySelectorAll('#items li');
    let result = document.querySelector('#result');

    liItems = Array.from(liItems);

    liItems.map(item => result.textContent += item.textContent + '\n')
}