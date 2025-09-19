import data from '../data.js';

const gridLessor = document.querySelector('.lessor-grid');
const gridThird = document.querySelector('.third-grid');

function fillGrid() {

    data.forEach(element => {
        let span = document.createElement('span');
        span.textContent = element.name;

        !element.third ? gridLessor.appendChild(span) : gridThird.appendChild(span)    
    });
    

}

fillGrid();