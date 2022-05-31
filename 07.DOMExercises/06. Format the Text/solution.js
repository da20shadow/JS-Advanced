function solve() {
  let text = document.getElementById('input');
  let output = document.getElementById('output');
  let sentences = text.value.split('.').filter(el => el);

    while (sentences.length > 0){
        let text = sentences.splice(0,3).join('. ') + '.';
        let paragraph = document.createElement('p');
        paragraph.textContent = text;
        output.appendChild(paragraph);
    }
}