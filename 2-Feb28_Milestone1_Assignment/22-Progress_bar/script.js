document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progressBar");

    // Calculate the maximum scrollable height
    const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    window.addEventListener("scroll", function () {
        // Calculate the current scroll progress
        const scrollProgress = (window.scrollY / maxScrollHeight) * 100;
        
        // Update the width of the progress bar
        progressBar.style.width = scrollProgress + "%";
    });
});
