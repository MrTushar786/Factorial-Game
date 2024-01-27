const input = document.getElementById("input");
const button = document.getElementById("btn");
let f = 1;

function calculate() {
    const a = parseInt(input.value);
    f = 1;
    for (let i = 1; i <= a; i++) {
        f *= i;
    }
    return f;
}

button.addEventListener('click', () => {
    if (button.innerHTML === "Reset") {
        input.value = "";
        button.innerHTML = "Calculate";
    } else {
        const result = calculate();
        input.value = result;
        button.innerHTML = "Reset";
    }
});
zz