const menuMobile = document.getElementById("checkbox-menu")
const links = document.querySelectorAll("header nav li")

document.querySelector(".menu_mobile label").addEventListener("click", () => {

    if (menuMobile.checked) {
        document.querySelector("header nav ul").classList.remove("active");
    } else {
        document.querySelector("header nav ul").classList.add("active");
    }
})

for (let link of links) {
    link.addEventListener("click", () => {
        menuMobile.checked = false;
    })
}