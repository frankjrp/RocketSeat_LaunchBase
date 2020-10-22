const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

const pageSelected = new URLSearchParams(window.location.search)
const pageNumber = parseInt(pageSelected.get('page'))

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}

/* Paginação */
function paginate(selectedPage, totalPages) {
    let pages = [],
        oldPage

    pages.push("prior")

    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {

        const firstAndLastPage = currentPage < 3 || currentPage >= totalPages - 1
        const pagesAfterSelectePage = currentPage <= selectedPage + 1
        const pagesBeforeSelectePage = currentPage >= selectedPage - 1

        if (firstAndLastPage || pagesBeforeSelectePage && pagesAfterSelectePage) {

            if (oldPage && currentPage - oldPage > 2) {
                pages.push("...")
            }

            if (oldPage && currentPage - oldPage == 2) {
                pages.push(oldPage + 1)
            }

            pages.push(currentPage)

            oldPage = currentPage
        }

    }

    pages.push("next")

    return pages
}

function createPagination(pagination) {
    const filter = pagination.dataset.filter
    const page = +pagination.dataset.page
    const total = +pagination.dataset.total
    const pages = paginate(page, total)

    let elements = ""

    for (let page of pages) {
        if (String(page).includes("...")) {
            elements += `<span>${page}</span>`

        } else if (String(page).includes("prior")) {
            if (pageNumber > 1) {
                if (filter) {
                    elements += `<a class="btnPriorNext" href="?page=${pageNumber - 1}&filter=${filter}">
                    ←
                    <span></span>
                    Anterior
                    </a>`
                } else {
                    elements += `<a class="btnPriorNext" href="?page=${pageNumber - 1}">
                    ←
                    <span></span>
                    Anterior
                    </a>`
                }
            }

        } else if (String(page).includes("next")) {
            if (!pageSelected.has('page') && total > 1) {
                if (filter) {
                    elements += `<a class="btnPriorNext" href="?page=2&filter=${filter}">Próximo
                    <span></span>
                    →
                    </a>`
                } else {
                    elements += `<a class="btnPriorNext" href="?page=2">Próximo
                    <span></span>
                    →
                    </a>`
                }

            } else {
                if (pageNumber < total) {
                    if (filter) {
                        elements += `<a class="btnPriorNext" href="?page=${pageNumber + 1}&filter=${filter}">Próximo
                        <span></span>
                        →
                        </a>`
                    } else {
                        elements += `<a class="btnPriorNext" href="?page=${pageNumber + 1}">Próximo
                        <span></span>
                        →
                        </a>`
                    }
                }
            }

        } else {
            if (filter) {
                elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`

            } else {
                elements += `<a href="?page=${page}">${page}</a>`
            }
        }
    }

    pagination.innerHTML = elements
}

/* Página selecionada */
function selectedPage(pagination) {
    const pages = pagination.querySelectorAll("a")

    for (let page of pages) {
        if (!pageSelected.has('page') && page.innerText == 1) {
            page.classList.add("selected")

        } else {
            if (page.innerText == pageNumber) {
                page.classList.add("selected")
            }
        }
    }
}

const pagination = document.querySelector(".pagination")

if (pagination) {
    createPagination(pagination)
    selectedPage(pagination)
}