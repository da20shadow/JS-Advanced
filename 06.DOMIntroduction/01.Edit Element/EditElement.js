function editElement(h1Element,match,replacer) {
    let content = h1Element.textContent;
    let pattern = new RegExp(match,'g');
    content = content.replace(pattern,replacer);
    h1Element.textContent = content;
}