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
            box.dataset.lightness = 100;
            box.addEventListener("mouseover", randomColor);
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

/*
function changeColor() {
    this.classList.add('changeColor');
}
*/

function getSize(event) {
    event.preventDefault();
    size = document.querySelector('input[name="size"]').value;
    if (size < 2 || size > 100) {
        alert("Pick size between 2 and 100.");
    } else {
        makeGrid();
    }
}

function randomColor() {
    let lightness = this.dataset.lightness;
    let hsl;
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 100);
    let l = Math.max(0, lightness - 10);

    /*
    RGB color generation
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    rgb = 'rgb(' + color.join(', ') + ')';
    */
    
    hsl = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
    this.style.backgroundColor = hsl;
    this.dataset.lightness = l;
}

makeGrid();

button.addEventListener("click", getSize);