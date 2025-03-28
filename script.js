const container = document.querySelector(".container");
const body = document.querySelector("body");
container.style.width = "544px";
let boxes_ = 256;
const button = document.querySelector("button");
button.addEventListener("click", () => {
    let boxes = prompt("Enter boxes for each axis", 16);
    while (boxes > 100) {
        boxes = prompt("Cant do more than 100", boxes);
    }
    boxes_ = boxes * boxes;
    container.innerHTML = "";
    console.log(boxes_);
    grid(boxes_);
});
function getRandomRGB() {
    let r = Math.floor(Math.random() * 256); // Random value 0-255
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}`;
}
function grid (boxes_) {
    const empty = document.querySelector(".message");
    if (boxes_ === 0 || boxes_ === null) {
        container.style.border = "0";
        empty.textContent = `Empty! grid is set to ${boxes_}`;
        body.appendChild(empty);
    }
    else {
        empty.textContent = "";
        container.style.border = "2px solid orange";
        for (let i = 0; i < boxes_; i++) {
            const box = document.createElement("div");
            container.appendChild(box);
            const x_square = 295936 / boxes_;
            box.style.height = `${Math.sqrt(x_square) - 4}px`;
            box.style.width = `${Math.sqrt(x_square) - 4}px`;
            let opa = 1
            let round_p = 0;
            let round_m = 1;
            box.addEventListener("mouseenter", () => {
                box.style.backgroundColor = `${getRandomRGB()}, ${opa})`;
                if (round_m) {
                    opa -= 0.1;
                    if (opa <= 0) {
                        round_m = 0;
                        round_p = 1;
                    }
                }
                else if (round_p) {
                    opa += 0.1;
                    if (opa >= 1) {
                        round_m = 1;
                        round_p = 0;
                    }
                }
            });
            box.addEventListener("mouseleave", () => {
                box.style.backgroundColor = `${getRandomRGB()}, ${opa})`;
                opa -= 0.1;
                if (round_m) {
                    opa -= 0.1;
                    if (opa <= 0) {
                        round_m = 0;
                        round_p = 1;
                    }
                }
                else if (round_p) {
                    opa += 0.1;
                    if (opa >= 1) {
                        round_m = 1;
                        round_p = 0;
                    }
                }
            });
        };
    }
}
grid(256);