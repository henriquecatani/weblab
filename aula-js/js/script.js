light()
function dark() {
    document.body.className = "dark"
    document.getElementById("darktg").style.display = "none"
    document.getElementById("lighttg").style.display = "none"
    document.getElementById("blacktg").style.display = ""
}
function black() {
    document.body.className = "black"
    // document.body.classList.toggle("black")
    document.getElementById("blacktg").style.display = "none"
    document.getElementById("darktg").style.display = "none"
    document.getElementById("lighttg").style.display = ""


    // document.body.classList.add("black")
}
function light() {
    document.body.className = "light"
    document.getElementById("lighttg").style.display = "none"
    document.getElementById("blacktg").style.display = "none"
    document.getElementById("darktg").style.display = ""
}