// Initial Position of image
let x = 0;
let y = 0;

// position to be change in one keypress
const distance = 1;

const changePosition = () => {
    const image = document.getElementById("image");
    image.style.top = x + "rem";
    image.style.left = y + "rem";

}
document.body.addEventListener("keydown", (event) => {
    let key = event.key;
    switch (key) {
        case "ArrowUp":
            x -= distance;
            break;
        case "ArrowDown":
            x += distance;
            break;
        case "ArrowLeft":
            y -= distance;
            break;
        case "ArrowRight":
            y += distance;
            break;
        default:
            break;
    }
    // Setting the updated position
    changePosition();
})

// Setting the initial position
changePosition();