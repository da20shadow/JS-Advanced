function solve() {
  let text = document.getElementById('text').value;
  let conv = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  let res = '';
  let lenText = text.length;
  switch (conv){
      case 'Camel Case':
          for (let i = 0; i < lenText; i++) {
              if (text[i] === ' '){
                  res += text[i + 1].toUpperCase();
                  i++;
              }else {
                  res += text[i].toLowerCase();
              }
          }
          result.textContent = res;
          break;
      case 'Pascal Case':
          res += text[0].toUpperCase();
          for (let i = 1; i < lenText; i++) {
              if (text[i] === ' '){
                  res += (text[i + 1].toUpperCase());
                  i++;
              }else {
                  res += text[i].toLowerCase();
              }
          }
          result.textContent = res;
          break;
      default:
          result.textContent = 'Error!';
          break;
  }
}