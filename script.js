let delay = 10000;

function changeNow() {
    delay = 0;
    changeColor ();
}

setInterval (changeColor, delay);

 function changeColor() { 
    if (document.getElementById('light').className == "btn-danger") {
        document.getElementById('light').className = "btn-warning";
        var access = document.getElementById('light').className;
    } else if (document.getElementById('light').className == "btn-warning") {
        document.getElementById('light').className = "btn-success";
        var access = document.getElementById('light').className;
    } else if (document.getElementById('light').className == "btn-success") {
        document.getElementById('light').className = "btn-danger";
        var access = document.getElementById('light').className;
    }
}


