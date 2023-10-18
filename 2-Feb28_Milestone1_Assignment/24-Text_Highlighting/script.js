const p = document.getElementById("para");

const words = p.innerHTML.split(" ");

const highlighter = () => {
    for (let i = 0; i < words.length ; i++) {
        if (words[i].length > 8) {
            const span = document.createElement("span");
            span.innerHTML = words[i];
            span.style.backgroundColor = "yellow";
            words[i] = span.outerHTML;
        }
    }
}
highlighter();
p.innerHTML = words.join(" ");

