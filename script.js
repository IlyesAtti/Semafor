let delay = 10000;

function changeNow() {
    delay = 0;
    changeColor ();
}

setInterval(changeColor, delay);

let colors= ["btn-warning", "btn-success", "btn-danger"];
let clr = 0;

function changeColor() {
    document.getElementById('light').className = colors[clr];
    clr = (clr + 1) % colors.length;
}
