const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorBox = document.getElementById("colorBox");
const rgbText = document.getElementById("rgbText");
const hexText = document.getElementById("hexText");

function clamp(value) {
    return Math.min(255, Math.max(0, value));
}

function updateColor(r, g, b) {
    r = clamp(r);
    g = clamp(g);
    b = clamp(b);

    red.value = r;
    green.value = g;
    blue.value = b;

    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    const rgb = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = rgb;
    rgbText.textContent = rgb;

    const hex = "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");

    hexText.textContent = hex.toUpperCase();
}

/* Eventos sliders */
red.addEventListener("input", () =>
    updateColor(Number(red.value), Number(green.value), Number(blue.value))
);

green.addEventListener("input", () =>
    updateColor(Number(red.value), Number(green.value), Number(blue.value))
);

blue.addEventListener("input", () =>
    updateColor(Number(red.value), Number(green.value), Number(blue.value))
);

/* Eventos inputs numéricos */
redInput.addEventListener("input", () =>
    updateColor(Number(redInput.value), Number(greenInput.value), Number(blueInput.value))
);

greenInput.addEventListener("input", () =>
    updateColor(Number(redInput.value), Number(greenInput.value), Number(blueInput.value))
);

blueInput.addEventListener("input", () =>
    updateColor(Number(redInput.value), Number(greenInput.value), Number(blueInput.value))
);

const colorPicker = document.getElementById("colorPicker");
function updateColor(r, g, b) {
    r = clamp(r);
    g = clamp(g);
    b = clamp(b);

    red.value = r;
    green.value = g;
    blue.value = b;

    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    const rgb = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = rgb;
    rgbText.textContent = rgb;

    const hex = "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");

    hexText.textContent = hex.toUpperCase();
    colorPicker.value = hex;
}

colorPicker.addEventListener("input", () => {
    const hex = colorPicker.value;

    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    updateColor(r, g, b);
});



/* Inicializar */
updateColor(0, 0, 0);
