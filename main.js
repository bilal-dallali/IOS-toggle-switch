const darkMode = document.querySelector("input[name=checkbox]")

//only useful in firefox
document.getElementById("dark-mode").checked = false

darkMode.addEventListener("change", (e) => {
    if (e.target.checked) {
        document.body.classList.toggle("dark")
        console.log("checked")
    } else {
        console.log("not checked")
        document.body.classList.remove("dark")
    }
})