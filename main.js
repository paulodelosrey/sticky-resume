const optionsEl = document.getElementById("options")
document.getElementById("more").addEventListener("click", function() {
    if(window.getComputedStyle(optionsEl).display === "none") {
        optionsEl.style.display = "flex"
    } else {
        optionsEl.style.display = "none"
    }
});