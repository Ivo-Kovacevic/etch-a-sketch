let size = 16;
const button = document.querySelector('button');

function makeGrid() {
    const container = document.querySelector('.container');
    const grid = document.createElement('div');
    container.innerHTML = '';
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.addEventListener("mouseover", changeColor);
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function changeColor() {
    this.classList.add('changeColor');
}

function getSize(event) {
    event.preventDefault();
    size = document.querySelector('input[name="size"]').value;
    if (size < 2 || size > 100) {
        alert("Pick size between 2 and 100.");
    } else {
        makeGrid();
    }
}

makeGrid();

button.addEventListener("click", getSize);