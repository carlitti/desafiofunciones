function pintar(element, color = 'green') {
    element.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function(event) {
    pintar(event.target, 'yellow');
});

