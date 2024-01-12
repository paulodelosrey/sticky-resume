const colorThemes = {
    amarillo : "#fff2ab",
    amarilloSuave : "#fff7d1",
    verde : "#cbf1c4",
    verdeSuave: "#e4f9e0",
    azul: "#cde9ff",
    azulSuave: "#e2f1ff",
    rosado: "#ffcce5",
    rosadoSuave: "#ffe4f1",
    gris: "#e1dfdd",
    grisSuave: "#f3f2f1",
}
const moreBtn = document.getElementById("more")
const optionsEl = document.getElementById("options")
const welcomeEl = document.getElementById("welcome-div")
const stickyNote = document.getElementById("main-container")
const stickyNoteBar = document.getElementById("top-bar")
const listbtn = document.getElementById("notes-list")
const items = document.getElementById("list-div")
const colorButtons = document.getElementsByClassName("color-button")
moreBtn.addEventListener("click", function(){
    optionsEl.classList.toggle("visible")
    optionsEl.classList.contains("visible") ? welcomeEl.style.marginTop = "3vh" : welcomeEl.style.marginTop = "8vh"
    optionsEl.classList.contains("visible") ? items.style.marginTop = "3vh" : items.style.marginTop = "8vh"
})
listbtn.addEventListener("click", function(){
    welcomeEl.classList.toggle("nonVisible")
    items.classList.toggle("visible")
    items.classList.contains("visible") ? items.style.display = "flex" : items.style.display = "none"
    optionsEl.classList.contains("visible") ? items.style.marginTop = "3vh" : items.style.marginTop = "8vh"
}) 
for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener("click", function() {
        if (colorButtons[i].classList.contains("yellow")) {
            stickyNoteBar.style.backgroundColor = colorThemes.amarillo
            stickyNote.style.backgroundColor = colorThemes.amarilloSuave
        } else if (colorButtons[i].classList.contains("green")) {
            stickyNoteBar.style.backgroundColor = colorThemes.verde
            stickyNote.style.backgroundColor = colorThemes.verdeSuave
        } else if (colorButtons[i].classList.contains("blue")) {
            stickyNoteBar.style.backgroundColor = colorThemes.azul
            stickyNote.style.backgroundColor = colorThemes.azulSuave
        } else if (colorButtons[i].classList.contains("pink")) {
            stickyNoteBar.style.backgroundColor = colorThemes.rosado
            stickyNote.style.backgroundColor = colorThemes.rosadoSuave
        } else if (colorButtons[i].classList.contains("grey")) {
            stickyNoteBar.style.backgroundColor = colorThemes.gris
            stickyNote.style.backgroundColor = colorThemes.grisSuave
        }
    })
}