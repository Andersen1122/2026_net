let count = 0;

function changeColor(color) {
    document.body.style.backgroundColor = color;

    count++;

    document.getElementById("message").textContent =
        "Current color: " + color;

    document.getElementById("counter").textContent =
        "Changes: " + count;
}

let buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        changeColor(button.dataset.color);
    });
});