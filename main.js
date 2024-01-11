const optionsEl = document.getElementById("options")
const topBarEl = document.getElementById("top-bar")
const mainContainerEl = document.getElementById("main-container")

document.getElementById("more").addEventListener("click", function() {
    if(window.getComputedStyle(optionsEl).display === "none") {
        optionsEl.style.display = "flex"
    } else {
        optionsEl.style.display = "none"
    }
})

document.addEventListener("click", function(e) {
    if(e.target.classList.contains("yellow")) {
        topBarEl.style.backgroundColor = "#fff2ab"
        mainContainerEl.style.backgroundColor = "#fff7d1"
    }
    else if(e.target.classList.contains("green")) {
        topBarEl.style.backgroundColor = "#cbf1c4"
        mainContainerEl.style.backgroundColor = "#e4f9e0"
    }
    else if(e.target.classList.contains("blue")) {
        topBarEl.style.backgroundColor = "#cde9ff"
        mainContainerEl.style.backgroundColor = "#e2f1ff"
    }
    else if(e.target.classList.contains("pink")) {
        topBarEl.style.backgroundColor = "#ffcce5"
        mainContainerEl.style.backgroundColor = "#ffe4f1"
    }
    else if(e.target.classList.contains("grey")) {
        topBarEl.style.backgroundColor = "#e1dfdd"
        mainContainerEl.style.backgroundColor = "#f3f2f1"
    }
})