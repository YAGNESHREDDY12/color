const colorDisplay = document.getElementById('color-display');
const color = document.getElementById('body-color');
const flipButton = document.getElementById('flip-button');

const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

flipButton.addEventListener('click', () => {
    const randomColor = generateRandomColor();
    colorDisplay.textContent = "BACKGROUND COLOUR : " +randomColor;
    color.style.backgroundColor = randomColor;
    flipButton.style.backgroundColor = randomColor;
});