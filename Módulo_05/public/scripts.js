const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}

//Paginação
let totalPages = 20,
    selectedPage = 15,
    pages = []

for (let currentPage = 1; currentPage <= totalPages; currentPage++) {

    const firstAndLastPage = currentPage == 1 || currentPage == totalPages
    const pagesAfterSelectePage = currentPage <= selectedPage + 2
    const pagesBeforeSelectePage = currentPage >= selectedPage - 2

    if (firstAndLastPage || pagesBeforeSelectePage && pagesAfterSelectePage) {
        pages.push(currentPage)

    }

    console.log(pages)

}