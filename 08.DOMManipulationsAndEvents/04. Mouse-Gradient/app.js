function attachGradientEvents() {
    let gradientBox = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    const gradientMouseMove = (e) => {
        let percent = Math.floor((e.offsetX / e.target.clientWidth) * 100);
        resultElement.textContent = `${percent}%`;
    }
    gradientBox.addEventListener('mousemove',gradientMouseMove);
}