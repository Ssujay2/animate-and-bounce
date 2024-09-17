const colors = ['#FF6347', '#4682B4', '#32CD32', '#FFD700', '#8A2BE2'];
const shapes = ['0%', '25%', '50%', '75%', '100%'];

document.getElementById('change-style').addEventListener('click', () => {
    const nameElement = document.getElementById('name');

    // Randomly select a color and shape
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

    // Apply the selected color and shape
    nameElement.style.backgroundColor = randomColor;
    nameElement.style.borderRadius = randomShape;
});
