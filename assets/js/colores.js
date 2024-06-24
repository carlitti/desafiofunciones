// assets/js/colors.js
const divs = document.querySelectorAll('div');
divs.forEach(div => {
    div.addEventListener('click', function() {
        div.style.backgroundColor = 'black';
    });
});

let globalColor = '';

// Evento para cambiar el color del div "key"
document.addEventListener('keydown', function(event) {
    const keyDiv = document.getElementById('key');
    if (event.key === 'a') {
        globalColor = 'pink';
        keyDiv.style.backgroundColor = globalColor;
    } else if (event.key === 's') {
        globalColor = 'orange';
        keyDiv.style.backgroundColor = globalColor;
    } else if (event.key === 'd') {
        globalColor = 'lightblue';
        keyDiv.style.backgroundColor = globalColor;
    } else if (event.key === 'q') {
        createColoredDiv('purple');
    } else if (event.key === 'w') {
        createColoredDiv('gray');
    } else if (event.key === 'e') {
        createColoredDiv('brown');
    }
});

function createColoredDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    document.body.appendChild(newDiv);
}
