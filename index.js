let randColor = false;

var colors = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
    '#80B300',
    '#809900',
    '#E6B3B3',
    '#6680B3',
    '#66991A',
    '#FF99E6',
    '#CCFF1A',
    '#FF1A66',
    '#E6331A',
    '#33FFCC',
    '#66994D',
    '#B366CC',
    '#4D8000',
    '#B33300',
    '#CC80CC',
    '#66664D',
    '#991AFF',
    '#E666FF',
    '#4DB3FF',
    '#1AB399',
    '#E666B3',
    '#33991A',
    '#CC9999',
    '#B3B31A',
    '#00E680',
    '#4D8066',
    '#809980',
    '#E6FF80',
    '#1AFF33',
    '#999933',
    '#FF3380',
    '#CCCC00',
    '#66E64D',
    '#4D80CC',
    '#9900B3',
    '#E64D66',
    '#4DB380',
    '#FF4D4D',
    '#99E6E6',
    '#6666FF',
];

const rgbColor = () => {
    if (randColor === false) {
        document.getElementById('colorButton').innerHTML = 'Black';
        randColor = true;
    } else {
        document.getElementById('colorButton').innerHTML = 'RGB';
        randColor = false;
    }

    console.log(randColor);
};

const colorChange = (event, rand) => {
    let color = 'black';

    if (randColor === false) {
        color = 'black';
    } else {
        color = colors[Math.floor(Math.random() * colors.length)];
    }

    event.currentTarget.style.backgroundColor = color;
};

const clearer = () => {
    location.reload();
};

const div = () => {
    const divy = document.createElement('div');
    divy.id = 'square';
    divy.class = 'square';
    divy.style.border = '2px solid';
    divy.style.boxSizing = 'border-box';
    divy.style.height = '40px';
    divy.style.width = '43px';
    divy.style.backgroundColor = 'white';
    divy.addEventListener('clickdown', colorChange);
    divy.addEventListener('mousedown', colorChange);
    divy.addEventListener('mousemove', colorChange);
    document.getElementById('board').appendChild(divy);
};

const createGrid = (num) => {
    for (let i = 0; i < num; i++) {
        div();
    }
};

createGrid(256);
