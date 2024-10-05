const btns = document.querySelectorAll(".btn");
const body = document.body;

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const color = btn.classList[1];
        changeBackground(color);
    });
});

function changeBackground(color) {
    body.style.backgroundColor = getComputedStyle(document.querySelector(`.${color}`)).backgroundColor;
}